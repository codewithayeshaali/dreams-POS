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
import { AuthLayout } from "../../layout/AuthLayout2";
import theme from "../../theme";
import logo from "../../assets/image/logo.png";
import illustration from "../../assets/image/signin.png"; 

function UserSignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const user = login(email, password);
      if (!user.isEmailVerified) {
        navigate("/email-verification");
      } else if (user.is2FAEnabled) {
        navigate("/two-step-verification");
      } else {
        navigate("/dashboard");
      }
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
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
      illustrationSrc={illustration}
    >
      <div style={{ width: "100%" }}>


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
            Sign In
          </h2>
          <p
            style={{
              margin: "4px 0 0",
              fontSize: theme.typography.fontSize.base,
              color: theme.colors.textSecondary,
              fontFamily: theme.typography.fontFamily.primary,
            }}
          >
            Access the Dreamspos panel using your email and passcode.
          </p>
        </div>


        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

            <Input
              label="Email *"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              rightIcon={<LuMail size={16} />}
            />

            <Input
              label="Password *"
              isPassword
              value={password}
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
                checked={rememberMe}
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
            to="/usersignup"
            style={{
              fontWeight: theme.typography.fontWeight.semibold,
              textDecoration: "none",
              color: theme.colors.textPrimary,
            }}
          >
            Create an account
          </Link>
        </p>

      
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

        <div style={{ display: "flex", gap: "12px" }}>
          <SocialButton provider="facebook" mode="icon" />
          <SocialButton provider="google" mode="icon" />
          <SocialButton provider="apple" mode="icon" />
        </div>

      </div>
    </AuthLayout>
  );
}

export default UserSignIn;