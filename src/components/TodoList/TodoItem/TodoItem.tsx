import styles from "./todo.module.scss";
import Next from "../../../assets/next.svg";

interface DataType {
  date: string;
  number: number;
}

const TodoItem: React.FC<DataType> = ({ date, number }) => {
  return (
    <div className={styles.item}>
      {date} {"("}
      {number}
      {")"}
      <button onClick={() => console.log(1)} className={styles.image}>
        <img alt="" src={Next} />
      </button>
    </div>
  );
};

export default TodoItem;
