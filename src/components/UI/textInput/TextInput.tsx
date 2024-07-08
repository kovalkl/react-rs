import { Component, PropsWithChildren } from 'react';
import './textInput.sass';

interface TextInputProps extends PropsWithChildren {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

class TextInput extends Component<TextInputProps> {
  constructor(props: TextInputProps) {
    super(props);
  }

  render() {
    return (
      <input
        type="text"
        placeholder="Search..."
        className="text-input"
        value={this.props.value}
        onChange={(e) => this.props.onChange(e)}
      />
    );
  }
}

export default TextInput;
