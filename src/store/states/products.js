import { createSelector } from "@reduxjs/toolkit";
import {
  selectProductsData,
  selectProductsFilter,
} from "store/selectors/products";

export const productsAllData = createSelector(
  selectProductsData,
  (products) => ({
    products: products.productsList,
    productData: products.productData,
  })
);
export const productsFilter = createSelector(
  selectProductsFilter,
  (products) => products.filter
);
