import CountStatus from "./components/CountStatus";
import TodoForm from "./components/TodoForm";
import FilterByComplete from "./components/FilterByComplete";
import TodoList from "./components/TodoList";

import styles from "./TodoTable.module.scss";

const Todo = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>TODO</h1>

      <CountStatus />
      <TodoForm />
      <FilterByComplete />
      <TodoList />
    </div>
  );
};

export default Todo;
