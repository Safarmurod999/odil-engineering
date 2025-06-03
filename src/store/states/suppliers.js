import { createSelector } from "@reduxjs/toolkit";
import { selectSuppliersData, selectSuppliersFilter } from "store/selectors/suppliers";

export const suppliersData = createSelector(selectSuppliersData, (suppliers) => ({
  suppliers: suppliers.suppliersList,
  suppliersData: suppliers.suppliersData,
}));
export const suppliersFilter = createSelector(
  selectSuppliersFilter,
  (suppliers) => suppliers.filter
);
