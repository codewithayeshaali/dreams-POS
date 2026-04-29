import { ReactNode } from "react";
import theme from "../../theme";

interface CardProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  padding?: string;
}

function Card({ children, title, subtitle, padding = "40px" }: CardProps) {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: theme.colors.surface,
        border: `1px solid ${theme.colors.border}`,
        borderRadius: theme.radius.xl,
        boxShadow: theme.shadows.sm,
        padding,
        boxSizing: "border-box",
      }}
    >
      {(title || subtitle) && (
        <div style={{ marginBottom: "20px" }}>
          {title && (
            <h3
              style={{
                margin: 0,
                color: theme.colors.secondary,
                fontFamily: theme.typography.fontFamily.primary,
                fontSize: theme.typography.fontSize.xl,
                fontWeight: theme.typography.fontWeight.bold,
              }}
            >
              {title}
            </h3>
          )}
          {subtitle && (
            <p
              style={{
                margin: "8px 0 0",
                color: theme.colors.textSecondary,
                fontFamily: theme.typography.fontFamily.primary,
                fontSize: theme.typography.fontSize.sm,
              }}
            >
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </div>
  );
}

export default Card;