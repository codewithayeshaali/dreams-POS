import { useState } from "react";
import { Link } from "react-router-dom";
import { LuMail } from "react-icons/lu";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
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
padding: "24px 16px 24px",
        fontFamily: theme.typography.fontFamily.primary,
        boxSizing: "border-box",
      }}
    >
      <img
        src={bg}
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "60%",
          objectFit: "cover",
          objectPosition: "center top",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, width: "100%", flexShrink: 0, marginBottom:"139px" }}>
        <AuthHeader
          logo={
            <img
              src={logo}
              alt="DreamsPOS"
              style={{ height: "40px", objectFit: "contain" }}
            />
          }
        />
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ width: "100%", maxWidth: "500px", boxSizing: "border-box" }}>
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

                <div style={{
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  color: theme.colors.textSecondary,
 

}}>
                  <Checkbox
                    label="Remember Me"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    
                  />
                  <Link
                    to="/forgot-password"
                    style={{
                      fontSize: theme.typography.fontSize.base,
                      color: theme.colors.primaryDark,
                      textDecoration: "none",
                      fontWeight: theme.typography.fontWeight.semibold,
                      fontFamily: theme.typography.fontFamily.primary,
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
                to="/register"
                style={{
                  color: theme.colors.textPrimary,
                  fontWeight: theme.typography.fontWeight.semibold,
                  textDecoration: "none",
                }}
              >
                Create an account
              </Link>
            </p>

           <div style={{ display: "flex", alignItems: "center",justifyContent:"center" ,gap: "12px", margin: "20px 0" }}>
<div style={{ width: "21px", height: "1px", backgroundColor: "#E6EAED" }} /> 
 <span style={{ fontSize: "14px", color: theme.colors.textSecondary, fontWeight: 600 }}>
    OR
  </span>
<div style={{ width: "21px", height: "1px", backgroundColor: "#E6EAED" }} /></div>

            <div style={{ display: "flex", gap: "12px", width: "100%" }}>
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
