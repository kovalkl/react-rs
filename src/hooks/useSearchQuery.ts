import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import Store from '../store/Store';

const useSearchQuery = (): [string, Dispatch<SetStateAction<string>>] => {
  const store = Store.getInstance();
  const [value, setValue] = useState(store.getSearchHistory() || '');

  useEffect(() => {
    return () => {
      store.setSearchHistory(value);
    };
  }, [value]);

  return [value, setValue];
};

export default useSearchQuery;
