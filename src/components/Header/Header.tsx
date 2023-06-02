import { Button, Input, Title, Text } from "..";
import { useAppDispatch } from "../../redux/store";
import React, { FC, FormEvent, useState } from "react";
import { addTodo } from "../../redux/TodoSlice.tsx/TodoSlice";

import styles from "./header.module.scss";

const Header: FC = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const dispatch = useAppDispatch();

  const onAddTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (title !== "" && date !== "") {
      dispatch(addTodo({ title, date }));
      setTitle("");
      setDate("");
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
            placeholder="Type here"
            extraStyle={styles.inpFirst}
            type="text"
          />
          <Input
            onChange={handleDateChange}
            value={date}
            extraStyle={styles.inpSecond}
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
