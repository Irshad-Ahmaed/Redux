const createSlice = require('@reduxjs/toolkit').createSlice;

const cakeActions = require('../cake/cakeSlice').cakeActions;

const initialState = {
    numberOfIceCream: 11,
}

const iceCreamSlice = createSlice({
    name: 'iceCream',
    initialState,
    reducers: {
        orderIceCream: (state) => {
            state.numberOfIceCream -= 1
        },
        restocked: (state, action) => {
            state.numberOfIceCream += action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(cakeActions.orderCake, (state, action) => {  // cakeActions.orderCake OR 'cake/orderCake'
                state.numberOfIceCream--
            })
            .addDefaultCase((state, action) => {});
    }
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
