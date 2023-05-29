import styles from "./todo.module.scss";
import Next from "../../../assets/next.svg";
import { Link } from "react-router-dom";

interface DataType {
  date: string;
  number: number;
}

const TodoItem: React.FC<DataType> = ({ date, number }) => {
  const reverseDate = date.split(".").reverse().join("-");
  return (
    <div className={styles.item}>
      {reverseDate} {`(${number})`}
      <Link to={`/todoListByDate/${date}/${number}`}>
        <button className={styles.image}>
          <img src={Next} alt="next" />
        </button>
      </Link>
    </div>
  );
};

export default TodoItem;
