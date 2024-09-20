const redux = require('redux');
const { createStore, combineReducers } = redux;


// Initializing Actions 
const CAKE_ORDER = "CAKE_ORDER";
const CAKE_RESTOCK = "CAKE_RESTOCK";

const SHAKE_ORDER = "SHAKE_ORDER";
const SHAKE_RESTOCK = "SHAKE_RESTOCK";


// Initializing Actions Creator
function cakeOrder(){
  return {
    type: CAKE_ORDER,
    payload: 1,
  }
}

let shakeQuantity;
function shakeOrder(qty){
  shakeQuantity = qty;
  return {
    type: SHAKE_ORDER,
    payload: shakeQuantity,
  }
}

const cakeQuantity = cakeOrder();
function cakeRestock(){
  return {
    type: CAKE_RESTOCK,
    payload: cakeQuantity.payload,
  }
}

function shakeRestock(){
  return {
    type: SHAKE_RESTOCK,
    payload: shakeQuantity
  }
}


// Initial States
const cakeInitialState = {
  numberOfCake: 10,
};

const shakeInitialState = {
  numberOfShakes: 8,
};

// Reducer Function
const cakeReducer = (state = cakeInitialState, action) => {
  switch (action.type) {
    case CAKE_ORDER:
      return {
        ...state,
        numberOfCake: state.numberOfCake - action.payload,
      };

    case CAKE_RESTOCK:
      return {
        ...state,
        numberOfCake: state.numberOfCake + action.payload,
      };

    default:
      return state;
  }
};

const shakeReducer = (state = shakeInitialState, action) => {
  switch (action.type) {
    case SHAKE_ORDER:
      return {
        ...state,
        numberOfShakes: state.numberOfShakes - action.payload,
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


const rootReducer = combineReducers({
  cake: cakeReducer,
  shake: shakeReducer
})

const store = createStore(rootReducer);

console.log("Initial State: ", store.getState());

const unSubscribe = store.subscribe(() =>
  console.log("updated State: ", store.getState())
);

const qty = 1;
store.dispatch(cakeOrder());
store.dispatch(shakeOrder(qty));
store.dispatch(cakeOrder());
store.dispatch(shakeOrder(qty+1));

store.dispatch(cakeRestock());
store.dispatch(shakeRestock());

unSubscribe();