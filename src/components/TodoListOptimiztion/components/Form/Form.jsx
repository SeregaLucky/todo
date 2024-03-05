import { useState } from 'react';
import { useDispatch } from 'react-redux';
import itemsOperations from '../../../../redux/items/itemsOperations';

const Form = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');

  const onSubmitMainForm = e => {
    e.preventDefault();
    dispatch(itemsOperations.addItem(title));
    setTitle('');
  };

  return (
    <form onSubmit={onSubmitMainForm}>
      <input value={title} onChange={e => setTitle(e.target.value)} />
      <button type="submit">Send</button>
    </form>
  );
};

export default Form;
