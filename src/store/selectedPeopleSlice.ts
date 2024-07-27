import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Person } from '../models/types';

type SelectedPeopleState = {
  list: { [url: string]: Person };
};

const initialState: SelectedPeopleState = {
  list: {},
};

const selectedPeopleSlice = createSlice({
  name: 'selectedPeople',
  initialState,
  reducers: {
    togglePerson(state, action: PayloadAction<Person>) {
      Object.keys(state.list).includes(action.payload.url)
        ? delete state.list[action.payload.url]
        : (state.list[action.payload.url] = action.payload);
    },

    clearState(state) {
      state.list = {};
    },
  },
});

export const { togglePerson, clearState } = selectedPeopleSlice.actions;

export default selectedPeopleSlice.reducer;
