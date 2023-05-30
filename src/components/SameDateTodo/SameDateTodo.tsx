import { SameDateHeader, SameDateTodoItem } from "..";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { TodoListType, deleteTodo, todo } from "../../redux/TodoSlice";

import "../Main/main.module.scss";
import styles from "./sameDateTodo.module.scss";

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
          {filteredByDate.map((item: TodoListType) => {
            return (
              <div
                key={item.id}
                style={{ width: "100%", display: item.isHidden ? "none" : "" }}
              >
                <SameDateTodoItem
                  item={item}
                  onClick={() => {
                    dispatch(deleteTodo({ id: item.id }));
                  }}
                  todoName={item.todoName}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SameDateTodoList;
