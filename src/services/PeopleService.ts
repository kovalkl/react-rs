import requestApi from './RequestApi';

import { Person } from '../shared/types';

interface IResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Person[];
}

class PeopleService {
  public async getPeople(): Promise<Person[]> {
    const response: { data: IResponse } = await requestApi.get('');
    return response.data.results;
  }

  public async getPersonBySearch(searchQuery: string): Promise<Person[]> {
    const response: { data: IResponse } = await requestApi.get(
      `?search=${searchQuery}`,
    );
    return response.data.results;
  }
}

const peopleService = new PeopleService();
export default peopleService;
