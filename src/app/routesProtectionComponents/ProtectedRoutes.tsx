import { Navigate, Outlet } from "react-router-dom";
import jwt_decode, { JwtPayload } from "jwt-decode";
import { IjwtPayload } from "../../types/Jwt";
import { useState } from "react";


export const useAuth = () =>{

    // const isNull = (val: string | null | undefined) => val === null;

    // const [currentEmail,setCurrentEmail] = useState('');

    // const getToken = () => JSON.parse(localStorage.getItem('userToken') || '{}');

    // try{
    //     const decodedJwt = jwt_decode<IjwtPayload>(getToken() || '') || null;
    //     // console.log(decodedJwt.roles[1]);
    //     const email = decodedJwt['username'];
    //     if(email!=null){
    //         setCurrentEmail(email);
    //     }
    //     const roles = decodedJwt['roles'];
    // }catch(e){
    //     console.log(e);
    // }
    

    const token = localStorage.getItem('userToken');
    if(token){
        return true;
    }else{
        return false;
    }
  
}

const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet/> : <Navigate to="/login"  replace/>;

};

export default ProtectedRoutes;


