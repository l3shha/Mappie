import type { IPOI } from '@appTypes/interfaces';
import { auth, db } from '@firebase';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from 'firebase/firestore';

interface FavoriteState {
  items: IPOI[];
  loading: boolean;
}

const initialState: FavoriteState = {
  items: [],
  loading: false,
};

export const loadFavorites = createAsyncThunk(
  'favorite/loadFavorites',
  async () => {
    const user = auth.currentUser;

    if (!user) {
      return [];
    }

    const favoritesRef = collection(db, 'users', user.uid, 'favorites');

    const snapshot = await getDocs(favoritesRef);

    return snapshot.docs.map((favorite) => favorite.data() as IPOI);
  }
);

export const addFavoriteAsync = createAsyncThunk(
  'favorite/addFavorite',
  async (poi: IPOI) => {
    const user = auth.currentUser;

    if (!user) {
      throw new Error('Пользователь не авторизован');
    }

    const favoriteRef = doc(db, 'users', user.uid, 'favorites', poi.id);

    await setDoc(favoriteRef, poi);

    return poi;
  }
);

export const removeFavoriteAsync = createAsyncThunk(
  'favorite/removeFavorite',
  async (poiId: string) => {
    const user = auth.currentUser;

    if (!user) {
      throw new Error('Пользователь не авторизован');
    }

    const favoriteRef = doc(db, 'users', user.uid, 'favorites', poiId);

    await deleteDoc(favoriteRef);

    return poiId;
  }
);

const favoriteSlice = createSlice({
  name: 'favorite',

  initialState,

  reducers: {
    clearFavorites(state) {
      state.items = [];
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loadFavorites.pending, (state) => {
        state.loading = true;
      })

      .addCase(loadFavorites.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })

      .addCase(loadFavorites.rejected, (state) => {
        state.loading = false;
      })

      .addCase(addFavoriteAsync.fulfilled, (state, action) => {
        const exists = state.items.some(
          (item) => item.id === action.payload.id
        );

        if (!exists) {
          state.items.push(action.payload);
        }
      })

      .addCase(removeFavoriteAsync.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      });
  },
});

export const { clearFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;
