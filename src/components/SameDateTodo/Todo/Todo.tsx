import { useState } from "react";
import { Button, EditItem, Text } from "../..";
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
    console.log(isChecked);
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
        <input
          className={`${styles.checkbox} ${isChecked ? styles.done : ""}`}
          onClick={handleCheckboxChange}
          type="checkbox"
          checked={item.isDone}
        />
        <Text
          extraStyle={`${styles.todoName} ${
            isChecked ? styles.titleDone : ""
          } `}
          context={todoName}
        />
        <Button onClick={onShowEdit} extraStyle={styles.btn} context="Edit" />
        <Button onClick={onClick} extraStyle={styles.delete} context="Delete" />
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
