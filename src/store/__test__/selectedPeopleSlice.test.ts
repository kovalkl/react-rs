import { mockPerson } from './../../tests/mockPeople';
import selectedPeopleReducer, { togglePerson, clearState } from './../selectedPeopleSlice';

describe('selectedPeopleSlice', () => {
  it('should return initial state when passed an empty action', () => {
    const result = selectedPeopleReducer(undefined, { type: '' });

    expect(result).toEqual({ list: {} });
  });

  it('should add person if there is not this person in state with togglePerson action', () => {
    const action = {
      type: togglePerson.type,
      payload: mockPerson,
    };

    const result = selectedPeopleReducer({ list: {} }, action);

    expect(result).toEqual({ list: { [mockPerson.url]: mockPerson } });
  });

  it('should delete person if there is this person in state with togglePerson action', () => {
    const action = {
      type: togglePerson.type,
      payload: mockPerson,
    };

    const result = selectedPeopleReducer({ list: { [mockPerson.url]: mockPerson } }, action);

    expect(result).toEqual({ list: {} });
  });

  it('should clear selected people state with clearState action', () => {
    const action = {
      type: clearState.type,
    };

    const result = selectedPeopleReducer({ list: { [mockPerson.url]: mockPerson } }, action);

    expect(result).toEqual({ list: {} });
  });
});
