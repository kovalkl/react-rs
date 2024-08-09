import { configureStore } from '@reduxjs/toolkit';

import selectedPeopleReducer from '@/lib/selectedPeopleSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      selectedPeople: selectedPeopleReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
