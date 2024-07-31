import { ButtonHTMLAttributes } from 'react';

import './button.sass';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'error';
}

const Button = ({ variant, children, ...props }: IButtonProps) => {
  return (
    <button className="button" data-variant={variant} {...props}>
      {children}
    </button>
  );
};

export default Button;
