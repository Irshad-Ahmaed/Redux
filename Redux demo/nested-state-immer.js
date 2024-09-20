const redux = require("redux");
const { createStore } = redux;
const produce = require('immer').produce;

// Initializing Actions
const BIO_DATA = "BIO_DATA";

const details = () => {
  return {
    type: BIO_DATA,
    payload: "UP"
  };
}

// Initial States
const initialState = {
  Name: "Irshad",
  address: {
    street: "123 Main St",
    city: "Konch",
    state: "MP",
  },
};

// Reducer Function
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case BIO_DATA:
    //   return {
    //     ...state,
    //     address: {
    //       ...state.address,
    //       state: action.payload,
    //     },
    //   };

    // With Immer:

    return produce(state, (draft)=>{
        draft.address.state = action.payload;
    })

    default:
      return state;
  }
};

const store = createStore(Reducer);
console.log(store.getState(), " initial state");

const unSubscribe = store.subscribe(()=>{
    console.log("updated State: ", store.getState())
})

store.dispatch(details());

unSubscribe();
