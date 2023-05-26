import styles from "./button.module.scss";

interface ButtonType {
  context: string;
  extraStyle?: any;
  onClick?: any;
  type?: "button" | "submit"
}

const Button: React.FC<ButtonType> = ({
  context,
  extraStyle,
  onClick,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.btn} ${extraStyle}`}
    >
      {context}
    </button>
  );
};

export default Button;
