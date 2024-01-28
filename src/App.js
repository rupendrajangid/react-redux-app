import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ItemList from './components/ItemList';
import AddItem from './components/AddItem';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>React Redux CRUD App</h1>
        <AddItem />
        <ItemList />
      </div>
    </Provider>
  );
}

export default App;
