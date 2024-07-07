enum StoreKeys {
  SEARCH_HISTORY = 'SEARCH_HISTORY',
}

class Store {
  private static instance: Store;

  private keys: { [key in StoreKeys]: string };

  constructor() {
    this.keys = {
      SEARCH_HISTORY: 'search_history-kovalkl',
    };
  }

  public static getInstance(): Store {
    if (!Store.instance) {
      Store.instance = new Store();
    }

    return Store.instance;
  }

  public setSearchHistory(searchHistory: string): void {
    this.setStore(this.keys.SEARCH_HISTORY, searchHistory);
  }

  public getSearchHistory(): string {
    return this.getStore(this.keys.SEARCH_HISTORY);
  }

  public hasSearchHistory(): boolean {
    return this.hasStore(this.keys.SEARCH_HISTORY);
  }

  private getStore(key: string): string {
    return localStorage.getItem(key)!;
  }

  private hasStore(key: string): boolean {
    return Boolean(localStorage.getItem(key));
  }

  private setStore(key: string, value: string): void {
    localStorage.setItem(key, value);
  }
}

export { Store };
