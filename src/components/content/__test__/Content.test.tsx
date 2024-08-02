import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import Content from '@/components/content/Content';
import store from '@/store/index';

describe('Content', () => {
  it('should render correctly', () => {
    const component = render(
      <Provider store={store}>
        <MemoryRouter>
          <Content selectedPeople={[]} />
        </MemoryRouter>
      </Provider>,
    );

    expect(component).toMatchSnapshot();
  });
});
