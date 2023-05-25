import { SameDateTodoItem, Title } from "..";
import { useNavigate } from "react-router-dom";
import BackIcon from "../../assets/backIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import { TodoListType, deleteTodo, todo } from "../../redux/TodoSlice";

import styles from "./sameDateTodo.module.scss";

const SameDateTodoList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector(todo);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.taskList}>
        <div className={styles.header}>
          <button onClick={handleGoBack} className={styles.backBtn}>
            <img alt="" src={BackIcon} />
            Go Back
          </button>
          <Title extraStyle={styles.text} context="2020-01-02 (3)" />
        </div>
        {todoList.map((item: TodoListType) => {
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
  );
};

export default SameDateTodoList;
