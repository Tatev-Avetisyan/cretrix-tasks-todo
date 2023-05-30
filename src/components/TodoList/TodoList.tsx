import { TodoItem, Text } from "..";
import { todo } from "../../redux/TodoSlice";
import { useAppSelector } from "../../redux/store";

import styles from "./todoList.module.scss";

interface SameDateObjType {
  id: number;
  date: string;
  count: number;
}

const TodoList = () => {
  const todoList = useAppSelector(todo);

  const result: SameDateObjType[] = [];
  todoList.forEach((item: any) => {
    let sameObj = result.find((sameDate) => sameDate.date === item.date);
    sameObj
      ? sameObj.count++
      : result.push({ date: item.date, count: 1, id: Math.random() });
  });

  return (
    <div className={styles.wrapper}>
      <Text extraStyle={styles.text} context="Dates" />
      {result.map((item: SameDateObjType) => {
        return <TodoItem key={item.id} date={item.date} number={item.count} />;
      })}
    </div>
  );
};

export default TodoList;
