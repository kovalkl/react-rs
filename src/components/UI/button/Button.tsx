import { Component, PropsWithChildren } from 'react';
import './button.sass';

interface ButtonProps extends PropsWithChildren {
  type: 'button' | 'error';
  onClick: () => void;
}

class Button extends Component<ButtonProps> {
  constructor(props: ButtonProps) {
    super(props);
  }

  onClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    this.props.onClick();
  }

  render() {
    const buttonClass = `button ${this.props.type === 'error' ? 'button_error' : ''}`;
    return (
      <button
        className={buttonClass}
        type="button"
        onClick={(e) => this.onClick(e)}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
