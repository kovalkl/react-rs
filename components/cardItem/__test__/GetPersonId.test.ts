import { getPersonId } from '@/components/cardItem/getPersonId';
import { mockPerson } from '@/tests/mockPeople';

describe('getPersonId', () => {
  it('should return the id of the homeworld', () => {
    expect(getPersonId(mockPerson.url)).toBe('1');
  });
});
