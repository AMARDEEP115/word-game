import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { Reducer as WordsReducer } from "./RandomWords/reducer";
import { Reducer as PlayerReducer} from "./Player/reducer";

const rootReducer=combineReducers({WordsReducer,PlayerReducer});

const store=legacy_createStore(rootReducer,applyMiddleware(thunk));

export {store};