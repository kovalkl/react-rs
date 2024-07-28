import { render, screen } from '@testing-library/react';

import TextInput from './../TextInput';

describe('TextInput', () => {
  it('should render correctly', () => {
    render(<TextInput value="" onChange={() => {}} />);

    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });

  it('should render correctly with value', () => {
    render(<TextInput value="test" onChange={() => {}} />);

    expect(screen.getByPlaceholderText('Search...')).toHaveValue('test');
  });
});
