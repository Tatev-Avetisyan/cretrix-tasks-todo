import { Button, EditItem, Text } from "../..";
import { useState } from "react";
import { useDispatch } from "react-redux";
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

  const dispatch = useDispatch();

  const onEditTodo = () => {
    dispatch(editTodo({ id: item.id, todoName: title }));
    setIsVisible(false);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    dispatch(done({ isDone: !isChecked }));
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
          className={styles.checkbox}
          onClick={handleCheckboxChange}
          type="checkbox"
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
