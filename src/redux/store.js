import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import {
  productReducer,
  selectedProductReducer,
} from "./reducers/productReducer";
import thunk from "redux-thunk";

// our Combined reducers

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
});

const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
