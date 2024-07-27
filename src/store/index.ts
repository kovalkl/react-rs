import { configureStore } from '@reduxjs/toolkit';

import { peopleApi } from './../redux/peopleApi';
import peopleReducer from './peopleSlice';

const store = configureStore({
  reducer: {
    people: peopleReducer,
    [peopleApi.reducerPath]: peopleApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(peopleApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
