import { createSelector } from "@reduxjs/toolkit";
import {
  selectClientsData,
  selectClientsFilter,
} from "store/selectors/clients";

export const clientsAllData = createSelector(selectClientsData, (clients) => ({
  clients: clients.clientsList,
  clientsData: clients.clientsData,
}));
export const clientsFilter = createSelector(
  selectClientsFilter,
  (clients) => clients.filter
);
