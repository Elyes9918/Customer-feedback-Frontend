import { useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { getUserListAction } from "../../features/userSlice";
import jwt_decode, { JwtPayload } from "jwt-decode";
import { store } from "../../app/store";
import { IjwtPayload } from "../../types/Jwt";
import WithPermessionUnique from "../../routesProtectionComponents/WithPermessionUnique";
import WithPermessionTree from "../../routesProtectionComponents/WithPermessionTree";



const MainPage = () => {

    const dispatch = useAppDispatch();

    const getToken = () => JSON.parse(localStorage.getItem('accessToken') || '{}');
    const decodedJwt = jwt_decode<IjwtPayload>(getToken() || '') || null;


    useEffect(()=>{
        
    
        dispatch(getUserListAction());

    },[])


    return ( 
     
        <div>
        

            Welcome to the Customer feedback application
           <div>Welcome {decodedJwt["username"]}</div>
           <div>Your Roles are :  {decodedJwt["roles"]?.at(0)}</div>

           <WithPermessionUnique roleRequired={"ADMIN"}>
            HIii
           </WithPermessionUnique>

           <WithPermessionTree minRoleRequired={"ADMIN"}>
            This can be seen by the client,the members,gist and admins
           </WithPermessionTree>


        </div>
    );
}
 
export default MainPage;