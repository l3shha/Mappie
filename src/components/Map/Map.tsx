/* eslint-disable simple-import-sort/imports */
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
/* eslint-enable simple-import-sort/imports */

import type { TPOIMarkerProps } from '@appTypes/interfaces';
import CenterButton from '@components/CenterButton/CenterButton';
import {
  DynamicCircleOptions,
  FixedCircleOptions,
  StyledMap,
  StyledMapContainer,
} from '@components/Map/Map.styled';
import RoutingLayer from '@components/RoutingLayer/RoutingLayer';
import {
  DEFAULT_MAP_ZOOM,
  FIXED_CIRCLE_RADIUS,
  RADIUS_MULTIPLIER,
} from '@constants/mapConfig';
import { useUserLocation } from '@hooks/useUserLocation';
import type { RootState } from '@store/store';
import { DefaultIcon, getPOIIcon, userLocationIcon } from '@utils/mapUtils';
import { memo, useMemo } from 'react';
import { Circle, Marker, Popup, TileLayer, ZoomControl } from 'react-leaflet';
import { useSelector } from 'react-redux';

L.Marker.prototype.options.icon = DefaultIcon;

interface POIMarkerProps extends TPOIMarkerProps {
  category?: string;
}

const POIMarker = memo(function POIMarker({
  lat,
  lon,
  name,
  category,
}: POIMarkerProps) {
  const icon = useMemo(() => getPOIIcon(category), [category]);

  return (
    <Marker position={[lat, lon]} icon={icon}>
      <Popup>{name || 'Без названия'}</Popup>
    </Marker>
  );
});

function Map() {
  const position = useUserLocation();

  const poi = useSelector((state: RootState) => state.poi.items);

  const searchRadius = useSelector(
    (state: RootState) => state.userLocation.radius
  );

  const routeTarget = useSelector((state: RootState) => state.route.target);

  const visiblePOI = useMemo(() => {
    return poi.filter((item) => item.lat && item.lon);
  }, [poi]);

  return (
    <StyledMap>
      {position && (
        <StyledMapContainer
          center={position}
          zoom={DEFAULT_MAP_ZOOM}
          zoomControl={false}
          attributionControl={false}
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={position} icon={userLocationIcon} />

          <Circle
            center={position}
            radius={FIXED_CIRCLE_RADIUS}
            pathOptions={FixedCircleOptions}
          />

          {searchRadius && (
            <Circle
              center={position}
              radius={Number(searchRadius) * RADIUS_MULTIPLIER}
              pathOptions={DynamicCircleOptions}
            />
          )}

          {!routeTarget &&
            visiblePOI.map(({ id, lat, lon, name, category }) => (
              <POIMarker
                key={id}
                lat={lat}
                lon={lon}
                name={name}
                category={category}
              />
            ))}

          {routeTarget && (
            <Marker
              key={`route-target-${routeTarget.lat}-${routeTarget.lon}`}
              position={[routeTarget.lat, routeTarget.lon]}
              icon={getPOIIcon()}
            >
              <Popup>Точка назначения</Popup>
            </Marker>
          )}

          {routeTarget && position && (
            <RoutingLayer
              key={`routing-layer-${routeTarget.lat}-${routeTarget.lon}`}
              from={position}
              to={routeTarget}
            />
          )}

          <ZoomControl position="bottomright" />
          <CenterButton position={position} />
        </StyledMapContainer>
      )}
    </StyledMap>
  );
}

export default Map;
