import { configureStore } from '@reduxjs/toolkit';

import { peopleApi } from './../redux/peopleApi';
import pageCardsReducer from './pageCardsSlice';
import selectedPeopleReducer from './selectedPeopleSlice';

const store = configureStore({
  reducer: {
    selectedPeople: selectedPeopleReducer,
    pageCards: pageCardsReducer,
    [peopleApi.reducerPath]: peopleApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(peopleApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
