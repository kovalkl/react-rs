import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import Store from '../store/LocalStore';

const useSearchStore = (): [string, Dispatch<SetStateAction<string>>] => {
  const store = Store.getInstance();
  const [value, setValue] = useState(store.getSearchHistory() || '');

  useEffect(() => {
    store.setSearchHistory(value);
    return () => {
      store.setSearchHistory(value);
    };
  }, [value]);

  return [value, setValue];
};

export default useSearchStore;
