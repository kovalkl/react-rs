import { useSearchParams } from 'react-router-dom';

import useSearchStore from './../hooks/useSearchStore';

export const useCustomSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get('page') || '1';
  let searchText = searchParams.get('search') || '';
  const [searchStoreText, setSearchStoreText] = useSearchStore();

  if (!searchText) {
    searchText = searchStoreText;
  }

  const setSearchText = (text: string) => {
    const formatText = text.trim();
    setSearchStoreText(formatText);
    if (!formatText) {
      setSearchParams({ page: '1' });
    } else {
      setSearchParams({ page: '1', search: formatText });
    }
  };

  const setCurrentPage = (page: string) => {
    if (searchText) {
      setSearchParams({ page, search: searchText });
    } else {
      setSearchParams({ page });
    }
  };

  return { currentPage, searchText, setSearchText, setCurrentPage };
};
