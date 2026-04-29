import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuMail } from "react-icons/lu";

import { login } from "../../services/authService";

import Button from "../../shared/components/Button";
import Input from "../../shared/components/Input";
import Card from "../../shared/components/Card";
import Checkbox from "../../shared/components/Checkbox";
import { SocialButton } from "../../shared/components/SocialButton";
import { AuthHeader } from "../../shared/components/AuthHeader";
import { AuthFooter } from "../../shared/components/AuthFooter";
import theme from "../../theme";
import logo from "../../assets/image/logo.png";
import bg from "../../assets/image/bg.png";

function SignIn() {
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
    console.log("Logged in:", user);
    
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
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "auto",
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "24px 16px",
        fontFamily: theme.typography.fontFamily.primary,
        boxSizing: "border-box",
      }}
    >
      <img
        src={bg}
        alt=""
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "60%",
          objectFit: "cover",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative", zIndex: 1, marginBottom: "100px" }}>
        <AuthHeader
          logo={<img src={logo} alt="logo" style={{ height: "40px" }} />}
        />
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          zIndex: 1,
        }}
      >
        <div style={{ width: "100%", maxWidth: "500px" }}>
          <Card padding="40px">

            <div style={{ marginBottom: "20px" }}>
              <h2
                style={{
                  margin: 0,
                  fontSize: theme.typography.fontSize.xl,
                  fontWeight: 700,
                  color: theme.colors.textPrimary,
                }}
              >
                Sign In
              </h2>

              <p style={{ marginTop: "6px", color: theme.colors.textSecondary }}>
                Access your DreamsPOS account
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
                      fontWeight: 600,
                      textDecoration: "none",
                      color: theme.colors.primaryDark,
                    }}
                  >
                    Forgot Password?
                  </Link>
                </div>
                <Button type="submit" fullWidth size="lg" loading={loading}>
                  Sign in
                </Button>

              </div>
            </form>

  
            <p style={{ marginTop: "20px",
                fontSize: theme.typography.fontSize.sm,
                color: theme.colors.textSecondary }}>
              New on our platform?{" "}
              <Link
                to="/register"
                style={{
                  fontWeight: 600,
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
                justifyContent: "center",
                gap: "12px",
                margin: "20px 0",
              }}
            >
              <div style={{ width: "21px", height: "1px", backgroundColor: "#E6EAED" }} />
              <span style={{ fontSize: "14px", fontWeight: 600 }}>OR</span>
              <div style={{ width: "21px", height: "1px", backgroundColor: "#E6EAED" }} />
            </div>

            <div style={{ display: "flex", gap: "12px" }}>
              <SocialButton provider="facebook" mode="icon" />
              <SocialButton provider="google" mode="icon" />
              <SocialButton provider="apple" mode="icon" />
            </div>

          </Card>
        </div>
      </div>

      <div style={{ width: "100%", zIndex: 1, marginTop: "174px" }}>
        <AuthFooter />
      </div>
    </div>
  );
}

export default SignIn;
