import { IResponsePeople, Person } from '../shared/types';
import requestApi from './RequestApi';

class PeopleService {
  public async getPeople(page: number): Promise<IResponsePeople> {
    const response: { data: IResponsePeople } = await requestApi.get(`?page=${page}`);
    return response.data;
  }

  public async getPersonBySearch(searchQuery: string, page: number): Promise<IResponsePeople> {
    const response: { data: IResponsePeople } = await requestApi.get(
      `?search=${searchQuery}&page=${page}`,
    );
    return response.data;
  }

  public async getPersonById(id: number): Promise<Person> {
    const response: { data: Person } = await requestApi.get(`${id}`);
    return response.data;
  }
}

const peopleService = new PeopleService();
export default peopleService;
