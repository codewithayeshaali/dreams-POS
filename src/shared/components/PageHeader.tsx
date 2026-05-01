import { ReactNode } from "react";
import theme from "../../theme";

interface PageHeaderProps {
  title: string;
  breadcrumb?: string;
  actions?: ReactNode;        
  filters?: ReactNode;       
}

export function PageHeader({ title, breadcrumb = "Dashboard", actions, filters }: PageHeaderProps) {
  return (
    <div style={{ padding: "16px 24px 0", backgroundColor: "#f5f6fa" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
        <div>
          <h1 style={{
            margin: 0,
            fontSize: theme.typography.fontSize.lg,
            fontWeight: theme.typography.fontWeight.bold,
            color: theme.colors.textPrimary,
            fontFamily: theme.typography.fontFamily.primary,
          }}>
            {title}
          </h1>
          <p style={{
            margin: "2px 0 0",
            fontSize: theme.typography.fontSize.xs,
            color: theme.colors.textSecondary,
            fontFamily: theme.typography.fontFamily.primary,
          }}>
            {breadcrumb} &rsaquo; {title}
          </p>
        </div>
        {actions && <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>{actions}</div>}
      </div>

      {filters && (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", paddingBottom: "12px" }}>
          {filters}
        </div>
      )}
    </div>
  );
}