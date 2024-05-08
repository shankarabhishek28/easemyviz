import { combineReducers } from "@reduxjs/toolkit";
import authSlice, { AUTH_LOGOUT } from "./slice/authSlice";


const combinedReducer = combineReducers({
    auth: authSlice.reducer,
})


export const rootReducer = (state: any, action: any) => {
    if (action.type === `${AUTH_LOGOUT}/fulfilled`) {
        state = undefined;
    }

    return combinedReducer(state, action);
};