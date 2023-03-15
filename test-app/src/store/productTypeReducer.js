// action - state management
import * as actionTypes from "./actions";

export const initialState = {
  data:'noAuth'
};

// ===========================|| CUSTOMIZATION REDUCER ||=========================== //

const productTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_PRODUCT:
      return {
        data: action.body
      };
    default:
      return state;
  }
};

export default productTypeReducer;
