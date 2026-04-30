import { useNavigate } from "react-router-dom";
import Button from "../../shared/components/Button";
import Card from "../../shared/components/Card";
import { AuthHeader } from "../../shared/components/AuthHeader";
import { AuthFooter } from "../../shared/components/AuthFooter";
import { AuthLayout3 } from "../../layout/AuthLayout3";
import theme from "../../theme";
import logo from "../../assets/image/logo.png";
import photo from "../../assets/image/adminSuccess.png";

function AdminSuccess() {
  const navigate = useNavigate();

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
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "100%", maxWidth: "440px" }}>
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
                  onClick={() => navigate("/admin/signin")}
                >
                  Back to Sign In
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </AuthLayout3>
  );
}

export default AdminSuccess;
