import pageCardsReducer, { addCards } from '@/store/pageCardsSlice';
import { mockPeople } from '@/tests/mockPeople';

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
