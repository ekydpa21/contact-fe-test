import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import contactReducer from "./reducers/contactReducer"
import logger from "./middleware/logger"

const rootReducer = combineReducers({
  contactsData: contactReducer,
})

let store = createStore(rootReducer, applyMiddleware(logger, thunk))

export default store
