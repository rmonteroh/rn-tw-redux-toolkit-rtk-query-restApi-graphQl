import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counter-slice';
import { apiSlice } from './features/api/api-slice';
import { api } from '../graphql/queries/character.generated';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(apiSlice.middleware).concat(api.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
