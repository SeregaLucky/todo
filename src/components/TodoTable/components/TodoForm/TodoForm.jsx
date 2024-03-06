import { useSelector } from "react-redux";

import Spinner from "../Spinner";

import { getIsAddTodoLoading } from "../../../../redux/todo/todoSelectors";

import { useFormTodo } from "./useFormTodo";

import styles from "./TodoForm.module.scss";

const TodoForm = () => {
  const isAddingTodo = useSelector(getIsAddTodoLoading);

  const { register, handleSubmit, error } = useFormTodo();

  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <div className={styles.containerInput}>
        <input
          className={styles.inputTitle}
          type="text"
          placeholder="Todo..."
          autoFocus={true}
          {...register("title")}
        />

        {error?.message && (
          <span className={styles.errorText}>{error.message}</span>
        )}
      </div>

      <button
        className={styles.submitButton}
        type="submit"
        disabled={isAddingTodo}
      >
        Send
        {isAddingTodo && (
          <span className={styles.containerSpinner}>
            <Spinner />
          </span>
        )}
      </button>
    </form>
  );
};

export default TodoForm;
