import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import rootPersistConfig from "./persistConfig";
import {
  authSlice,
  categoriesSlice,
  mediaSlice,
  productsSlice,
  projectSlice,
  usersSlice,
} from "./slices/index";

const reducers = combineReducers({
  auth: authSlice,
  users: usersSlice,
  categories: categoriesSlice,
  products: productsSlice,
  media: mediaSlice,
  project: projectSlice,
});

const persistedReducers = persistReducer(rootPersistConfig, reducers);

export default persistedReducers;
