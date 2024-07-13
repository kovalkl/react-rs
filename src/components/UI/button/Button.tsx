import './button.sass';

interface IButtonProps {
  type: 'button' | 'error';
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button = ({ type, onClick, disabled, children, className }: IButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    e.preventDefault();
    onClick && onClick();
  };

  const buttonClass = `button ${type === 'error' ? 'button_error' : ''} ${className}`;

  return (
    <button
      className={buttonClass}
      type="button"
      onClick={(e) => handleClick(e)}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
