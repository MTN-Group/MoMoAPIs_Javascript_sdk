import { combineReducers } from "redux";

// reducer import
import customizationReducer from "./customizationReducer";
import formsReducer from "./formsReducer";
import clipboardReducer from "./clipboardReducer";
import productTypeReducer from "./productTypeReducer";
// ===========================|| COMBINE REDUCER ||=========================== //

const reducer = combineReducers({
  customization: customizationReducer,
  formData: formsReducer,
  clipboard: clipboardReducer,
  productType: productTypeReducer,
});

export default reducer;
