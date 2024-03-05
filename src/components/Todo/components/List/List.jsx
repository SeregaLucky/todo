import Item from "../Item";

import Spinner from "../Spinner";

import { useGetTodo } from "./useGetTodo";

import styles from "./List.module.scss";

const List = () => {
  const { isListLoading, listItems } = useGetTodo();

  if (isListLoading) {
    return (
      <div className={styles.containerSpinner}>
        <Spinner />
      </div>
    );
  }

  return (
    <ul className={styles.list}>
      {listItems.map(({ id, title, isCompleted }) => (
        <Item key={id} id={id} title={title} isCompleted={isCompleted} />
      ))}
    </ul>
  );
};

export default List;
