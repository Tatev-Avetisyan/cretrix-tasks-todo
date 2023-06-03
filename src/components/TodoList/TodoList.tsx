import { TodoItem, Text } from "..";
import { TodoListType } from "../../redux/TodoSlice.tsx/DummyData";
import { todo } from "../../redux/TodoSlice.tsx/TodoSlice";
import { useAppSelector } from "../../redux/store";

import styles from "./todoList.module.scss";

interface SameDateObjType {
  id: number;
  date: string;
  count: number;
}

const TodoList = () => {
  const todoList = useAppSelector(todo);
  console.log(todoList);

  const filteredState = todoList.filter((item: TodoListType) => {
    return item.todoByDate.length !== 0;
  });

  return (
    <div className={styles.wrapper}>
      <Text extraStyle={styles.text} context="Dates" />
      {filteredState.map((item: SameDateObjType) => {
        return <TodoItem key={item.id} date={item.date} number={item.count} />;
      })}
    </div>
  );
};

export default TodoList;
