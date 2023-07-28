// import { createStore } from 'redux';
// import rootReducer from './reducer';
// const store = createStore(rootReducer);
// export default store;

import { createStore } from 'redux';

// Define initial state
const initialState = {
  name: '',
  email: '',
  message: '',
};

// Define the reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      return { ...state, name: action.payload };
    case 'UPDATE_EMAIL':
      return { ...state, email: action.payload };
    case 'UPDATE_MESSAGE':
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(reducer);

export default store;
