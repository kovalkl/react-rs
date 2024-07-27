import { configureStore } from '@reduxjs/toolkit';

import { peopleApi } from './../redux/peopleApi';
import detailsReducer from './detailsSlice';
import pageCardsReducer from './pageCardsSlice';
import selectedPeopleReducer from './selectedPeopleSlice';

const store = configureStore({
  reducer: {
    selectedPeople: selectedPeopleReducer,
    pageCards: pageCardsReducer,
    details: detailsReducer,
    [peopleApi.reducerPath]: peopleApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(peopleApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
