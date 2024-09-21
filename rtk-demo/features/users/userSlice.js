const createSlice = require('@reduxjs/toolkit').createSlice;
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk;
const axios = require('axios');


const initialState = {
    loading: false,
    data: [],
    error: ''
}

// Generate pending, fulfilled and rejected actions type
const fetchUsers = createAsyncThunk('user/fetchUsers', ()=> {
    return axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response)=> response.data.map((user)=> user.id))
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, state => {
                state.loading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = '';
            })
            .addCase(fetchUsers.rejected, (state,action) => {
                state.loading = false;
                state.data = [];
                state.error = action.error.message;
            })
    }
})

module.exports = userSlice.reducer;
module.exports.fetchUsers = fetchUsers;