import { applyMiddleware, compose, combineReducers, legacy_createStore } from 'redux'
import thunk from 'redux-thunk'
import { LoginReducer } from './Reducers/Login/LoginReducer';
import { FilterReducer } from './Reducers/FilterReducer/FilterReducer';
const rootReducer = combineReducers({
    LoginReducer,
    FilterReducer,
 
})
const composeEnhancers = (window ).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = [thunk]
const enhancer = composeEnhancers(applyMiddleware(...middleware))
export const store = legacy_createStore(rootReducer, enhancer)



