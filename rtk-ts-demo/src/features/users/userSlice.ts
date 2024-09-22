import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';

type Data = {
    id: number,
    name: string,
}

type InitialState = {
    loading: boolean,
    data: Data[]
    error: string | null,
}

const initialState: InitialState = {
    loading: false,
    data: [],
    error: ''
}

// Generate pending, fulfilled and rejected actions type
export const fetchUsers = createAsyncThunk('user/fetchUsers', ()=> {
    return axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response)=> response.data)
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, state => {
                state.loading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<Data[]>) => {
                state.loading = false;
                state.data = action.payload;
                state.error = '';
            })
            .addCase(fetchUsers.rejected, (state,action)=> {
                state.loading = false;
                state.data = [];
                state.error = action.error.message || 'Something went wrong'
            })
    }
})

export default userSlice.reducer;