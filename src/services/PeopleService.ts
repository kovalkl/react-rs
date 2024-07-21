import { IResponsePeople, Person } from './../shared/types';
import requestApi from './RequestApi';

class PeopleService {
  public async getPeople(page: string, searchQuery: string): Promise<IResponsePeople> {
    const response: { data: IResponsePeople } = await requestApi.get(
      `?${searchQuery !== '' ? `search=${searchQuery}&` : ''}page=${page}`,
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
