import { Navigate, Outlet } from "react-router-dom";
import jwt_decode, { JwtPayload } from "jwt-decode";
import { IjwtPayload } from "../types/Jwt";
import { useState } from "react";


const useAuth = () =>{

    const token = localStorage.getItem('accessToken');
    if(token){
        return false;
    }else{
        return true;
    }
  
}

const UnProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet/> : <Navigate to="/main"  replace/>;

};

export default UnProtectedRoutes;

