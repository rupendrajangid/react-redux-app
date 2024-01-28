import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DELETE_ITEM } from '../redux/actions';

const ItemList = () => {
  const items = useSelector(state => state.items);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch({ type: DELETE_ITEM, payload: id });
  };

  return (
    <div>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name}{' '}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
