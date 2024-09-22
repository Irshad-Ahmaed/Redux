import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type InitialState = {
    numberOfCakes: number
}

const initialState: InitialState = {
    numberOfCakes: 10,
}

const cakeSlice =  createSlice({
    name: 'cake',
    initialState,
    reducers: {
        orderCake: (state) => {
            state.numberOfCakes -= 1;
        },
        restocked: (state, action:PayloadAction<number>) => {
            state.numberOfCakes += action.payload;
        },
    }
})

export default cakeSlice.reducer;
export const {orderCake, restocked} = cakeSlice.actions;
