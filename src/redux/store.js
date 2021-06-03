import { createStore, combineReducers } from "redux"; 
import { productReducer, selectedProductReducer } from "./reducers/productReducer";


// our Combined reducers

const rootReducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer
});


const store = createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store;