import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import store from './../../../store/index';
import Pagination from './../Pagination';

describe('Pagination', () => {
  it('should render the pagination buttons', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Pagination />
        </MemoryRouter>
      </Provider>,
    );

    const prevButton = await screen.findByRole('button', { name: /prev/i });
    expect(prevButton).toBeInTheDocument();
  });
});
