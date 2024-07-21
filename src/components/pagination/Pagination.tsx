import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getPageNumber } from '../../utils/getPageNumber';
import useFetching from './../../hooks/useFetching';
import peopleService from './../../services/PeopleService';
import { IResponsePeople } from './../../shared/types';
import { getSearchParams } from './../../utils/getSearchParams';
import Button from './../UI/button/Button';
import './pagination.sass';

const Pagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { currentPage, searchText } = getSearchParams(searchParams);
  const [pageInfo, setPageInfo] = useState({
    next: null as string | null,
    previous: null as string | null,
  });

  const [fetchPeople] = useFetching(async () => {
    const { next, previous }: IResponsePeople = await peopleService.getPeople(
      currentPage,
      searchText,
    );
    setPageInfo({
      next,
      previous,
    });
  });

  useEffect(() => {
    fetchPeople();
  }, [searchParams]);

  const setPage = (url: string) => {
    if (searchParams.has('search')) {
      const searchParam = searchParams.get('search')!;
      setSearchParams({ page: getPageNumber(url), search: searchParam });
    } else {
      setSearchParams({ page: getPageNumber(url) });
    }
  };

  return (
    <div className="container">
      <div className="pagination accent-text ">
        <Button
          type="button"
          disabled={!pageInfo.previous}
          onClick={() => setPage(pageInfo.previous!)}
        >
          Prev
        </Button>
        <span className="pagination__page">{currentPage}</span>
        <Button type="button" disabled={!pageInfo.next} onClick={() => setPage(pageInfo.next!)}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
