import {createSlice,PayloadAction } from "@reduxjs/toolkit"
import {RootState} from "../app/store";

export interface AuthState {
    token:string | null;
}

const initialState: AuthState = {
    token:null
}

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {
        setUser: (state,action: PayloadAction<{token:string}>) => {
            localStorage.setItem("userToken",JSON.stringify({
                token:action.payload.token
            }));

        state.token = action.payload.token;
        }
    }
})

export const selectAuth = (state:RootState) => state.auth;

export const {setUser} = authSlice.actions;

export default authSlice.reducer;
