'use client';

import { useSearchParams } from 'next/navigation';
import { redirect } from 'next/navigation';

import { useEffect } from 'react';

const SearchParamsHandler = () => {
  const searchParams = useSearchParams();
  const page = searchParams!.get('page');

  useEffect(() => {
    if (!page) {
      redirect('/?page=1');
    }
  }, [page]);

  return null;
};

export default SearchParamsHandler;
