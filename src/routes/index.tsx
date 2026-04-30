import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import AdminSignin from "../features/auth/adminSignin";
import AdminSignUp from "../features/auth/adminSignUp";
import AdminForgotPassword from "../features/auth/adminForgotPassword";
import AdminResetPassword from "../features/auth/adminResetPassword";
import AdminEmailVerification from "../features/auth/adminEmailVerification";
import AdminSuccess from "../features/auth/adminSuccess";
import AdminTwoStepVerification from "../features/auth/adminTwostepverification";


import UserSignin from "../features/auth/userSignin";
import UserSignUp from "../features/auth/userSignup";
import UserForgotPassword from "../features/auth/userForgotPassword";
import UserResetPassword from "../features/auth/userResetPassword";
import UserEmailVerification from "../features/auth/userEmailVerification";
import UserSuccess from "../features/auth/userSuccess";
import UserTwoStepVerification from "../features/auth/userTwostepverification";


import EmailVerification from "../features/auth/email-verification";
import ForgotPassword from "../features/auth/forgot-password";
import ResetPassword from "../features/auth/reset-password";
import Success from "../features/auth/success";
import TwoStepVerification from "../features/auth/two-step-verification";
import SignIn from "../features/auth/signin";
import Register from "../features/auth/register";

import Home from "../features/dashboards/home";

export default function AppRoutes() {
  return (
    <Routes>

      <Route path="/" element={<AdminSignin />} />

   
      <Route path="/admin/signin" element={<AdminSignin />} />
      <Route path="/admin/signup" element={<AdminSignUp />} />
      <Route path="/admin/forgot-password" element={<AdminForgotPassword />} />
      <Route path="/admin/reset-password" element={<AdminResetPassword />} />
      <Route path="/admin/email-verification" element={<AdminEmailVerification />} />
      <Route path="/admin/success" element={<AdminSuccess />} />
      <Route path="/admin/two-step-verification" element={<AdminTwoStepVerification />} />

    
      <Route path="/user/signin" element={<UserSignin />} />
      <Route path="/user/signup" element={<UserSignUp />} />
      <Route path="/user/forgot-password" element={<UserForgotPassword />} />
      <Route path="/user/reset-password" element={<UserResetPassword />} />
      <Route path="/user/email-verification" element={<UserEmailVerification />} />
      <Route path="/user/success" element={<UserSuccess />} />
      <Route path="/user/two-step-verification" element={<UserTwoStepVerification />} />

      
      <Route path="/email-verification" element={<EmailVerification />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/success" element={<Success />} />
      <Route path="/two-step-verification" element={<TwoStepVerification />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}