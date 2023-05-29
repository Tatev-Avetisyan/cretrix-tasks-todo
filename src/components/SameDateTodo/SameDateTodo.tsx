import { SameDateTodoItem, Title } from "..";
import BackIcon from "../../assets/backIcon.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { TodoListType, deleteTodo, todo } from "../../redux/TodoSlice";

import styles from "./sameDateTodo.module.scss";
import "../Main/main.module.scss";

const SameDateTodoList = () => {
  const dispatch = useAppDispatch();
  const todoList = useAppSelector(todo);
  const navigate = useNavigate();
  const { date, count } = useParams();

  const reverseDate = date?.split(".").reverse().join("-");

  const handleGoBack = () => {
    navigate(-1);
  };

  const filteredByDate = todoList.filter(
    (el: TodoListType) => el.date === date
  );
  console.log(todoList);
  console.log(filteredByDate);

  return (
    <div className="main">
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <button onClick={handleGoBack} className={styles.backBtn}>
            <img src={BackIcon} alt="Back" />
            Go Back
          </button>
          <Title
            extraStyle={styles.text}
            context={`${reverseDate || ""}(${count})`}
          />
        </div>
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
