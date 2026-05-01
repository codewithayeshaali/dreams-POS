import { ReactNode } from "react";
import theme from "../../theme";

interface TableCardProps {
  children: ReactNode;
}

export function TableCard({ children }: TableCardProps) {
  return (
    <div style={{
      backgroundColor: "#fff",
      borderRadius: "12px",
      border: `1px solid ${theme.colors.border}`,
      overflow: "hidden",
      marginTop: "12px",
    }}>
      {children}
    </div>
  );
}