import Link from 'next/link';
import { useRouter } from 'next/router';

import Button from '@/components/UI/button/Button';
import styles from '@/components/pagination/Pagination.module.sass';

type PaginationProps = {
  next: string | null;
  previous: string | null;
};

const Pagination = ({ next, previous }: PaginationProps) => {
  const { query } = useRouter();

  const searchText = (query.search as string) || '';

  const formatPage = parseInt(query.page as string) || 1;
  return (
    <div className="container">
      <div className={`${styles.pagination} accent-text `}>
        <Link href={`?page=${formatPage - 1}${searchText ? `&search=${searchText}` : ''}`}>
          <Button disabled={!previous}>Prev</Button>
        </Link>
        <span className={styles.pagination__page}>{formatPage}</span>
        <Link href={`?page=${formatPage + 1}${searchText ? `&search=${searchText}` : ''}`}>
          <Button disabled={!next}>Next</Button>
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
