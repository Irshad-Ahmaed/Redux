const redux = require('redux');
const createStore = redux.createStore;
const thunkMiddleware = require('redux-thunk').thunk;
const axios = require('axios');
const applyMiddleWare = redux.applyMiddleware;

const initialState = {
    loading: false,
    data: [],
    error: '',
}

//  Actions
const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED';
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED';
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

// Actions Creator
const fetchUsersRequest=()=>{
    return{
        type: FETCH_USERS_REQUESTED
    }
}

const  fetchUsersSuccess=(data)=>{
    return {
        type: FETCH_USERS_SUCCEEDED,
        payload: data,
    }
}

const fetchUsersFailure=(error)=>{
    return{
        type: FETCH_USERS_FAILED,
        payload: error
    }
}

const reducer = (state= initialState, action) => {
    switch (action.type) {
        case  FETCH_USERS_REQUESTED:
            return{
                ...state,
                loading: true,
            }
        case  FETCH_USERS_SUCCEEDED:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case  FETCH_USERS_FAILED:
            return{
                loading: false,
                data: [],
                error: action.payload
            }
    }
}


const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data.map((user)=> user.id)
                dispatch(fetchUsersSuccess(users));
                unsubscribe();
            })
            .catch(error => {
                dispatch(fetchUsersFailure(error.message));
                unsubscribe();
            })
    }
}

const store = createStore(reducer, applyMiddleWare(thunkMiddleware));

const unsubscribe = store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchUsers())
