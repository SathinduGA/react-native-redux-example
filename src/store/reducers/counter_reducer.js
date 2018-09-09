import { COUNTER_ADD, COUNTER_SUBSTRACT } from "../actions/action_types";

const initialState = {
  count: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_ADD:
      return {
        ...state,
        count: state.count + 1
      };

    case COUNTER_SUBSTRACT:
      return {
        ...state,
        count: state.count - 1
      };

    default:
      return state;
  }
};

export default counterReducer;
