import requestApi from './RequestApi';

import { Dog } from './../shared/types';

class DogsService {
  public async getDogs(): Promise<Dog[]> {
    const response: { data: Dog[] } = await requestApi.get(
      'breeds?limit=12&page=1',
    );
    return response.data;
  }
}

const dogsService = new DogsService();
export default dogsService;
