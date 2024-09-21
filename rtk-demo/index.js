const store = require('./app/store');
const cakeActions = require('./features/cake/cakeSlice').cakeActions;
const iceCreamActions = require('./features/iceCream/iceCreamSlice').iceCreamActions;

const fetchUsers = require('./features/users/userSlice').fetchUsers;
console.log("Initial State: ", store.getState());

const unsubscribe = store.subscribe(()=> console.log("Updated State: ", store.getState()));
store.dispatch(fetchUsers());

// store.dispatch(cakeActions.orderCake());
// store.dispatch(cakeActions.orderCake());
// store.dispatch(cakeActions.orderCake());
// store.dispatch(iceCreamActions.orderIceCream());
// store.dispatch(iceCreamActions.orderIceCream());
// store.dispatch(cakeActions.restocked(1));
// store.dispatch(cakeActions.restocked(2));

// store.dispatch(iceCreamActions.restocked(1));
// store.dispatch(iceCreamActions.restocked(1));



// unsubscribe();