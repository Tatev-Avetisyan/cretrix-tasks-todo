import styles from "./text.module.scss";

interface TextType {
  context: string;
  extraStyle?: any;
}

const Text: React.FC<TextType> = ({ context, extraStyle }) => {
  return <p className={`${styles.text} ${extraStyle}`}>{context}</p>;
};

export default Text;
