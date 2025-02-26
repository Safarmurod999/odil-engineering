import { createSelector } from "@reduxjs/toolkit";
import { selectLeadsData, selectLeadsFilter } from "store/selectors/leads";

export const leadsData = createSelector(selectLeadsData, (leads) => ({
  leads: leads.leadsList,
  leadsData: leads.leadsData,
}));
export const leadsFilter = createSelector(
  selectLeadsFilter,
  (leads) => leads.filter
);
