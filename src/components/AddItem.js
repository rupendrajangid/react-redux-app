import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_ITEM } from '../redux/actions';

const AddItem = () => {
  const [itemName, setItemName] = useState('');
  const dispatch = useDispatch();

  const handleAddItem = () => {
    const id = Math.floor(Math.random() * 1000);
    const newItem = { id, name: itemName };

    dispatch({ type: ADD_ITEM, payload: newItem });
    setItemName('');
  };

  return (
    <div>
      <input
        type="text"
        value={itemName}
        onChange={e => setItemName(e.target.value)}
      />
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
};

export default AddItem;
