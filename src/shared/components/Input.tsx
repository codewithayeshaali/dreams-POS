import { InputHTMLAttributes, ReactNode, useState } from "react";
import theme from "../../theme";
import { LuEye, LuEyeOff } from "react-icons/lu";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  rightIcon?: ReactNode;
  isPassword?: boolean;
}

function Input({
  label,
  error,
  fullWidth = false,
  rightIcon,
  isPassword = false,
  type,
  style,
  ...props
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordField = isPassword || type === "password";

  return (
    <div style={{ width: fullWidth ? "100%" : "420px" }}>
      {label && (
        <label
          style={{
            display: "block",
            marginBottom: "6px",
            fontFamily: theme.typography.fontFamily.primary,
            fontWeight: 500,
            fontSize: "14px",
            lineHeight: "21px",
            color: theme.colors.textPrimary,
          }}
        >
          {label}
        </label>
      )}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "38px",
          padding: "6px 12px",
          gap: "8px",
          borderRadius: "5px",
          border: `1px solid ${
            error ? theme.colors.error : theme.colors.border
          }`,
          backgroundColor: theme.colors.white,
          boxSizing: "border-box",
          width: "100%",
        }}
      >
        <input
          type={
            isPasswordField
              ? showPassword
                ? "text"
                : "password"
              : type
          }
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            fontFamily: theme.typography.fontFamily.primary,
            fontWeight: 500,
            fontSize: "14px",
            lineHeight: "21px",
            color: theme.colors.textPrimary,
            background: "transparent",
          }}
          {...props}
        />
        {isPasswordField ? (
          <div
            onClick={() => setShowPassword(!showPassword)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: theme.colors.textSecondary,
            }}
          >
            {showPassword ? <LuEye size={16} /> : <LuEyeOff size={16} />}
          </div>
        ) : (
          rightIcon && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: theme.colors.textSecondary,
              }}
            >
              {rightIcon}
            </div>
          )
        )}
      </div>
      {error && (
        <span
          style={{
            color: theme.colors.error,
            fontSize: "12px",
            marginTop: "4px",
            display: "block",
            fontFamily: theme.typography.fontFamily.primary,
          }}
        >
          {error}
        </span>
      )}
    </div>
  );
}

export default Input;