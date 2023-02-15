import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as Appreducer } from "./reducer";

export const store = legacy_createStore(Appreducer, applyMiddleware(thunk));
