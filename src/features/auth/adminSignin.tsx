import { AuthLayout3 } from "../../layout/AuthLayout3";
import photo from "../../assets/image/adminsignin.png"; 

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuMail } from "react-icons/lu";

import { login } from "../../services/authService";

import Button from "../../shared/components/Button";
import Input from "../../shared/components/Input";
import Checkbox from "../../shared/components/Checkbox";
import { SocialButton } from "../../shared/components/SocialButton";
import { AuthHeader } from "../../shared/components/AuthHeader";
import { AuthFooter } from "../../shared/components/AuthFooter";
import theme from "../../theme";
import logo from "../../assets/image/logo.png";

function AdminSignUp() {
  const navigate = useNavigate();
 
   const [form, setForm] = useState({
     name: "",
     email: "",
     password: "",
     confirm: "",
   });
 
   const [errors, setErrors] = useState<Record<string, string>>({});
   const [termPrivacy, setTermPrivacy] = useState(false);
   const [loading, setLoading] = useState(false);
 
   const handleChange = (key: string, value: string) => {
     setForm((prev) => ({ ...prev, [key]: value }));
   };
 
   const validate = () => {
     const newErrors: Record<string, string> = {};
 
     if (!form.name.trim()) {
       newErrors.name = "Name is required";
     }
 
     if (!form.email.includes("@")) {
       newErrors.email = "Enter a valid email";
     }
 
     if (form.password.length < 6) {
       newErrors.password = "Password must be at least 6 characters";
     }
 
     if (form.confirm !== form.password) {
       newErrors.confirm = "Passwords do not match";
     }
 
     if (!termPrivacy) {
       newErrors.terms = "You must accept Terms & Privacy";
     }
 
     setErrors(newErrors);
     return Object.keys(newErrors).length === 0;
   };
 
   const handleSubmit = (e: React.SyntheticEvent) => {
     e.preventDefault();
 
     if (!validate()) return;
 
     setLoading(true);
 
     setTimeout(() => {
       try {
         signup({
           name: form.name,
           email: form.email,
           password: form.password,
         });
 
         console.log("User registered:", form);
 
         navigate("/signin"); // redirect after success
       } catch (err: any) {
         alert(err.message);
       } finally {
         setLoading(false);
       }
     }, 1000);
   };
 

  return (
    <AuthLayout3
      header={
        <AuthHeader
          logo={
            <img
              src={logo}
              alt="DreamsPOS"
              style={{ height: "40px", objectFit: "contain" }}
            />
          }
        />
      }
      footer={<AuthFooter />}
      imageSrc={photo}
    >
      <div style={{ width: "100%" }}>

        {/* Title */}
        <div style={{ marginBottom: "28px" }}>
          <h2
            style={{
              margin: 0,
              fontSize: theme.typography.fontSize.xl,
              fontWeight: theme.typography.fontWeight.bold,
              color: theme.colors.textPrimary,
              fontFamily: theme.typography.fontFamily.primary,
            }}
          >
            Sign In
          </h2>
          <p
            style={{
              margin: "6px 0 0",
              fontSize: theme.typography.fontSize.base,
              color: theme.colors.textSecondary,
              fontFamily: theme.typography.fontFamily.primary,
            }}
          >
            Access the Dreamspos panel using your email and passcode.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

            <Input
              label="Email *"
              type="email"
              value={form.email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              rightIcon={<LuMail size={16} />}
            />

            <Input
              label="Password *"
              isPassword
              value={form.password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
            />

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Checkbox
                label="Remember Me"
                checked={form.rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <Link
                to="/forgot-password"
                style={{
                  fontSize: theme.typography.fontSize.sm,
                  fontWeight: theme.typography.fontWeight.semibold,
                  textDecoration: "none",
                  color: theme.colors.primaryDark,
                  fontFamily: theme.typography.fontFamily.primary,
                }}
              >
                Forgot Password?
              </Link>
            </div>

            <Button type="submit" fullWidth size="lg" loading={loading}>
              Sign In
            </Button>

          </div>
        </form>

        {/* Register link */}
        <p
          style={{
            marginTop: "20px",
            fontSize: theme.typography.fontSize.sm,
            color: theme.colors.textSecondary,
            fontFamily: theme.typography.fontFamily.primary,
          }}
        >
          New on our platform?{" "}
          <Link
            to="/adminSignUp"
            style={{
              fontWeight: theme.typography.fontWeight.semibold,
              textDecoration: "none",
              color: theme.colors.textPrimary,
            }}
          >
            Create an account
          </Link>
        </p>

        {/* OR divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            margin: "20px 0",
          }}
        >
          <div style={{ flex: 1, height: "1px", backgroundColor: "#E6EAED" }} />
          <span
            style={{
              fontSize: theme.typography.fontSize.sm,
              fontWeight: theme.typography.fontWeight.semibold,
              color: theme.colors.textSecondary,
              fontFamily: theme.typography.fontFamily.primary,
            }}
          >
            OR
          </span>
          <div style={{ flex: 1, height: "1px", backgroundColor: "#E6EAED" }} />
        </div>

        {/* Social buttons */}
        <div style={{ display: "flex", gap: "12px" }}>
          <SocialButton provider="facebook" mode="icon" />
          <SocialButton provider="google" mode="icon" />
          <SocialButton provider="apple" mode="icon" />
        </div>

      </div>
    </AuthLayout3>
  );
}

export default AdminSignUp;