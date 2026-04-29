
import type { ReactNode } from "react";
import bgImage from "../assets/image/bg.png";

interface AuthLayoutProps {
  header?: ReactNode; // fixed: was "logo" in interface but "header" in destructure
  footer?: ReactNode;
  children?: ReactNode;
}

export function AuthLayout({ header, footer, children }: AuthLayoutProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white">
      <div
        className="absolute bottom-0 left-0 z-0 h-1/2 w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="relative z-10 flex min-h-screen flex-col">
        <div className="flex justify-center pt-6">{header}</div>
        <div className="flex flex-1 items-center justify-center px-4 py-10">
          {children}
        </div>
        <div className="flex justify-center pb-6">{footer}</div>
      </div>
    </main>
  );
}