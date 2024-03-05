import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import itemsOperations from '../../../../redux/items/itemsOperations';
import Todo from '../Todo/Todo';

const List = () => {
  const dispatch = useDispatch();

  // const listItems = useSelector(state => state.itemsReducer.items);
  const todoIdx = useSelector(state => state.itemsReducer.itemsIds);

  useEffect(() => {
    const getAllItems = () => {
      dispatch(itemsOperations.getItems());
    };
    getAllItems();
  }, [dispatch]);

  return (
    <ul>
      {todoIdx.map(todoId => (
        <Todo key={todoId} todoId={todoId} />
      ))}
    </ul>
  );
};

export default List;
