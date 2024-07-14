import { IPagination } from '../../shared/types';
import Button from '../UI/button/Button';
import './pagination.sass';

interface IPaginationProps {
  page: IPagination;
  currentPage: number;
  changePage: (page: number) => void;
}

const Pagination = ({ page, currentPage, changePage }: IPaginationProps) => {
  return (
    <div className="pagination accent-text">
      <Button type="button" disabled={!page.previous} onClick={() => changePage(currentPage - 1)}>
        Prev
      </Button>
      <span className="pagination__page">{currentPage}</span>
      <Button type="button" disabled={!page.next} onClick={() => changePage(currentPage + 1)}>
        Next
      </Button>
    </div>
  );
};

export default Pagination;
