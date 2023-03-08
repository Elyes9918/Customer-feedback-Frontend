import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { UserInfo } from "os";
import { ApiStatus } from "../types/ApiStatus";
import { LoginUserApi, getUserListApi, logoutUserApi } from "../services/UserService";
import { stat } from "fs";
import { IUser, IUserForm } from "../types/User";
import Cookies from "universal-cookie";
import { useState } from "react";

const list : IUser[] = [];

const cookies = new Cookies();
const cookieName = 'PHPSESSID';


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
)

export const LoginUserAction = createAsyncThunk(
    "user/loginUserAction",
    async (data:IUserForm)=> {
        const response = await LoginUserApi(data);

        console.log(response);
        
        // if(response){            
        // }


    }
)

export const logoutAction = createAsyncThunk(
    "user/logoutAction",
    async () => {
        const response = await logoutUserApi();
        return response.data;
    }
)


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


      
    builder.addCase(LoginUserAction.pending,(state)=>{
        state.LoginUserFormStatus = ApiStatus.loading
    });

    builder.addCase(LoginUserAction.fulfilled,(state)=>{
        state.LoginUserFormStatus=ApiStatus.success;
    });

    builder.addCase(LoginUserAction.rejected, (state) => {
        state.LoginUserFormStatus = ApiStatus.error;
      });


    }
})

export default userSlice.reducer