import { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import { getUserListAction } from "../../reduxSlices/UserSlice";




const MainPage = () => {

    const dispatch = useAppDispatch();

    useEffect(()=>{

        dispatch(getUserListAction());

    },[])


    return ( 
        <div>
            Welcome to the Customer feedback application
        </div>
    );
}
 
export default MainPage;