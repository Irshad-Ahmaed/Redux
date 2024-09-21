const configureStore = require('@reduxjs/toolkit').configureStore;
const reduxLogger = require('redux-logger');
const cakeReducer = require('../features/cake/cakeSlice');
const iceCreamReducer = require('../features/iceCream/iceCreamSlice');

const logger = reduxLogger.createLogger();

const store = configureStore({
    // combineReducers
    reducer:{
        cake: cakeReducer,
        iceCream: iceCreamReducer,
    },
    middleware: (getDefaultMiddleware) =>
        // add the logger to the store
        getDefaultMiddleware().concat(logger),
    
})

module.exports = store;