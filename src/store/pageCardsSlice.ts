import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Person } from '../models/types';

type PageCardsState = {
  list: Person[];
};

const initialState: PageCardsState = {
  list: [],
};

const pageCardsSlice = createSlice({
  name: 'cardsOnPage',
  initialState,
  reducers: {
    addCards(state, action: PayloadAction<Person[]>) {
      state.list = action.payload;
    },
  },
});

export const { addCards } = pageCardsSlice.actions;

export default pageCardsSlice.reducer;
