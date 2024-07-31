import { InputHTMLAttributes } from 'react';

import './textInput.sass';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const TextInput = ({ ...props }: TextInputProps) => {
  return <input type="text" placeholder="Search..." className="text-input" {...props} />;
};

export default TextInput;
