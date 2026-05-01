import { useState, useEffect } from "react";
import OtpPin from "../../shared/components/OtpPin";
import Button from "../../shared/components/Button";
import Card from "../../shared/components/Card";
import { AuthHeader } from "../../shared/components/AuthHeader";
import { AuthFooter } from "../../shared/components/AuthFooter";
import theme from "../../theme";
import logo from "../../assets/image/logo.png";
import bg from "../../assets/image/bg.png";
import { useNavigate } from "react-router-dom";
import { verifyEmail, getAuthUser } from "../../services/authService";

const TIMER_SECONDS = 60;

function EmailVerification() {
  const [otp, setOtp] = useState<string[]>(["", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(TIMER_SECONDS);
  const [canResend, setCanResend] = useState(false);
  const navigate = useNavigate();
  const user = getAuthUser();

  useEffect(() => {
    if (timer <= 0) {
      setCanResend(true);
      return;
    }
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const handleResend = () => {
    if (!canResend) return;
    setOtp(["", "", "", ""]);
    setTimer(TIMER_SECONDS);
    setCanResend(false);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);

    const enteredOtp = otp.join("");

    if (enteredOtp !== "1234") {
      alert("Invalid OTP");
      setLoading(false);
      return;
    }

    try {
      const updatedUser = verifyEmail(user.email);

      console.log("Email verified:", updatedUser);
      if (updatedUser.is2FAEnabled) {
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
          marginBottom: "30px",
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
                Email OTP Verification
              </h2>
              <p
                style={{
                  margin: "6px 0 0",
                  fontSize: theme.typography.fontSize.sm,
                  color: theme.colors.textSecondary,
                  fontFamily: theme.typography.fontFamily.primary,
                }}
              >
                OTP sent to your Email Address ******doe@example.com{" "}
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
                <OtpPin length={4} value={otp} onChange={setOtp} />

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "8px",
                    marginTop: "8px",
                  }}
                >
                  {!canResend && (
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        backgroundColor: `${theme.colors.error}15`,
                        border: `none`,
                        borderRadius: "5px",
                        padding: "4px 12px",
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={theme.colors.error}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      <span
                        style={{
                          fontSize: theme.typography.fontSize.sm,
                          color: theme.colors.error,
                          fontWeight: theme.typography.fontWeight.semibold,
                          fontFamily: theme.typography.fontFamily.primary,
                        }}
                      >
                        {formatTime(timer)}
                      </span>
                    </div>
                  )}

                  <p
                    style={{
                      margin: 0,
                      textAlign: "center",
                      fontSize: theme.typography.fontSize.sm,
                      color: theme.colors.textSecondary,
                      fontFamily: theme.typography.fontFamily.primary,
                    }}
                  >
                    Didn't get the OTP?{" "}
                    <span
                      onClick={handleResend}
                      style={{
                        color: canResend
                          ? theme.colors.textPrimary
                          : theme.colors.textSecondary,
                        fontWeight: theme.typography.fontWeight.semibold,
                        cursor: canResend ? "pointer" : "not-allowed",
                        opacity: canResend ? 1 : 0.5,
                        transition: "opacity 0.2s ease, color 0.2s ease",
                      }}
                    >
                      Resend OTP
                    </span>
                  </p>
                </div>

                <Button type="submit" fullWidth size="lg" loading={loading}>
                  Verify & Proceed
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>

      <div style={{ width: "100%", zIndex: 1, marginTop: "30px" }}>
        <AuthFooter />
      </div>
    </div>
  );
}

export default EmailVerification;
