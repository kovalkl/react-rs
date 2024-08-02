import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Person } from '@/models/types';

type PersonState = {
  person: Person | null;
};

const initialState: PersonState = {
  person: null,
};

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    addDetails(state, action: PayloadAction<Person>) {
      state.person = action.payload;
    },
    clearDetails(state) {
      state.person = null;
    },
  },
});

export const { addDetails, clearDetails } = detailsSlice.actions;

export default detailsSlice.reducer;
