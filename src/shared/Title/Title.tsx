import styles from "./title.module.scss";

interface Title {
  context: string;
  extraStyle?: any;
}

const Title: React.FC<Title> = ({ context, extraStyle }) => {
  return <div className={`${styles.title} ${extraStyle}`}>{context}</div>;
};

export default Title;
