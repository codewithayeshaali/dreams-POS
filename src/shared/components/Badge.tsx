import { ReactNode } from "react";
import theme from "../../theme";

interface BadgeProps {
  text: ReactNode;
  variant?: "success" | "error" | "warning" | "info";
}

const variantStyles = {
  success: {
    backgroundColor: "#EAFBF1",
    color: theme.colors.success,
  },
  error: {
    backgroundColor: "#FDECEC",
    color: theme.colors.error,
  },
  warning: {
    backgroundColor: "#FFF4E5",
    color: theme.colors.warning,
  },
  info: {
    backgroundColor: "#EAF7FD",
    color: theme.colors.info,
  },
};

function Badge({ text, variant = "info" }: BadgeProps) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "4px 10px",
        borderRadius: theme.radius.round,
        fontFamily: theme.typography.fontFamily.primary,
        fontSize: theme.typography.fontSize.xs,
        fontWeight: theme.typography.fontWeight.semibold,
        lineHeight: 1.2,
        ...variantStyles[variant],
      }}
    >
      {text}
    </span>
  );
}

export default Badge;


