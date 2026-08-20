import type {
  IFeatureItem,
  IOverpassPOIItem,
  IPOI,
  IPOIState,
} from '@appTypes/interfaces';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const API_KEY = import.meta.env.VITE_OPENTRIPMAP_API_KEY;

const fetchDetailsByXid = async (xid: string) => {
  const res = await fetch(
    `https://api.opentripmap.com/0.1/ru/places/xid/${xid}?apikey=${API_KEY}`
  );
  const details = await res.json();
  return {
    name: details.name,
    description:
      details.wikipedia_extracts?.text ||
      details.info?.descr ||
      'Описание отсутствует',
    photo: details.preview?.source || '',
    category: details.kinds || '',
    address:
      details.address?.road ||
      details.address?.suburb ||
      details.address?.city ||
      '',
  };
};

export const fetchPOI = createAsyncThunk<
  IPOI[],
  { lon: number; lat: number; radius: number; kinds?: string },
  { rejectValue: string }
>('poi/fetchPOI', async ({ lon, lat, radius, kinds }, { rejectWithValue }) => {
  const url = `https://api.opentripmap.com/0.1/ru/places/radius?radius=${radius}&lon=${lon}&lat=${lat}&kinds=${
    kinds || 'interesting_places'
  }&format=json&apikey=${API_KEY}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    if (!Array.isArray(data)) return [];

    const pois: IPOI[] = await Promise.all(
      data.slice(0, 9).map(async (item: IOverpassPOIItem) => {
        const details = await fetchDetailsByXid(item.xid);
        return {
          id: item.xid,
          lat: item.point.lat,
          lon: item.point.lon,
          name: details.name,
          category: details.category,
          description: details.description,
          photo: details.photo,
          address: details.address,
        };
      })
    );

    return pois;
  } catch {
    return rejectWithValue('Ошибка загрузки POI');
  }
});

export const fetchPOIByName = createAsyncThunk<
  IPOI[],
  { query: string; lon: number; lat: number; radius: number },
  { rejectValue: string }
>(
  'poi/fetchPOIByName',
  async ({ query, lon, lat, radius }, { rejectWithValue }) => {
    const url = `https://api.opentripmap.com/0.1/ru/places/autosuggest?name=${encodeURIComponent(
      query
    )}&lon=${lon}&lat=${lat}&radius=${radius}&apikey=${API_KEY}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (!Array.isArray(data.features)) return [];

      const pois: IPOI[] = await Promise.all(
        data.features.slice(0, 9).map(async (item: IFeatureItem) => {
          const details = await fetchDetailsByXid(item.properties.xid);
          return {
            id: item.properties.xid,
            lat: item.geometry.coordinates[1],
            lon: item.geometry.coordinates[0],
            name: details.name,
            category: details.category,
            description: details.description,
            photo: details.photo,
            address: details.address,
          };
        })
      );

      return pois;
    } catch {
      return rejectWithValue('Ошибка поиска по названию');
    }
  }
);

const initialState: IPOIState = {
  items: [],
  loading: false,
  error: null,
  selectedPOI: null,
};

const poiSlice = createSlice({
  name: 'poi',
  initialState,
  reducers: {
    clearPOI: (state) => {
      state.items = [];
      state.error = null;
    },
    setSelectedPOI(state, action: PayloadAction<IPOI | null>) {
      state.selectedPOI = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPOI.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPOI.fulfilled, (state, action: PayloadAction<IPOI[]>) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchPOI.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchPOIByName.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchPOIByName.fulfilled,
        (state, action: PayloadAction<IPOI[]>) => {
          state.items = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchPOIByName.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearPOI, setSelectedPOI } = poiSlice.actions;
export default poiSlice.reducer;
