import { configureStore } from '@reduxjs/toolkit';
import CountriesSlice from './countriesSlice/CountriesSlice';

export const store = configureStore({
  reducer: {
    country: CountriesSlice,
  },
});
