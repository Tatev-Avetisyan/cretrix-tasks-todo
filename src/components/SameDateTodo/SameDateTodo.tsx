import { SameDateTodoItem, Title } from "..";
import BackIcon from "../../assets/backIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { TodoListType, deleteTodo, todo } from "../../redux/TodoSlice";

import styles from "./sameDateTodo.module.scss";

const SameDateTodoList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector(todo);
  const navigate = useNavigate();
  const { date } = useParams();

  const reverseDate = date?.split(".").reverse().join("-");

  const handleGoBack = () => {
    navigate(-1);
  };

  const filteredByDate = todoList.filter(
    (el: TodoListType) => el.date === date
  );
  console.log(filteredByDate);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <button onClick={handleGoBack} className={styles.backBtn}>
          <img src={BackIcon} alt="Back" />
          Go Back
        </button>
        <Title extraStyle={styles.text} context={reverseDate || ""} />
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
  );
};

export default SameDateTodoList;
