import { configureStore } from '@reduxjs/toolkit';

import appSlice from './appSlice';

export default configureStore({
  reducer: appSlice,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
