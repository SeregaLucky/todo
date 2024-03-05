import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import itemsOperations from '../../../../redux/items/itemsOperations';

const liStyle = {
  background: 'orange',
  marginBottom: '10px',
  padding: '10px',
};

const Todo = ({ todoId }) => {
  const { id, text, isCompleted } = useSelector(
    state => state.itemsReducer.dataItems[todoId],
  );
  console.log('RENDER ITEM');

  const dispatch = useDispatch();

  const changeCompletedStatusInItem = () => {
    dispatch(
      itemsOperations.changeCompletedStatusInItem({
        id,
        isCompleted: !isCompleted,
      }),
    );
  };

  return (
    <li style={liStyle}>
      <h4 onClick={changeCompletedStatusInItem} role="presentation">
        {text}
      </h4>

      <button
        type="button"
        onClick={() => dispatch(itemsOperations.removeItem(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Todo;
// export default memo(Todo);
