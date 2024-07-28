import './textInput.sass';

interface TextInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({ value, onChange }: TextInputProps) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      className="text-input"
      value={value}
      onChange={(e) => onChange(e)}
    />
  );
};

export default TextInput;
