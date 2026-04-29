import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuMail } from "react-icons/lu";
import { RxPerson } from "react-icons/rx";

import { signup } from "../../services/authService";

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

function Register() {
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

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (form.confirm !== form.password) {
      newErrors.confirm = "Passwords do not match";
    }

    if (!termPrivacy) {
      newErrors.terms = "You must accept Terms & Privacy";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {
      try {
        signup({
          name: form.name,
          email: form.email,
          password: form.password,
        });

        console.log("User registered:", form);

        navigate("/signin"); // redirect after success
      } catch (err: any) {
        alert(err.message);
      } finally {
        setLoading(false);
      }
    }, 1000);
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
                Register
              </h2>

              <p style={{ marginTop: "6px", color: theme.colors.textSecondary }}>
                Create New Dreamspos Account
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <Input
                  label="Name *"
                  value={form.name}
                  error={errors.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  rightIcon={<RxPerson size={16} />}
                  fullWidth
                />

                <Input
                  label="Email *"
                  type="email"
                  value={form.email}
                  error={errors.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  rightIcon={<LuMail size={16} />}
                  fullWidth
                />

                <Input
                  label="Password *"
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
                  value={form.confirm}
                  error={errors.confirm}
                  onChange={(e) => handleChange("confirm", e.target.value)}
                  fullWidth
                />

                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <Checkbox
                    checked={termPrivacy}
                    onChange={(e) => setTermPrivacy(e.target.checked)}
                    label={null}
                  />

                  <span>
                    I agree to the{" "}
                    <Link
                      to="/terms"
                      style={{
                        fontWeight: 600,
                        textDecoration: "none",
                        color: theme.colors.primary,
                      }}
                    >
                      Terms & Privacy
                    </Link>
                  </span>
                </div>

          
                <Button type="submit" fullWidth size="lg" loading={loading}>
                  Sign up
                </Button>
              </div>
            </form>

            <p
              style={{
                marginTop: "20px",
                fontSize: theme.typography.fontSize.sm,
                color: theme.colors.textSecondary,
              }}
            >
              Already have an account?{" "}
              <Link
                to="/signin"
                style={{
                  color: theme.colors.textPrimary,
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Sign In
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
              <div style={{ width: "21px", height: "1px", background: "#E6EAED" }} />
              <span style={{ fontSize: "14px", color: theme.colors.textSecondary }}>
                OR
              </span>
              <div style={{ width: "21px", height: "1px", background: "#E6EAED" }} />
            </div>

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

export default Register;
