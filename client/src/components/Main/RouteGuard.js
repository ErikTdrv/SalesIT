import { useContext } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export const AuthGuard = ({ children }) => {
  const { isAuth } = useContext(AuthContext);

  if (isAuth) {
    return <Navigate to="/" replace />;
  }

  return children;
};
export const UserGuard = ({ children }) => {
  const { isAuth } = useContext(AuthContext);

  if (isAuth) {
    return children;
  }
  return <Navigate to="/login" replace />;
};
