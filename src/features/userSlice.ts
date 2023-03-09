import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { ApiStatus } from "../types/ApiStatus";
import {  getUserListApi } from "../services/UserService";
import { IUser } from "../types/User";


const list : IUser[] = [];


const initialState = {
    list,
    listStatus: ApiStatus.ideal,
    LoginUserFormStatus:ApiStatus.ideal
}

export const getUserListAction = createAsyncThunk(
    "user/getUserListAction",
    async () => {
       const response = await getUserListApi();
       console.log(response.data);
       return response.data;
    }
);


const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{

    },
    extraReducers: (builder) =>{

    builder.addCase(getUserListAction.pending,(state)=>{
        state.listStatus = ApiStatus.loading
    });

    builder.addCase(getUserListAction.fulfilled,(state,action)=>{
        state.listStatus=ApiStatus.ideal;
        state.list=action.payload;
    });

    builder.addCase(getUserListAction.rejected, (state) => {
        state.listStatus = ApiStatus.error;
      });

    }
})

export default userSlice.reducer