import { ButtonHTMLAttributes, ReactNode } from "react";
import theme from "../../theme";

type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  fullWidth?: boolean;
  loading?: boolean;
  size?: ButtonSize;
  className?: string;
}

function Button({
  children,
  fullWidth = false,
  disabled = false,
  loading = false,
  type = "button",
  size = "md",
  style,
  className = "",
  ...props
}: ButtonProps) {
  const sizes = {
    sm: { padding: "6px 12px", fontSize: "12px", minHeight: "32px" },
    md: { padding: "8px 16px", fontSize: "14px", minHeight: "37px" },
    lg: { padding: "10px 20px", fontSize: "16px", minHeight: "44px" },
  };

  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={className}
      style={{
        width: fullWidth ? "100%" : "auto",
        ...sizes[size],
        border: `1px solid ${theme.colors.primary}`,
        borderRadius: theme.radius.md,
        backgroundColor: theme.colors.primary,
        color: theme.colors.white,
        fontFamily: theme.typography.fontFamily.primary,
        fontWeight: theme.typography.fontWeight.semibold,
        lineHeight: String(theme.typography.lineHeight.sm),
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: disabled || loading ? "not-allowed" : "pointer",
        opacity: disabled || loading ? 0.6 : 1,
        transition: "all 0.2s ease",
        whiteSpace: "nowrap",
        outline: "none",
        boxSizing: "border-box",
        ...style,
      }}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}

export default Button;






