import { Navigate, Outlet } from "react-router-dom";
import jwt_decode, { JwtPayload } from "jwt-decode";
import { IjwtPayload } from "../types/Jwt";
import { useState } from "react";


export const userRole = () =>{
    
    const getToken = () => JSON.parse(localStorage.getItem('accessToken') || '{}');
    const decodedJwt = jwt_decode<IjwtPayload>(getToken() || '') || null;
    const roles = decodedJwt.roles;

    if(roles){
        return roles;
    }else{
        return [];
    }
}

type ProtectedRouteRole = {
	roleRequired : 'ADMIN' | 'MEMBER' | 'GESTIONNAIRE' | 'CLIENT';
}

const RoleProtectedRoutes = (props: ProtectedRouteRole) => {
    
    const userRoles = userRole();
    
    // const isAllowed = () => {

        
    // }


    return userRoles.includes("ROLE_"+props.roleRequired) ? <Outlet/> : <Navigate to="/main"  replace/>;

};

export default RoleProtectedRoutes;

