import TodoItem from "../TodoItem";

import Spinner from "../Spinner";

import { useGetTodoList } from "./use-get-todo";

import styles from "./TodoList.module.scss";

const TodoList = () => {
  const { isListLoading, todoList } = useGetTodoList();

  if (isListLoading) {
    return (
      <div className={styles.containerSpinner}>
        <Spinner />
      </div>
    );
  }

  return (
    <ul className={styles.list}>
      {todoList.map(({ id, title, isCompleted }) => (
        <TodoItem key={id} id={id} title={title} isCompleted={isCompleted} />
      ))}
    </ul>
  );
};

export default TodoList;
