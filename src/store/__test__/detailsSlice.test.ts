import { people } from './../../tests/mockPeople';
import detailsReducer, { addDetails, clearDetails } from './../detailsSlice';

describe('detailsSlice', () => {
  it('should return the initial state when passed an empty action', () => {
    const result = detailsReducer(undefined, { type: '' });

    expect(result).toEqual({ person: null });
  });

  it('should add details with addDetails action', () => {
    const action = {
      type: addDetails.type,
      payload: people[0],
    };

    const result = detailsReducer({ person: null }, action);

    expect(result).toEqual({ person: people[0] });
  });

  it('should clear details with clearDetails action', () => {
    const action = {
      type: clearDetails.type,
    };

    const result = detailsReducer({ person: people[0] }, action);

    expect(result).toEqual({ person: null });
  });
});
