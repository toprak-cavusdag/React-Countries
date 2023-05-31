import { createSlice } from '@reduxjs/toolkit';
import {
  showAllCountries,
  searchByCode,
  searchByRegion,
} from './CountriesAction';

const initialState = {
  loading: false,
  countriesData: [],
  countrySearch: [],
  error: false,
  success: false,
  region: '',
  message: '',
};

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.success = false;
      state.error = false;
      state.message = '';
      state.countrySearch = [];
    },

    setRegion: (state, action) => {
      state.region = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(showAllCountries.pending, (state) => {
        state.loading = true;
      })
      .addCase(showAllCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.countriesData = action.payload;
        state.success = true;
      })

      .addCase(showAllCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
        state.countriesData = [];
      })

      //Search

      .addCase(searchByCode.pending, (state) => {
        state.loading = true;
      })

      .addCase(searchByCode.fulfilled, (state, action) => {
        state.loading = false;
        state.countrySearch = action.payload;
        state.success = true;
      })

      .addCase(searchByCode.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
        state.countrySearch = [];
      })

      //filter

      .addCase(searchByRegion.pending, (state) => {
        state.loading = true;
      })

      .addCase(searchByRegion.fulfilled, (state, action) => {
        state.loading = false;
        state.countriesData = action.payload;
        state.success = true;
      })

      .addCase(searchByRegion.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
        state.countriesData = [];
      });
  },
});

export const { reset, setRegion } = countriesSlice.actions;

export default countriesSlice.reducer;
