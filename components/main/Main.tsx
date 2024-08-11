'use client';

import { useSearchParams } from 'next/navigation';

import { useEffect, useState } from 'react';

import Content from '@/components/content/Content';
import styles from '@/components/main/Main.module.sass';
import Pagination from '@/components/pagination/Pagination';
import { PeopleResponse, Person } from '@/models/types';

const Main = () => {
  const [peopleResponse, setPeopleResponse] = useState<PeopleResponse | null>(null);
  const [currentPerson, setCurrentPerson] = useState<Person | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      const page = searchParams.get('page') || '1';
      const search = searchParams.get('search');
      const details = searchParams.get('details');

      const peopleResponse: PeopleResponse = await fetch(
        `https://swapi.dev/api/people/?page=${page}${search ? `&search=${search}` : ''}`,
        {
          cache: 'force-cache',
        },
      ).then((res) => res.json());

      setPeopleResponse(peopleResponse);

      if (details) {
        const personData: Person = await fetch(`https://swapi.dev/api/people/${details}`).then(
          (res) => res.json(),
        );

        setCurrentPerson(personData);
      } else {
        setCurrentPerson(null);
      }
    };

    fetchData();
  }, [searchParams]);

  return (
    <main className={`${styles.main}`}>
      <div className={`${styles.main__wrapper} container`}>
        {peopleResponse && (
          <>
            <Pagination next={peopleResponse.next} previous={peopleResponse.previous} />
            <Content people={peopleResponse.results} currentPerson={currentPerson} />
          </>
        )}
      </div>
    </main>
  );
};

export default Main;
