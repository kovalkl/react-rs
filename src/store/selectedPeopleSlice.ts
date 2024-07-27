import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Person } from '../models/types';

type SelectedPeopleState = {
  list: Person[];
};

const initialState: SelectedPeopleState = {
  list: [],
};

const selectedPeopleSlice = createSlice({
  name: 'selectedPeople',
  initialState,
  reducers: {
    togglePerson(state, action: PayloadAction<Person>) {
      state.list.find((person) => person.url === action.payload.url)
        ? (state.list = state.list.filter((person) => person.url !== action.payload.url))
        : state.list.push(action.payload);
    },
    clearState(state) {
      state.list = [];
    },
  },
});

export const { togglePerson, clearState } = selectedPeopleSlice.actions;

export default selectedPeopleSlice.reducer;
