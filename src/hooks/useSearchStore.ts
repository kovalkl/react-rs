import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import Store from '../store/LocalStore';

type UseSearchStoreReturn = {
  searchStoreText: string;
  setSearchStoreText: Dispatch<SetStateAction<string>>;
};

const useSearchStore = (): UseSearchStoreReturn => {
  const store = Store.getInstance();
  const [searchStoreText, setSearchStoreText] = useState(store.getSearchHistory() || '');

  useEffect(() => {
    store.setSearchHistory(searchStoreText);
    return () => {
      store.setSearchHistory(searchStoreText);
    };
  }, [searchStoreText]);

  return { searchStoreText, setSearchStoreText };
};

export default useSearchStore;
