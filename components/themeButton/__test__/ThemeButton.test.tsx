import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import StoreProvider from '@/components/StoreProvider';
import ThemeButton from '@/components/themeButton/ThemeButton';

describe('ThemeButton', () => {
  it('should render correctly', () => {
    const component = render(
      <StoreProvider>
        <ThemeButton />
      </StoreProvider>,
    );

    expect(component).toMatchSnapshot();
  });
});
