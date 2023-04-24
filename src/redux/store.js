import {
  configureStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { cartReducer } from "./CartReducer/reducer";
import { wishReducer } from "./WishReducer/wishReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  cart: cartReducer,

  wishReducer,
});

const store = configureStore(
  { reducer: rootReducer },
  {},
  composeEnhancers(applyMiddleware(thunk))
);
export { store };
