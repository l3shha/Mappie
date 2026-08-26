import { borderRadius, colors, shadows } from '@constants/theme';
import { MapContainer } from 'react-leaflet';
import styled from 'styled-components';

export const StyledMap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const StyledMapContainer = styled(MapContainer)`
  width: 100%;
  height: 100%;

  .leaflet-container {
    width: 100%;
    height: 100%;
  }

  .leaflet-control-zoom {
    margin: 0 15px 10px 0;
    border: none;
    border-radius: ${borderRadius.medium};
    overflow: hidden;
    box-shadow: ${shadows.default};
  }

  .leaflet-control-zoom a {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    background: ${colors.white};
    color: ${colors.darkGrey};
    border: none;
    font-size: 18px;
  }

  .leaflet-control-zoom a + a {
    border-top: 1px solid ${colors.lightGreyBorder};
  }

  .leaflet-control-zoom a:hover {
    background: ${colors.lightGreyBorder};
  }

  .leaflet-control-center {
    margin: 0 15px 15px 0;
  }

  .leaflet-control-center button {
    width: 32px;
    height: 32px;
    padding: 0;
    background: ${colors.white};
    border: none;
    border-radius: ${borderRadius.medium};
    box-shadow: ${shadows.default};
  }

  .leaflet-control-center button:hover {
    background: ${colors.lightGreyBorder};
  }

  .leaflet-control-center img {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 420px) {
    .leaflet-control-zoom {
      margin-right: 10px;
    }

    .leaflet-control-zoom a,
    .leaflet-control-center button {
      width: 28px;
      height: 28px;
    }

    .leaflet-control-center {
      margin-right: 10px;
      margin-bottom: 10px;
    }

    .leaflet-control-center img {
      width: 16px;
      height: 16px;
    }
  }
`;

export const FixedCircleOptions = {
  fillColor: '#5E7BC72A',
  fillOpacity: 1,
  stroke: false,
};

export const DynamicCircleOptions = {
  fillColor: '#5E7BC7',
  fillOpacity: 0.2,
  color: '#5E7BC7',
  weight: 3,
  dashArray: '10 10',
};
