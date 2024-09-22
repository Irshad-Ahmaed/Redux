import { createSlice } from '@reduxjs/toolkit';
import { orderCake as cakeOrdered } from '../cake/cakeSlice';


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
            .addCase(cakeOrdered, (state) => {  // cakeActions.orderCake OR 'cake/orderCake'
                state.numberOfIceCream--
            })
            .addDefaultCase((state, action) => {});
    }
});

export default iceCreamSlice.reducer;
export const {orderIceCream, restocked} = iceCreamSlice.actions;
