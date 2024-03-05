import { useSelector } from 'react-redux';

import Spinner from '../Spinner';

import { getIsAddItemLoading } from '../../../../redux/items/itemsSelectors';

import { useFormTodo } from './useFormTodo';

import styles from './Form.module.scss';

const Form = () => {
  const isAddingItem = useSelector(getIsAddItemLoading);

  const { register, handleSubmit, error } = useFormTodo();

  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <div className={styles.containerInput}>
        <input
          className={styles.inputTitle}
          type="text"
          placeholder="Todo..."
          autoFocus={true}
          {...register('title')}
        />

        {error?.message && (
          <span className={styles.errorText}>{error.message}</span>
        )}
      </div>

      <button
        className={styles.submitButton}
        type="submit"
        disabled={isAddingItem}
      >
        Send
        {isAddingItem && (
          <span className={styles.containerSpinner}>
            <Spinner />
          </span>
        )}
      </button>
    </form>
  );
};

export default Form;
