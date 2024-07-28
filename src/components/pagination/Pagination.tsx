import { useCustomSearchParams } from '../../hooks/useCustomSearchParams';
import { useGetPeopleQuery } from '../../redux/peopleApi';
import Button from './../UI/button/Button';
import './pagination.sass';

const Pagination = () => {
  const { currentPage, searchText, setCurrentPage } = useCustomSearchParams();
  const { data } = useGetPeopleQuery({ page: currentPage, searchText: searchText });

  if (!data) return;

  const { next, previous } = data;

  return (
    <div className="container">
      <div className="pagination accent-text ">
        <Button
          type="button"
          disabled={!previous}
          onClick={() => setCurrentPage((parseInt(currentPage) - 1).toString())}
        >
          Prev
        </Button>
        <span className="pagination__page">{currentPage}</span>
        <Button
          type="button"
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
