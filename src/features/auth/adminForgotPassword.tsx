import { AuthLayout3 } from "../../layout/AuthLayout3";
import photo from "../../assets/image/adminforgot.png"; 

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuMail } from "react-icons/lu";

import {  getUsers } from "../../services/authService";

import Button from "../../shared/components/Button";
import Input from "../../shared/components/Input";
import { AuthHeader } from "../../shared/components/AuthHeader";
import { AuthFooter } from "../../shared/components/AuthFooter";
import theme from "../../theme";
import logo from "../../assets/image/logo.png";
import Card from "../../shared/components/Card";

function AdminForgotPassword() {
  const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
  
    const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
  
    setTimeout(() => {
      try {
        const users = getUsers();
  
        const userExists = users.find((u: any) => u.email === email);
  
        if (!userExists) {
          alert("User not found");
          setLoading(false);
          return;
        }
  
        localStorage.setItem("reset_email", email);
  
        console.log("Reset email sent to:", email);
  
        navigate("/admin/reset-password");
  
      } catch (err: any) {
        alert(err.message);
      } finally {
        setLoading(false);
      }
    }, 800);
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
<div style={{ width: "100%", maxWidth: "500px", boxSizing: "border-box" }}
        >
          <Card padding="40px">
            <div style={{ marginBottom: "20px" }}>
              <h2
                style={{
                  margin: 0,
                  fontSize: theme.typography.fontSize.xl,
                  fontWeight: theme.typography.fontWeight.bold,
                  color: theme.colors.textPrimary,
                  fontFamily: theme.typography.fontFamily.primary,
                }}
              >
                Forgot password?
              </h2>
              <p
                style={{
                  margin: "6px 0 0",
                  fontSize: theme.typography.fontSize.sm,
                  color: theme.colors.textSecondary,
                  fontFamily: theme.typography.fontFamily.primary,
                }}
              >
                If you forgot your password, well, then we’ll email you
                instructions to reset your password.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <Input
                  label="Email *"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                  rightIcon={<LuMail size={16} />}
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    color: theme.colors.textSecondary,
                  }}
                ></div>

                <Button type="submit" fullWidth size="lg" loading={loading}>
                  Submit
                </Button>
              </div>
            </form>

            <p
              style={{
                marginTop: "20px",
                textAlign: "center",
                fontSize: theme.typography.fontSize.sm,
                color: theme.colors.textSecondary,
                fontFamily: theme.typography.fontFamily.primary,
              }}
            >
              Return To{" "}
              <Link
                to="/admin/signin"
                style={{
                  color: theme.colors.textPrimary,
                  fontWeight: theme.typography.fontWeight.semibold,
                  textDecoration: "none",
                }}
              >
                Login
              </Link>
            </p>
          </Card>
        </div>
      </div>

    </AuthLayout3>
  );
}

export default AdminForgotPassword;