import { InputHTMLAttributes } from 'react';

import '@/components/UI/textInput/textInput.sass';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const TextInput = ({ ...props }: TextInputProps) => {
  return <input type="text" placeholder="Search..." className="text-input" {...props} />;
};

export default TextInput;
