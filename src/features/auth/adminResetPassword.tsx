import { AuthLayout3 } from "../../layout/AuthLayout3";
import photo from "../../assets/image/adminSuccess.png";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../shared/components/Button";
import Input from "../../shared/components/Input";
import { AuthHeader } from "../../shared/components/AuthHeader";
import { AuthFooter } from "../../shared/components/AuthFooter";
import theme from "../../theme";
import logo from "../../assets/image/logo.png";
import Card from "../../shared/components/Card";
import { resetPassword } from "../../services/authService";

function AdminResetPassword() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {
      const email = localStorage.getItem("reset_email");

      if (!email) {
        alert("Reset session expired");
        navigate("/admin/forgot-password");
        return;
      }

      resetPassword(email, form.password);

      localStorage.removeItem("reset_email");

      setLoading(false);

      navigate("/admin/success");
    }, 1500);
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
        <div
          style={{ width: "100%", maxWidth: "500px", boxSizing: "border-box" }}
        >
          {" "}
          <Card padding="40px">
            <div style={{ marginBottom: "20px" }}>
              <h2 style={{ margin: 0, fontSize: theme.typography.fontSize.xl }}>
                Reset Password
              </h2>
              <p
                style={{ marginTop: "6px", color: theme.colors.textSecondary }}
              >
                Create a new password for your account
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
                  label="New Password *"
                  type="password"
                  isPassword
                  value={form.password}
                  error={errors.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  fullWidth
                />

                <Input
                  label="Confirm Password *"
                  type="password"
                  isPassword
                  value={form.confirmPassword}
                  error={errors.confirmPassword}
                  onChange={(e) =>
                    handleChange("confirmPassword", e.target.value)
                  }
                  fullWidth
                />

                <Button type="submit" fullWidth size="lg" loading={loading}>
                  Reset Password
                </Button>
              </div>
            </form>

            <p
              style={{
                marginTop: "20px",
                textAlign: "center",
                fontSize: theme.typography.fontSize.sm,
                color: theme.colors.textSecondary,
              }}
            >
              Return To{" "}
              <Link
                to="/admin/signin"
                style={{
                  color: theme.colors.textPrimary,
                  fontWeight: 600,
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

export default AdminResetPassword;
