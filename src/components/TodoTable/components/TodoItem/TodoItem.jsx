import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";
import PropTypes from "prop-types";

import Spinner from "../Spinner";

import todoOperations from "../../../../redux/todo/todo-operations";
import {
  getIsChangeStatusTodoLoading,
  getIsRemoveTodoIdsLoading,
} from "../../../../redux/todo/todo-selectors";

import styles from "./TodoItem.module.scss";

const Item = ({ id, title, isCompleted }) => {
  const dispatch = useDispatch();

  const isRemoveLoading = useSelector((state) => {
    return getIsRemoveTodoIdsLoading({ state, id });
  });
  const isChangeStatusLoading = useSelector((state) => {
    return getIsChangeStatusTodoLoading({ state, id });
  });

  const changeCompletedStatusInTodo = () => {
    dispatch(
      todoOperations.changeCompletedStatusInTodo({
        id,
        "isCompleted": !isCompleted,
      }),
    );
  };

  return (
    <li
      className={cn(styles.item, {
        [styles.removing]: isRemoveLoading,
      })}
    >
      <h4
        className={cn(styles.title, {
          [styles.completed]: isCompleted,
          [styles.changeCompletedStatusLoading]: isChangeStatusLoading,
        })}
        onClick={changeCompletedStatusInTodo}
        role="presentation"
      >
        {title}

        {isChangeStatusLoading && (
          <span className={styles.containerSpinner}>
            <Spinner />
          </span>
        )}
      </h4>

      <button
        className={styles.buttonRemove}
        type="button"
        onClick={() => dispatch(todoOperations.removeTodo(id))}
      >
        X
      </button>
    </li>
  );
};

Item.propTypes = {
  "id": PropTypes.string.isRequired,
  "title": PropTypes.string.isRequired,
  "isCompleted": PropTypes.bool.isRequired,
};

export default memo(Item);
