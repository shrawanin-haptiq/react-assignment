import { INCREMENT, DECREMENT, RESET } from "./actions";

const initialState = {
  count: parseInt(localStorage.getItem("count")) || 0,
};

const counterReducer = (state = initialState, action) => {
  let newCount = state.count;

  switch (action.type) {
    case INCREMENT:
      newCount = state.count + 1;
      break;

    case DECREMENT:
      newCount = state.count > 0 ? state.count - 1 : 0;
      break;

    case RESET:
      newCount = 0;
      break;

    default:
      return state;
  }

  localStorage.setItem("count", newCount);
  return { ...state, count: newCount };
};

export default counterReducer;
