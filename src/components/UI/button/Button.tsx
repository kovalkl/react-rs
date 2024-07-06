import { Component, PropsWithChildren } from 'react';
import './button.sass';

interface ButtonProps extends PropsWithChildren {
  text?: string;
  onClick: () => void;
}

class Button extends Component<ButtonProps> {
  constructor(props: ButtonProps) {
    super(props);
  }
  render() {
    return (
      <button className="button" type="button" onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
