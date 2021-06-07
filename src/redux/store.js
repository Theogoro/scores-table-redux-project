import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk"; // Trabajar con promesas
// Combinar todos los patos para poder consumirlos
import scoreReducer from "./scoresDucks";



const rootReducer = combineReducers({
  // Combinar los reducers
  scores: scoreReducer
})

const composeEnhancers = compose;

const generateStore = () => {
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

  return store;
}

export default generateStore;