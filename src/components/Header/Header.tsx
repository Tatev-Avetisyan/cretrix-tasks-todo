import React from "react";
import { useState } from "react";
import { Button, Input, Title,Text } from "..";
import { addTodo } from "../../redux/TodoSlice";
import { useDispatch } from "react-redux";

import styles from "./header.module.scss";

const Header = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const dispatch = useDispatch();

  const onAddTodo = () => {
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
      <div className={styles.inputWrapper}>
        <Text  extraStyle={styles.text} context="New Task"/>
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
          <Button onClick={onAddTodo} extraStyle={styles.add} context="ADD" />
        </div>
      </div>
    </header>
  );
};

export default Header;
