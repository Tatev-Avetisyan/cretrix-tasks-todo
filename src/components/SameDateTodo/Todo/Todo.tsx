import { Button, EditItem, Text } from "../..";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "../../../redux/TodoSlice";
import styles from "./todo.module.scss"

const SameDateTodoItem: React.FC<{
  todoName: string;
  onClick: any;
  item: any;
}> = ({ todoName, onClick, item }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [title, setTitle] = useState(item.todoName);
  const [date, setDate] = useState(item.date.split(".").reverse().join("-"));

  const dispatch = useDispatch();

  const onEditTodo = () => {
    dispatch(editTodo({ id: item.id, todoName: title, date }));
    setIsVisible(false);
  };

  const onShowEdit = () => {
    setIsVisible((prev) => !prev);
  };
  console.log(isVisible ? "hey" : "bye");

  const onHandleCancel = () => {
    setIsVisible(false);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  return (
    <>
      <div className={styles.item}>
        <Text extraStyle={styles.todoName} context={todoName} />
        <Button onClick={onShowEdit} extraStyle={styles.btn} context="Edit" />
        <Button onClick={onClick} extraStyle={styles.delete} context="Delete" />
      </div>
      <EditItem
        onHandleEdit={onEditTodo}
        onChangeTitle={handleTitleChange}
        onChangeDate={handleDateChange}
        isVisible={isVisible}
        titleValue={title}
        dateValue={date}
        onCancel={onHandleCancel}
      />
    </>
  );
};

export default SameDateTodoItem;
