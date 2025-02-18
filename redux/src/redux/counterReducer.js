import { INCREMENT, DECREMENT, RESET } from "./actions";

const initialState = {
  count: parseInt(localStorage.getItem('count')) || 0,   
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      const incrementedState = { ...state, count: state.count + 1 };
      localStorage.setItem('count', incrementedState.count);  
      return incrementedState;

    case DECREMENT:
      // Ensure count doesn't go below 0
      const decrementedState = { 
        ...state, 
        count: state.count > 0 ? state.count - 1 : 0 
      };
      localStorage.setItem('count', decrementedState.count);   
      return decrementedState;

    case RESET:
      const resetState = { ...state, count: 0 };
      localStorage.setItem('count', 0);   
      return resetState;

    default:
      return state;
  }
};

export default counterReducer;
