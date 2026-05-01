import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { login, getAuthUser } from "../../services/authService";
import Button from "../../shared/components/Button";
import Input from "../../shared/components/Input";
import Card from "../../shared/components/Card";
import { AuthHeader } from "../../shared/components/AuthHeader";
import { AuthFooter } from "../../shared/components/AuthFooter";
import theme from "../../theme";
import logo from "../../assets/image/logo.png";
import bg from "../../assets/image/bg.png";
import defaultAvatar from "../../assets/image/avatar.png"; 

function LockScreen() {
  const navigate = useNavigate();
  const user = getAuthUser(); 

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!user?.email) return;
    setLoading(true);

    try {
      const loggedIn = login(user.email, password);

      if (!loggedIn.isEmailVerified) {
        navigate("/email-verification");
      } else if (loggedIn.is2FAEnabled) {
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
        padding: "20px 20px",
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

      <div style={{ position: "relative", zIndex: 1, marginBottom: "20px" }}>
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
        <div style={{ width: "100%", maxWidth: "417px" }}>
          <Card padding="20px">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "24px",
                gap: "12px",
                borderRadius:"5px",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: theme.typography.fontSize.sm,
                  fontWeight: 700,
                  color: theme.colors.textSecondary,
                }}
              >
                Welcome back!
              </p>

              <div
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: `2px solid ${theme.colors.border}`,
                  flexShrink: 0,
                }}
              >
                <img
                  src={user?.avatar ?? defaultAvatar}
                  alt={user?.name ?? "User"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = defaultAvatar;
                  }}
                />
              </div>

              <h2
                style={{
                  margin: 0,
                  fontSize: theme.typography.fontSize.lg,
                  fontWeight: 700,
                  color: theme.colors.textPrimary,
                }}
              >
                {user?.name ?? "Guest User"}
              </h2>
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
                  placeholder="Enter your password"
                  isPassword
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                />

                <Button
                  type="submit"
                  fullWidth
                  size="lg"
                  loading={loading}
                >
                  Log In
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
        }}
      >
       <div
  style={{
    display: "flex",
    gap: "20px",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",fontWeight:"500", fontSize: "12px",
  }}
>
  {[
    { label: "Terms & Condition", href: "/terms" },
    { label: "Privacy", href: "/privacy" },
    { label: "Help", href: "/help" },
  ].map((link) => (
    <a
      key={link.label}
      href={link.href}
      style={{
        fontFamily: theme.typography.fontFamily.primary,
       
        color: theme.colors.textSecondary,
        textDecoration: "none",
        
        transition: "color 0.2s",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.color = theme.colors.primary)
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.color = theme.colors.textSecondary)
      }
    >
      {link.label}
    </a>
  ))}

  <select
    style={{
      fontFamily: theme.typography.fontFamily.primary,
      fontSize: "12px",
      color: theme.colors.textSecondary,
      border: "none",
      outline: "none",
      background: "transparent",
      cursor: "pointer",
    }}
  >
    <option value="en">English</option>
    <option value="ar">Arabic</option>
    <option value="fr">French</option>
  </select>
</div>


<AuthFooter 
 />
</div>
</div>
  );
}

export default LockScreen;