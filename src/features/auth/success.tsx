import { useNavigate } from "react-router-dom";
import Button from "../../shared/components/Button";
import Card from "../../shared/components/Card";
import { AuthHeader } from "../../shared/components/AuthHeader";
import { AuthFooter } from "../../shared/components/AuthFooter";
import theme from "../../theme";
import logo from "../../assets/image/logo.png";
import bg from "../../assets/image/bg.png";

function Success() {
  const navigate = useNavigate();

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
        <div style={{ width: "100%", maxWidth: "500px", boxSizing: "border-box" }}>
          <Card padding="40px">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "16px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  backgroundColor: theme.colors.success,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>

              <h2
                style={{
                  margin: 0,
                  fontSize: theme.typography.fontSize.xl,
                  fontWeight: theme.typography.fontWeight.bold,
                  color: theme.colors.textPrimary,
                  fontFamily: theme.typography.fontFamily.primary,
                }}
              >
                Success
              </h2>

              <p
                style={{
                  margin: 0,
                  fontSize: theme.typography.fontSize.base,
                  color: theme.colors.textSecondary,
                  fontFamily: theme.typography.fontFamily.primary,
                }}
              >
                Your new password has been successfully saved
              </p>

              <div style={{ width: "100%", marginTop: "8px" }}>
                <Button
                  fullWidth
                  size="lg"
                  onClick={() => navigate("/signIn")}
                >
                  Back to Sign In
                </Button>
              </div>
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

export default Success;