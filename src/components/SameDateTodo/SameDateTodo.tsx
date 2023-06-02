import { SameDateHeader, SameDateTodoItem } from "..";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store";

import "../Main/main.module.scss";
import styles from "./sameDateTodo.module.scss";
import {
  TodoListType,
  deleteTodo,
  todo,
  todoByDateType,
} from "../../redux/TodoSlice.tsx/TodoSlice";

const SameDateTodoList = () => {
  const dispatch = useAppDispatch();
  const todoList = useAppSelector(todo);
  const { date } = useParams();

  const filteredByDate = todoList.filter(
    (el: TodoListType) => el.date === date
  );

  return (
    <div className="main">
      <div className={styles.wrapper}>
        <SameDateHeader />
        <div className={styles.taskList}>
          {filteredByDate.map((item: todoByDateType & TodoListType) => {
            return (
              <div
                key={item.id}
                style={{
                  width: "100%",
                  display: item.isHidden ? "none" : "",
                }}
              >
                {item.todoByDate.map((itemByDate) => {
                  return (
                    <SameDateTodoItem
                      isDone={itemByDate.isDone}
                      key={itemByDate.idByDate}
                      item={itemByDate.idByDate}
                      taskName={itemByDate.todoName}
                      onClick={() => {
                        dispatch(deleteTodo({ id: itemByDate.idByDate }));
                      }}
                      todoName={itemByDate.todoName}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SameDateTodoList;
