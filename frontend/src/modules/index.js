import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { userReducer } from "./user";
import { mediReducer } from "./medicines";
import { medicineReducer } from "./medicine";
import { feedbackReducer } from "./feedback";

const rootReducer = combineReducers({ userReducer, mediReducer, medicineReducer, feedbackReducer });

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
