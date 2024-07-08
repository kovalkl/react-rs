const baseErrorMessage = 'Something went wrong with the request';

class RequestApi {
  private base_url: string = 'https://api.thedogapi.com/v1/';

  public async get<T>(url: string): Promise<{ data: T }> {
    const response: Response = await fetch(`${this.base_url}${url}`);

    if (!response) {
      throw new Error(baseErrorMessage);
    }

    const data = await response.json();

    return { data };
  }
}

const requestApi = new RequestApi();

export default requestApi;
