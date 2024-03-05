import CountStatus from "./components/CountStatus";
import Form from "./components/Form";
import FilterByComplete from "./components/FilterByComplete";
import List from "./components/List";

import styles from "./Todo.module.scss";

const Todo = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>TODO</h1>

      <CountStatus />
      <Form />
      <FilterByComplete />
      <List />
    </div>
  );
};

export default Todo;
