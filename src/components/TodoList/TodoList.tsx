import { useSelector } from "react-redux";
import { TodoItem, Text } from "..";
import styles from "./todoList.module.scss";
import { todo } from "../../redux/TodoSlice";
import { log } from "console";

const TodoList = () => {
  const todoList = useSelector(todo);

  const result: any[] = [];
  todoList.forEach((item: any) => {
    let resObj = result.find((resObj) => resObj.date === item.date);
    resObj ? resObj.count++ : result.push({ date: item.date, count: 1 });
  });

  return (
    <div className={styles.wrapper}>
      <Text extraStyle={styles.text} context="Dates" />
      {result.map((item: any) => {
        return <TodoItem date={item.date} number={item.count} />;
      })}
    </div>
  );
};

export default TodoList;
