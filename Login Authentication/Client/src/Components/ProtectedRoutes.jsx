// components/ProtectedRoutes.js
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

export const UserRoute = () => {
  const { user } = useAuth();
  // console.log("UserRoute check:", user);

  return user && (user.role === "user") ? (
    <Outlet />
  ) : (
    <Navigate to="/auth/user/login" />
  );
  
};
export const AdminPage = () => {
  const { user } = useAuth();
  // console.log("UserRoute check:", user);

  return user && (user.role === "admin") ? (
    <Outlet />
  ) : (
    <Navigate to="/auth/admin/login" />
  );

};
