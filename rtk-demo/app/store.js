const configureStore = require('@reduxjs/toolkit').configureStore;
const reduxLogger = require('redux-logger');
const cakeReducer = require('../features/cake/cakeSlice');
const iceCreamReducer = require('../features/iceCream/iceCreamSlice');

const userReducer = require('../features/users/userSlice');

const logger = reduxLogger.createLogger();

const store = configureStore({
    // in Redux-toolkit reducer works as combineReducers
    reducer:{
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        user: userReducer
    },
    // middleware: (getDefaultMiddleware) =>
    //     // add the logger to the store
    //     getDefaultMiddleware().concat(logger),
    
})

module.exports = store;