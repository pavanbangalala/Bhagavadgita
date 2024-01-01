import {configureStore} from '@reduxjs/toolkit';
import {geetaApi} from './GitaApi';
import {setupListeners} from '@reduxjs/toolkit/query';

const store = configureStore({
  reducer: {
    [geetaApi.reducerPath]: geetaApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {warnAfter: 256},
    }).concat(geetaApi.middleware),
});
setupListeners(store.dispatch);

export default store;
