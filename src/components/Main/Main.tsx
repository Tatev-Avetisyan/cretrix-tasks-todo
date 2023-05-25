import { Header, TodoList } from "..";
import styles from "./main.module.scss";

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <TodoList />
    </div>
  );
};

export default Main;
