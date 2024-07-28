import { mockPeople } from './../../tests/mockPeople';
import pageCardsReducer, { addCards } from './../pageCardsSlice';

describe('pageCardsSlice', () => {
  it('should add cards array with addCards action', () => {
    const action = {
      type: addCards.type,
      payload: mockPeople,
    };

    const result = pageCardsReducer({ list: [] }, action);

    expect(result).toEqual({ list: mockPeople });
  });
});
