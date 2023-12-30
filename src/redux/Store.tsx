import {configureStore} from '@reduxjs/toolkit';
import {geetaApi} from './GitaApi';

const store = configureStore({
  reducer: {
    [geetaApi.reducerPath]: geetaApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {warnAfter: 256},
    }).concat(geetaApi.middleware),
});

export default store;
