const STORE_KEYS = {
  SEARCH_HISTORY: 'search_history-kovalkl',
};

class Store {
  private static instance: Store;

  public static getInstance(): Store {
    if (!Store.instance) {
      Store.instance = new Store();
    }

    return Store.instance;
  }

  public setSearchHistory = (searchHistory: string): void => {
    this.setStore(STORE_KEYS.SEARCH_HISTORY, searchHistory);
  };

  public getSearchHistory = (): string => {
    return this.getStore(STORE_KEYS.SEARCH_HISTORY);
  };

  public hasSearchHistory = (): boolean => {
    return this.hasStore(STORE_KEYS.SEARCH_HISTORY);
  };

  public removeSearchHistory = (): void => {
    this.removeStore(STORE_KEYS.SEARCH_HISTORY);
  };

  private getStore = (key: string): string => {
    return localStorage.getItem(key)!;
  };

  private hasStore = (key: string): boolean => {
    return Boolean(localStorage.getItem(key));
  };

  private setStore = (key: string, value: string): void => {
    localStorage.setItem(key, value);
  };

  private removeStore = (key: string): void => {
    localStorage.removeItem(key);
  };
}

export default Store;
