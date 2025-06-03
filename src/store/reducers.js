import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import rootPersistConfig from "./persistConfig";
import {
  authSlice,
  categoriesSlice,
  clientsSlice,
  leadsSlice,
  mediaSlice,
  productsSlice,
  projectSlice,
  testimonialsSlice,
  usersSlice,
  suppliersSlice,
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
  clients: clientsSlice,
  suppliers: suppliersSlice,
});

const persistedReducers = persistReducer(rootPersistConfig, reducers);

export default persistedReducers;
