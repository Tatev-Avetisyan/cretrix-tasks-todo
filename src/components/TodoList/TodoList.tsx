import { TodoItem, Text } from "..";
import { todo } from "../../redux/TodoSlice";
import { useAppSelector } from "../../redux/store";

import styles from "./todoList.module.scss";

const TodoList = () => {
  const todoList = useAppSelector(todo);

  const result: any[] = [];
  todoList.forEach((item: any) => {
    let resObj = result.find((resObj) => resObj.date === item.date);
    resObj ? resObj.count++ : result.push({ date: item.date, count: 1 });
  });

  return (
    <div className={styles.wrapper}>
      <Text extraStyle={styles.text} context="Dates" />
      {result.map((item: any) => {
        return <TodoItem key={item.id} date={item.date} number={item.count} />;
      })}
    </div>
  );
};

export default TodoList;
