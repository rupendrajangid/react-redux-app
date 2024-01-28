import { ADD_ITEM, DELETE_ITEM, UPDATE_ITEM, FETCH_ITEMS } from './actions';

const initialState = {
  items: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, items: [...state.items, action.payload] };
    case DELETE_ITEM:
      return { ...state, items: state.items.filter(item => item.id !== action.payload) };
    case UPDATE_ITEM:
      return state;
    case FETCH_ITEMS:
      return state;
    default:
      return state;
  }
};

export default rootReducer;
