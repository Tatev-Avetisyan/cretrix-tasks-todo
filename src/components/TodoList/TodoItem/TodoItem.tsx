import styles from "./todo.module.scss";
import Next from "../../../assets/next.svg";
import { Link } from "react-router-dom";

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
      <Link to="/todoListByDate">
        <button onClick={() => console.log(1)} className={styles.image}>
          <img alt="" src={Next} />
        </button>
      </Link>
    </div>
  );
};

export default TodoItem;
