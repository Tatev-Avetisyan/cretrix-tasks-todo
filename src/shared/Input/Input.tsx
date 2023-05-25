import styles from "./input.module.scss";

interface InputType {
  type: string;
  extraStyle?: any;
  placeholder?: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputType> = ({
  value,
  type,
  extraStyle,
  placeholder,
  onChange,
}) => {
  return (
    <input
      required
      onChange={onChange}
      value={value}
      className={`${styles.input} ${extraStyle}`}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default Input;
