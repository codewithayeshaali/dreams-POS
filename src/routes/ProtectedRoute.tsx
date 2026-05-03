
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: any) {

  const user = localStorage.getItem("auth_user");

  if (!user) {
    return <Navigate to="/admin/signin" replace />;
  }

  return children;
}