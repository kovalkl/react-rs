import { InputHTMLAttributes } from 'react';

import styles from '@/components/UI/textInput/TextInput.module.sass';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const TextInput = ({ ...props }: TextInputProps) => {
  return <input type="text" placeholder="Search..." className={styles.input} {...props} />;
};

export default TextInput;
