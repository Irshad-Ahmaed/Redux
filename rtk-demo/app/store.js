const configureStore = require('@reduxjs/toolkit').configureStore;
const combineReducers = require('@reduxjs/toolkit').combineReducers;
const cakeReducer = require('../features/cake/cakeSlice');
const iceCreamReducer = require('../features/iceCream/iceCreamSlice');

const store = configureStore({
    // combineReducers
    reducer:{
        cake: cakeReducer,
        iceCream: iceCreamReducer,
    },
})

module.exports = store;