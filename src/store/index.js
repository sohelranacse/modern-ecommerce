import { createStore, combineReducers } from 'redux'
import productReducers from './productReducers.js'

const rootReducer = combineReducers({
    products:productReducers
})

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store