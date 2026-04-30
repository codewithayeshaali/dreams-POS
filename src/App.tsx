import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AdminSignin from "./features/auth/adminSignin";
// import Register from "./features/auth/register";
// import UserSignUp from "./features/auth/userSignup";
import AdminSignUp from "./features/auth/adminSignup";
import ForgotPassword from "./features/auth/forget-password";
import EmailVerification from "./features/auth/email-verification";
import ResetPassword from "./features/auth/reset-password";
import Success from "./features/auth/success";
import TwoStepVerification from "./features/auth/two-step-verification";
import Home from "./features/dashboards/home";


function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
<Route path="/" element={<AdminSignin />} />
        <Route path="/adminsignIn" element={<AdminSignin />} />
        <Route path="/adminSignUp" element={<AdminSignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/email-verification" element={<EmailVerification />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/success" element={<Success />} />
        <Route path="/two-step-verification" element={<TwoStepVerification />} />

      
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
                                                                                                                                                                                                                                                                                
