import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export const AuthGuard = ({ children }) => {
  const isAuth = useSelector(state => state.user.isAuth)
  if (isAuth) {
    return <Navigate to="/" replace />;
  } 
  return <Outlet/>;
};
export const UserGuard = ({ children }) => {
  const isAuth = useSelector(state => state.user.isAuth)

  if (isAuth) {
    return <Outlet/>;
  }
  return <Navigate to="/login" replace />;
};
