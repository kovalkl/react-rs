import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import StoreProvider from '@/components/StoreProvider';
import Button from '@/components/UI/button/Button';

const mockButtonText = 'test';

describe('Button', () => {
  it('should render correctly', () => {
    const component = render(
      <StoreProvider>
        <Button>{mockButtonText}</Button>
      </StoreProvider>,
    );

    expect(component).toMatchSnapshot();
  });

  it('should render text', () => {
    const component = render(
      <StoreProvider>
        <Button>{mockButtonText}</Button>
      </StoreProvider>,
    );

    const button = component.getByRole('button');
    expect(button).toHaveTextContent(mockButtonText);
  });
});
