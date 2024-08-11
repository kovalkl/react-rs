import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import StoreProvider from '@/components/StoreProvider';
import Pagination from '@/components/pagination/Pagination';
import { mockResponse, mockOnePageResponse, mockAllPagesResponse } from '@/tests/mockPeople';

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    asPath: '/',
    back: vi.fn(),
    query: {
      search: 'l',
      page: '2',
    },
  }),
  useSearchParams: () => ({
    get: (key: string) => {
      const params: { [key: string]: string } = {
        search: 'l',
        page: '2',
      };
      return params[key];
    },
  }),
}));

describe('Pagination', () => {
  it('should render the pagination buttons', async () => {
    render(
      <StoreProvider>
        <Pagination next={mockResponse.next} previous={mockResponse.previous} />
      </StoreProvider>,
    );

    const prevButton = await screen.findByRole('button', { name: /prev/i });
    const nextButton = await screen.findByRole('button', { name: /next/i });
    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  it('should render disabled buttons when there is not previous or next page', async () => {
    render(
      <StoreProvider>
        <Pagination next={mockOnePageResponse.next} previous={mockOnePageResponse.previous} />
      </StoreProvider>,
    );

    const prevButton = await screen.findByRole('button', { name: /prev/i });
    const nextButton = await screen.findByRole('button', { name: /next/i });
    expect(prevButton).toBeDisabled();
    expect(nextButton).toBeDisabled();
  });

  it('should render not disabled buttons when there is previous or next page', async () => {
    render(
      <StoreProvider>
        <Pagination next={mockAllPagesResponse.next} previous={mockAllPagesResponse.previous} />
      </StoreProvider>,
    );

    const prevButton = await screen.findByRole('button', { name: /prev/i });
    const nextButton = await screen.findByRole('button', { name: /next/i });
    expect(prevButton).not.toBeDisabled();
    expect(nextButton).not.toBeDisabled();
  });

  it('should render page number correctly', async () => {
    render(
      <StoreProvider>
        <Pagination next={mockResponse.next} previous={mockResponse.previous} />
      </StoreProvider>,
    );

    const pageNumber = await screen.findByText('2');

    expect(pageNumber).toBeInTheDocument();
  });
});
