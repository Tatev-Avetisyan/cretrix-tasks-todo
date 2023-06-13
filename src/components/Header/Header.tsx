import { Button, Input, Title, Text } from "..";
import { useAppDispatch } from "../../redux/store";
import React, { FC, FormEvent, useState } from "react";
import { addTodo } from "../../redux/TodoSlice.tsx/TodoSlice";

import styles from "./header.module.scss";

const Header: FC = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState({ title: false, date: false });
  const dispatch = useAppDispatch();

  const onAddTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (title !== "" && date !== "") {
      dispatch(addTodo({ title, date }));
      setError({ title: false, date: false });
      setTitle("");
      setDate("");
    } else {
      setError({ title: title === "", date: date === "" });
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError({ ...error, title: false });
    setTitle(e.target.value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError({ ...error, date: false });
    setDate(e.target.value);
  };

  return (
    <header className={styles.header}>
      <Title context="To do list" />
      <form className={styles.inputWrapper} onSubmit={onAddTodo}>
        <Text extraStyle={styles.text} context="New Task" />
        <div className={styles.inputPart}>
          <Input
            onChange={handleTitleChange}
            value={title}
            placeholder="Add Todo Title"
            extraStyle={`${styles.inpFirst} ${error.title ? styles.error : ""}`}
            type="text"
          />

          <Input
            onChange={handleDateChange}
            value={date}
            extraStyle={`${styles.inpSecond}  ${
              error.date ? styles.error : ""
            }`}
            type="date"
          />
          <Button
            onClick={onAddTodo}
            extraStyle={styles.add}
            context="ADD"
            type="submit"
          />
        </div>
      </form>
    </header>
  );
};

export default Header;
