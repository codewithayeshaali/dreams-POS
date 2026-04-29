import type { ReactNode } from "react";

export interface AuthHeaderProps {
  logo?: ReactNode;
}

export function AuthHeader({ logo }: AuthHeaderProps) {
  if (!logo) return null;
  return (
    <div style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center" }}>
      {logo}
    </div>
  );
}
