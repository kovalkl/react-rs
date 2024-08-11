import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import SearchParamsHandler from '@/components/SearchParamsHandler';
import StoreProvider from '@/components/StoreProvider';
import ThemeProvider from '@/components/ThemeProvider';
import Flyout from '@/components/flyout/Flyout';
import Header from '@/components/header/Header';
import Main from '@/components/main/Main';

const roboto = Roboto({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Galactic Characters',
};

const Page = () => {
  return (
    <StoreProvider>
      <ThemeProvider>
        <SearchParamsHandler />
        <div className={`${roboto.className} wrapper`}>
          <Header />
          <Main />
          <Flyout />
        </div>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default Page;
