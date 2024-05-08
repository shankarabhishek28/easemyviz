import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as SecureStore from 'expo-secure-store';

const AUTH = "auth"

export const AUTH_LOGOUT = "auth/logout";
export const AUTH_LOGIN_MOBILE = "auth/login-with-moblle";
export const AUTH_RESEND_MOBILE = "auth/resend-mobile";
export const AUTH_LOGIN = "auth/login";
export const AUTH_LOGIN_EMAIL = "auth/login-with-email";
export const AUTH_VERIFY_MOBILE = "auth/verify-mobile";
export const AUTH_REGISTER = "auth/register"
export const AUTH_FORGOT_PASSWORD = "auth/forgot-password"
export const AUTH_Verify_EMAIL = "auth/verify-email"
export const AUTH_UPDATE_PASSWORD = "auth/update-password"




type LoginState = {
    userToken: string | null;
    loading: boolean;
}

const initialState: LoginState = {
    userToken: null,
    loading: false,
}






export const signInWIthEmail = createAsyncThunk(AUTH, async (userToken:string|null) => {
    SecureStore.setItem(AUTH, String(userToken));
    return { userToken }
})


export const signout = createAsyncThunk(AUTH_LOGOUT, async () => {
    await SecureStore.deleteItemAsync(AUTH);
    return true;
});


export const restoreSession = createAsyncThunk(
    'auth/restoreSession',
    async () => {
        const userToken = SecureStore.getItem(AUTH);
        return { userToken }
    }
);


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

        // sign in with Email
        builder.addCase(signInWIthEmail.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(signInWIthEmail.fulfilled, (state, action: PayloadAction<{  userToken: string | null }>) => {
            state.loading = false;
            state.userToken = action.payload.userToken;
        })
        builder.addCase(signInWIthEmail.rejected, (state) => {
            state.loading = false;
            state.userToken = null;
        })

        // sign out
        builder.addCase(signout.pending, (state) => {
        })
        builder.addCase(signout.fulfilled, (state) => {
            state.userToken = null
        })
        builder.addCase(signout.rejected, (state) => {
        })



        // restore session

        builder.addCase(restoreSession.pending, (state) => {
            state.loading = true;
        })

        builder.addCase(restoreSession.fulfilled, (state, action: PayloadAction<{ userToken: string | null }>) => {
            state.loading = false;

            state.userToken = action.payload.userToken;

        })

        builder.addCase(restoreSession.rejected, (state) => {
            state.loading = false;
        })

    }
})

export const { } = authSlice.actions;

export default authSlice;