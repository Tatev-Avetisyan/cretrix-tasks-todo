import styles from "./button.module.scss";

interface ButtonType {
  context: string;
  extraStyle?: any;
  onClick?: any;
}

const Button: React.FC<ButtonType> = ({ context, extraStyle, onClick }) => {
  return (
    <button onClick={onClick} className={`${styles.btn} ${extraStyle}`}>
      {context}
    </button>
  );
};

export default Button;
