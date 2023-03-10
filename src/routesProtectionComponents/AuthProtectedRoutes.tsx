import { Navigate, Outlet } from "react-router-dom";
import jwt_decode, { JwtPayload } from "jwt-decode";
import { IjwtPayload } from "../types/Jwt";
import { useState } from "react";


export const useAuth = () =>{
    
    // const getToken = () => JSON.parse(localStorage.getItem('accessToken') || '{}');
    // const decodedJwt = jwt_decode<IjwtPayload>(getToken() || '') || null;
    // const roles = decodedJwt.roles;


    const token = localStorage.getItem('accessToken');
    if(token){
        return true;
    }else{
        return false;
    }
  
}

const AuthProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet/> : <Navigate to="/login"  replace/>;

};

export default AuthProtectedRoutes;


