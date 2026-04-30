import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuMail, LuUser} from "react-icons/lu";

import { signup } from "../../services/authService";

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

function UserSignUp() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [termPrivacy, setTermPrivacy] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.includes("@")) newErrors.email = "Enter a valid email";
    if (form.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (form.confirm !== form.password) newErrors.confirm = "Passwords do not match";
    if (!termPrivacy) newErrors.terms = "You must accept Terms & Privacy";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      try {
        signup({ name: form.name, email: form.email, password: form.password });
        navigate("/user/signin");
      } catch (err: any) {
        alert(err.message);
      } finally {
        setLoading(false);
      }
    }, 1000);
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
            Register
          </h2>
          <p
            style={{
              margin: "4px 0 0",
              fontSize: theme.typography.fontSize.base,
              color: theme.colors.textSecondary,
              fontFamily: theme.typography.fontFamily.primary,
            }}
          >
            Create New Dreamspos Account
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <Input
              label="Name *"
              type="text"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              fullWidth
              rightIcon={<LuUser size={16} />}
              error={errors.name}
            />
            <Input
              label="Email Address *"
              type="email"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              fullWidth
              rightIcon={<LuMail size={16} />}
              error={errors.email}
            />
            <Input
              label="Password *"
              isPassword
              value={form.password}
              onChange={(e) => handleChange("password", e.target.value)}
              fullWidth
              error={errors.password}
            />

            <Input
              label="Confirm Password *"
              isPassword
              value={form.confirm}
              onChange={(e) => handleChange("confirm", e.target.value)}
              fullWidth
              error={errors.confirm}
            />
            <div>
              <Checkbox
                label=""
                checked={termPrivacy}
                onChange={(e) => setTermPrivacy(e.target.checked)}
                customLabel={
                  <span
                    style={{
                      fontSize: theme.typography.fontSize.sm,
                      color: theme.colors.textSecondary,
                      fontFamily: theme.typography.fontFamily.primary,
                    }}
                  >
                    I agree to the{" "}
                    <Link
                      to="/terms"
                      style={{
                        color: theme.colors.primary,
                        fontWeight: theme.typography.fontWeight.semibold,
                        textDecoration: "none",
                      }}
                    >
                      Terms & Privacy
                    </Link>
                  </span>
                }
              />
              {errors.terms && (
                <p
                  style={{
                    margin: "4px 0 0",
                    fontSize: theme.typography.fontSize.xs,
                    color: theme.colors.error,
                    fontFamily: theme.typography.fontFamily.primary,
                  }}
                >
                  {errors.terms}
                </p>
              )}
            </div>

            <Button type="submit" fullWidth size="lg" loading={loading}>
              Sign Up
            </Button>

          </div>
        </form>
        <p
          style={{
            marginTop: "16px",
            fontSize: theme.typography.fontSize.sm,
            color: theme.colors.textSecondary,
            fontFamily: theme.typography.fontFamily.primary,
          }}
        >
          New on our platform?{" "}
          <Link
            to="/user/signin"
            style={{
              fontWeight: theme.typography.fontWeight.semibold,
              textDecoration: "none",
              color: theme.colors.textPrimary,
            }}
          >
            Sign In Instead
          </Link>
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            margin: "16px 0",
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

export default UserSignUp;