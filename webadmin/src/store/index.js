import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from "./reducers/userReducer"
import dataReducer from "./reducers/dataReducer"

const reducers = combineReducers({userReducer, dataReducer})

const store = createStore(reducers, applyMiddleware(thunk))

export default store