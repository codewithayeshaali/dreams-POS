import { useState } from "react";
import { Link } from "react-router-dom";
import { LuMail } from "react-icons/lu";

import Button from "../../shared/components/Button";
import Input from "../../shared/components/Input";
import Card from "../../shared/components/Card";
import { AuthHeader } from "../../shared/components/AuthHeader";
import { AuthFooter } from "../../shared/components/AuthFooter";
import theme from "../../theme";
import logo from "../../assets/image/logo.png";
import bg from "../../assets/image/bg.png";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../../services/authService";

function ForgotPassword() {
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

        navigate("/reset-password");
      } catch (err: any) {
        alert(err.message);
      } finally {
        setLoading(false);
      }
    }, 800);
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

      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          flexShrink: 0,
          marginBottom: "139px",
        }}
      >
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
        <div
          style={{ width: "100%", maxWidth: "500px", boxSizing: "border-box" }}
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
                  fontSize: theme.typography.fontSize.base,
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
                to="/signin"
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

      <div style={{ width: "100%", zIndex: 1, marginTop: "174px" }}>
        <AuthFooter />
      </div>
    </div>
  );
}

export default ForgotPassword;
