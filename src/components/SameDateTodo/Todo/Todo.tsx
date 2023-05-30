import { useState } from "react";
import { Button, EditItem } from "../..";
import { useAppDispatch } from "../../../redux/store";
import { done, editTodo } from "../../../redux/TodoSlice";

import styles from "./todo.module.scss";

const SameDateTodoItem: React.FC<{
  todoName: string;
  onClick: any;
  item: any;
}> = ({ todoName, onClick, item }) => {
  const [isChecked, setIsChecked] = useState(item.isDone);
  const [isVisible, setIsVisible] = useState(false);
  const [title, setTitle] = useState(item.todoName);

  const dispatch = useAppDispatch();

  const onEditTodo = () => {
    dispatch(editTodo({ id: item.id, todoName: title }));
    setIsVisible(false);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    dispatch(done({ isDone: !isChecked, id: item.id }));
  };

  const onShowEdit = () => {
    setIsVisible((prev) => !prev);
  };

  const onHandleCancel = () => {
    setIsVisible(false);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <>
      <div className={styles.item}>
        <label
          className={`${styles.todo}  ${isChecked ? styles.titleDone : ""}`}
        >
          <input type="checkbox" defaultChecked={item.isDone} />
          <span
            onClick={handleCheckboxChange}
            className={`${styles.todoName} `}
          />
          {todoName}
        </label>
        <div>
          <Button onClick={onShowEdit} extraStyle={styles.btn} context="Edit" />
          <Button
            onClick={onClick}
            extraStyle={styles.delete}
            context="Delete"
          />
        </div>
      </div>
      <EditItem
        onHandleEdit={onEditTodo}
        onChangeTitle={handleTitleChange}
        isVisible={isVisible}
        titleValue={title}
        onCancel={onHandleCancel}
      />
    </>
  );
};

export default SameDateTodoItem;
