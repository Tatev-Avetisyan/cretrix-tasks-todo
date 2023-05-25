import { useSelector } from "react-redux";
import { TodoItem, Text } from "..";
import styles from "./todoList.module.scss";
import { todo } from "../../redux/TodoSlice";

const TodoList = () => {
  const todoList = useSelector(todo);
  return (
    <div className={styles.wrapper}>
      <Text extraStyle={styles.text} context="Dates" />
      {todoList.map((item: any) => {
        return <TodoItem date={item.date} number={3} />;
      })}
    </div>
  );
};

export default TodoList;
