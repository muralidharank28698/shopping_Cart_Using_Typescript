import { type } from "os";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

import { ProductReducer } from "./product/ProductReducer";

export const rootReducer = combineReducers({ ProductReducer });

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(logger));
