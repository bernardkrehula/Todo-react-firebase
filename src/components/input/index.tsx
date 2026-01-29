import "./index.css";

type InputType = {
  type?: string;
  inputValue?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

const Input = ({
  type = "text",
  inputValue = "",
  placeholder = "Enter task",
  onChange = () => {},
  className = "",
}: InputType) => {
  return (
    <input
      className={className}
      type={type}
      value={inputValue}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
export default Input;
