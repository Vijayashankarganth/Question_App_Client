import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducer/userReducer'
import questionReducer from '../reducer/questionReducer'

const configureStore=()=>{
    const store = createStore(combineReducers({
        user:userReducer,
        question:questionReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore