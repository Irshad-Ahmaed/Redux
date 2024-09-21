const createSlice = require('@reduxjs/toolkit').createSlice;

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
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
