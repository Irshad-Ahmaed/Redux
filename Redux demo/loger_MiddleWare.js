const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleWare = redux.applyMiddleware;

const reduxlogger = require('redux-logger');
const logger = reduxlogger.createLogger();

const CAKE_ORDER = "CAKE_ORDER";
const SHAKE_ORDER = "SHAKE_ORDER";

const CAKE_RESTOCK = "CAKE_RESTOCK";
const SHAKE_RESTOCK = "SHAKE_RESTOCK";

function cakeOrder() { // action creator
  return {
    type: CAKE_ORDER,  // action
    payload: 1,
  };
}

function shakeOrder() {
  return {
    type: SHAKE_ORDER,
    payload: 2,
  };
}

const cakeQuantity = cakeOrder();
const shakeQuantity = shakeOrder();

function cakeRestock(){
    return {
      type: CAKE_RESTOCK,
      payload: cakeQuantity.payload,
    }
}

function shakeRestock(){
    return {
      type: SHAKE_RESTOCK,
      payload: shakeQuantity.payload,
    }
}

// (previousState, action) => newState

const initialState = {
  numberOfCake: 10,
  numberOfShakes: 8,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDER:
      return {
        ...state,
        numberOfCake: state.numberOfCake - action.payload,
      };

    case SHAKE_ORDER:
      return {
        ...state,
        numberOfShakes: state.numberOfShakes - action.payload,
      };

    case CAKE_RESTOCK:
      return {
        ...state,
        numberOfCake: state.numberOfCake + action.payload,
      };
    
      case SHAKE_RESTOCK:
        return{
          ...state,
          numberOfShakes: state.numberOfShakes + action.payload
        }

    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleWare(logger));
console.log("Initial State: ", store.getState());

const unSubscribe = store.subscribe(() => {});

store.dispatch(cakeOrder());
store.dispatch(shakeOrder());
store.dispatch(cakeOrder());

store.dispatch(cakeRestock());
store.dispatch(shakeRestock());

unSubscribe();
