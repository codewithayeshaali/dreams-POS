import type { ReactNode } from "react";

export interface AuthHeaderProps {
  logo?: ReactNode;
}

export function AuthHeader({ logo }: AuthHeaderProps) {
  if (!logo) return null;

  return <div className="flex w-full justify-center">{logo}</div>;
}



