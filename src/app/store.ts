import { configureStore, ThunkAction, Action, getDefaultMiddleware } from "@reduxjs/toolkit";
import  userReducer  from "../reduxSlices/UserSlice";
import {authApi} from "../services/AuthApi"
import { setupListeners} from "@reduxjs/toolkit/query/react"
import authReducer from "../reduxSlices/authSlice"


export const store = configureStore({
  reducer: {
    user : userReducer,
    auth: authReducer,
    [authApi.reducerPath]:authApi.reducer,
  },
  middleware:(getDefaultMiddleware)=> 
  getDefaultMiddleware().concat(authApi.middleware),
  
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch);
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
