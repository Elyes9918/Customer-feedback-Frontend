import { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import { getUserListAction } from "../../features/userSlice";
import jwt_decode, { JwtPayload } from "jwt-decode";
import { store } from "../../app/store";
import { IjwtPayload } from "../../types/Jwt";




const MainPage = () => {

    const dispatch = useAppDispatch();

    const getToken = () => JSON.parse(localStorage.getItem('userToken') || '{}');
    const decodedJwt = jwt_decode<IjwtPayload>(getToken() || '') || null;

    // const state = store.getState();
    // const authToken = state.auth.jwtpayload.username;

    useEffect(()=>{

        dispatch(getUserListAction());
    },[])


    return ( 
        <div>
            Welcome to the Customer feedback application
           <div>Welcome {decodedJwt["username"]}</div>
           <div>Your Roles are :  {decodedJwt["roles"]?.at(0)}</div>
        </div>
    );
}
 
export default MainPage;