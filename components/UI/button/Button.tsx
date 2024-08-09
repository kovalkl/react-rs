import { ButtonHTMLAttributes } from 'react';

import styles from '@/components/UI/button/Button.module.sass';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'error';
}

const Button = ({ variant, children, ...props }: IButtonProps) => {
  return (
    <button className={styles.button} data-variant={variant} {...props}>
      {children}
    </button>
  );
};

export default Button;
