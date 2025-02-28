import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import rootPersistConfig from "./persistConfig";
import {
  authSlice,
  categoriesSlice,
  leadsSlice,
  mediaSlice,
  productsSlice,
  projectSlice,
  testimonialsSlice,
  usersSlice,
} from "./slices/index";

const reducers = combineReducers({
  auth: authSlice,
  users: usersSlice,
  categories: categoriesSlice,
  products: productsSlice,
  media: mediaSlice,
  project: projectSlice,
  leads: leadsSlice,
  testimonials: testimonialsSlice,
});

const persistedReducers = persistReducer(rootPersistConfig, reducers);

export default persistedReducers;
