import PropTypes from 'prop-types';
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const PrivetRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <h2 className='text-5xl text-center'>Loading.....</h2>
    }

    if(!user){
        return <Navigate to='/login'></Navigate>
    }



    return children;
};

export default PrivetRoute;
PrivetRoute.propTypes = {
   
    children: PropTypes.node,
}