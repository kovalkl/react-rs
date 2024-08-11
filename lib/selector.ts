import { createSelector } from 'reselect';

import { RootState } from '@/models/types';

const selectSelectedPeople = (state: RootState) => state.selectedPeople.list;

export const selectSelectedPeopleArray = createSelector([selectSelectedPeople], (selectedPeople) =>
  Object.keys(selectedPeople),
);
