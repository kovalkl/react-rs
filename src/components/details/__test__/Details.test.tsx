import { render, screen } from '@testing-library/react';

import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import Details from '@/components/details/Details';
import store from '@/store/index';

describe('Details', () => {
  it('should show loader when loading', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Details />
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
  it('should render details data correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Details />
        </MemoryRouter>
      </Provider>,
    );
  });
});
