import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Person } from '../models/types';

type PeopleState = {
  list: Person[];
};

const initialState: PeopleState = {
  list: [],
};

const peopleSlice = createSlice({
  name: 'people',
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

export const { togglePerson, clearState } = peopleSlice.actions;

export default peopleSlice.reducer;
