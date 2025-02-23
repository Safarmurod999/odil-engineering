import { createSelector } from "@reduxjs/toolkit";
import { selectAuthData } from "../selectors/auth.js";

export const authData = createSelector(selectAuthData, (auth) => ({
    user: auth.userData,
    isAuthenticated: !!auth.token, 
}));
