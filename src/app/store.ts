import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { setupListeners} from "@reduxjs/toolkit/query/react"
import userReducer  from "../features/userSlice";
import authReducer  from "../features/authSlice";


export const store = configureStore({
  reducer: {
    user : userReducer,
    auth : authReducer,
  }
  
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
