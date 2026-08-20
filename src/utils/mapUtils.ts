import IconArchitecture from '@assets/icons/IconArchitecture.svg';
import IconAuto from '@assets/icons/IconAuto.svg';
import IconBank from '@assets/icons/IconBank.svg';
import IconBike from '@assets/icons/IconBike.svg';
import IconCoffee from '@assets/icons/IconCoffee.svg';
import IconCulture from '@assets/icons/IconCulture.svg';
import IconEntertainment from '@assets/icons/IconEntertainment.svg';
import IconFactory from '@assets/icons/IconFactory.svg';
import IconFood from '@assets/icons/IconFood.svg';
import IconGas from '@assets/icons/IconGas.svg';
import IconHistory from '@assets/icons/IconHistory.svg';
import IconNature from '@assets/icons/IconNature.svg';
import IconOther from '@assets/icons/IconOther.svg';
import IconReligion from '@assets/icons/IconReligion.svg';
import IconShop from '@assets/icons/IconShop.svg';
import IconSleep from '@assets/icons/IconSleep.svg';
import IconSport from '@assets/icons/IconSport.svg';
import IconUserLocation from '@assets/icons/IconUserLocation.svg';
import {
  DEFAULT_MARKER_ICON_SIZE,
  POI_ICON_SIZE,
  USER_ICON_SIZE,
} from '@constants/mapConfig';
import L from 'leaflet';

export const DefaultIcon = L.icon({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: DEFAULT_MARKER_ICON_SIZE,
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export const userLocationIcon = L.icon({
  iconUrl: IconUserLocation,
  iconSize: USER_ICON_SIZE,
  iconAnchor: [10, 7],
  popupAnchor: [0, -7],
});

const categoryIcons: Record<string, string> = {
  architecture: IconArchitecture,
  cultural: IconCulture,
  historic: IconHistory,
  religion: IconReligion,

  food: IconFood,
  cafes: IconCoffee,
  shops: IconShop,

  sport: IconSport,
  entertainment: IconEntertainment,
  natural: IconNature,

  banks: IconBank,
  gas_stations: IconGas,
  car: IconAuto,
  bicycle: IconBike,
  industrial_facilities: IconFactory,

  accommodation: IconSleep,
};

export const getPOIIcon = (kinds = '') => {
  const kindList = kinds.split(',');

  const matchedKind = kindList.find((kind) => categoryIcons[kind]);

  const iconUrl = matchedKind ? categoryIcons[matchedKind] : IconOther;

  return L.icon({
    iconUrl,
    iconSize: POI_ICON_SIZE,
    iconAnchor: [9, 18],
    popupAnchor: [0, -20],
  });
};

export const poiIcon = getPOIIcon();
