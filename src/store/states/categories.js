import { createSelector } from "@reduxjs/toolkit";
import {
  selectCategoriesData,
  selectCategoriesFilter,
} from "store/selectors/categories";

export const categoriesAllData = createSelector(
  selectCategoriesData,
  (categories) => ({
    categories: categories.categoriesList,
    categoriesData: categories.categoriesData,
  })
);
export const categoriesFilter = createSelector(
  selectCategoriesFilter,
  (categories) => categories.filter
);
