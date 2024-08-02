import { configureStore } from '@reduxjs/toolkit';

import { peopleApi } from '@/redux/peopleApi';
import detailsReducer from '@/store/detailsSlice';
import pageCardsReducer from '@/store/pageCardsSlice';
import selectedPeopleReducer from '@/store/selectedPeopleSlice';

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
