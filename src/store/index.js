import { createStore, combineReducers, applyMiddleware } from 'redux'
import passwordReducers from './password/password.reducers'
import thunk from 'redux-thunk'

const reducers = combineReducers ({
    password: passwordReducers
})

const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

export default store;