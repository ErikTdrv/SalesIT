import { useContext } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export const AuthGuard = ({children}) => {
    const { isAuth } = useContext(AuthContext);

    if(isAuth){
        return <Navigate to='/' replace />;
    }

    return children;
}