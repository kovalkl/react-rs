import Button from '@/components/UI/button/Button';
import '@/components/pagination/pagination.sass';
import { useCustomSearchParams } from '@/hooks/useCustomSearchParams';
import { useGetPeopleQuery } from '@/redux/peopleApi';

const Pagination = () => {
  const { currentPage, searchText, setCurrentPage } = useCustomSearchParams();
  const { data } = useGetPeopleQuery({ page: currentPage, searchText: searchText });

  if (!data) return;

  const { next, previous } = data;

  return (
    <div className="container">
      <div className="pagination accent-text ">
        <Button
          disabled={!previous}
          onClick={() => setCurrentPage((parseInt(currentPage) - 1).toString())}
        >
          Prev
        </Button>
        <span className="pagination__page">{currentPage}</span>
        <Button
          disabled={!next}
          onClick={() => setCurrentPage((parseInt(currentPage) + 1).toString())}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
