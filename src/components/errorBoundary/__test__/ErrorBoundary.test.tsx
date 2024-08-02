import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import ErrorBoundary from '@/components/errorBoundary/ErrorBoundary';
import store from '@/store/index';

describe('ErrorBoundary', () => {
  it('should render children correctly', () => {
    const component = render(
      <Provider store={store}>
        <MemoryRouter>
          <ErrorBoundary>
            <div>test</div>
          </ErrorBoundary>
        </MemoryRouter>
      </Provider>,
    );

    expect(component).toMatchSnapshot();
  });
});
