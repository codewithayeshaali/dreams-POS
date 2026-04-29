import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Signin from "./features/auth/signin";
import Register from "./features/auth/register";
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
<Route path="/" element={<Signin />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Register />} />
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
                                                                                                                                                                                                                                                                                
