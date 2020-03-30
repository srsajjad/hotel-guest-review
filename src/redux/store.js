// redux imports
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { msgSlice } from "./msgSlice";

// redux store configuration
const reducer = combineReducers({
  msgReducer: msgSlice.reducer
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["msgReducer"]
};

const persistedReducer = persistReducer(persistConfig, reducer);
const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production"
});

let persistor = persistStore(store);

export { store, persistor };
