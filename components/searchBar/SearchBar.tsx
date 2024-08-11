'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import { useState } from 'react';

import Button from '@/components/UI/button/Button';
import TextInput from '@/components/UI/textInput/TextInput';
import styles from '@/components/searchBar/SearchBar.module.sass';

const SearchBar = () => {
  const searchParams = useSearchParams();
  const [searchText, setSearchText] = useState(searchParams.get('search') || '');
  const router = useRouter();

  const handleSearchPerson = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    if (searchText) {
      router.push(`/?page=1&search=${searchText}`);
    } else {
      router.push('/');
    }
  };

  return (
    <div className={styles.search}>
      <form className={styles.search__form} onSubmit={handleSearchPerson} name="search">
        <TextInput
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          name="search"
        />
        <Button type="submit">Search</Button>
      </form>
    </div>
  );
};

export default SearchBar;
