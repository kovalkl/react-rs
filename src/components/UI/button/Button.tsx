import { Component, PropsWithChildren } from 'react';
import './button.sass';

interface ButtonProps extends PropsWithChildren {
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
    return (
      <button className="button" type="button" onClick={(e) => this.onClick(e)}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
