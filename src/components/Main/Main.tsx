import { Header, TodoList } from "..";
import styles from "./main.module.scss";

const Main = () => {
  return (
    <div className="main">
      <div className={styles.wrapper}>
        <Header />
        <TodoList />
      </div>
    </div>
  );
};

export default Main;
