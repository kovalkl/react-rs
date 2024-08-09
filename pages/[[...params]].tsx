import { GetServerSideProps } from 'next';
import { Roboto } from 'next/font/google';

import StoreProvider from '@/components/StoreProvider';
import ThemeProvider from '@/components/ThemeProvider';
import Flyout from '@/components/flyout/Flyout';
import Header from '@/components/header/Header';
import Main from '@/components/main/Main';
import { PeopleResponse, Person } from '@/models/types';

const roboto = Roboto({ weight: '400', subsets: ['latin'] });

type PageProps = {
  people: PeopleResponse;
  currentPerson: Person | null;
};

const Page = ({ people, currentPerson }: PageProps) => {
  return (
    <StoreProvider>
      <ThemeProvider>
        <div className={`${roboto.className} wrapper`}>
          <Header />
          <Main people={people} currentPerson={currentPerson} />
          <Flyout />
        </div>
      </ThemeProvider>
    </StoreProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { page = 1, search = '' } = context.query;
  let { details: currentPerson = null } = context.query;

  if (context.resolvedUrl === '/') {
    return {
      redirect: {
        destination: '/?page=1',
        permanent: false,
      },
    };
  }

  const response = await fetch(
    `https://swapi.dev/api/people/?page=${page}${search ? `&search=${search}` : ''}`,
  );
  const people = await response.json();

  if (currentPerson) {
    const response = await fetch(`https://swapi.dev/api/people/${currentPerson}`);
    currentPerson = await response.json();
  }

  return {
    props: { people, currentPerson },
  };
};

export default Page;
