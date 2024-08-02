import detailsReducer, { addDetails, clearDetails } from '@/store/detailsSlice';
import { mockPerson } from '@/tests/mockPeople';

describe('detailsSlice', () => {
  it('should return the initial state when passed an empty action', () => {
    const result = detailsReducer(undefined, { type: '' });

    expect(result).toEqual({ person: null });
  });

  it('should add details with addDetails action', () => {
    const action = {
      type: addDetails.type,
      payload: mockPerson,
    };

    const result = detailsReducer({ person: null }, action);

    expect(result).toEqual({ person: mockPerson });
  });

  it('should clear details with clearDetails action', () => {
    const action = {
      type: clearDetails.type,
    };

    const result = detailsReducer({ person: mockPerson }, action);

    expect(result).toEqual({ person: null });
  });
});
