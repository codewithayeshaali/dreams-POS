import type { ReactNode } from "react";
import theme from "../theme";

interface AuthLayoutProps {
  header?: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
  illustrationSrc?: string;
}

export function AuthLayout({
  header,
  footer,
  children,
  illustrationSrc,
}: AuthLayoutProps) {
  return (
    <>
      <style>{`
       .auth-layout-left {
  scrollbar-width: none;
  -ms-overflow-style: none; 
}

.auth-layout-left::-webkit-scrollbar {
  display: none; 
}
        @media (max-width: 640px) {
          .auth-layout-right {
            display: none !important;
          }
          .auth-layout-left {
            max-width: 100% !important;
            padding: 24px 20px !important;
          }
        }
        @media (min-width: 641px) and (max-width: 900px) {
          .auth-layout-right {
            display: none !important;
          }
          .auth-layout-left {
            max-width: 100% !important;
            padding: 32px 48px !important;
          }
        }
        @media (min-width: 901px) {
          .auth-layout-right {
            display: flex !important;
          }
          .auth-layout-left {
            max-width: 55% !important;
          }
        }
      `}</style>

      <main
        style={{
          display: "flex",
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
          backgroundColor: "#ffffff",
          fontFamily: theme.typography.fontFamily.primary,
          margin: 0,
          padding: 0,
          position: "fixed",
          top: 0,
          left: 0,
          
        }}
      >
        <div
          className="auth-layout-left"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            overflowY: "auto",
            backgroundColor: "#ffffff",
            padding: "48px",
            boxSizing: "border-box",
          }}
        >
        
          <div style={{ flexShrink: 0, marginBottom:"30px"}}>
            {header}
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "100%", maxWidth: "440px" }}>
              {children}
            </div>
          </div>

          <div style={{ flexShrink: 0, textAlign: "center", marginTop:"30px"}}>
            {footer}
          </div>
        </div>

        <div
          className="auth-layout-right"
          style={{
            width: "45%",
            height: "100vh",
            backgroundColor: "#F9E4C8",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            overflow: "hidden",
            margin: 0,
            padding: 0,
          }}
        >
          {illustrationSrc && (
            <img
              src={illustrationSrc}
              alt=""
              aria-hidden="true"
              style={{
                width: "75%",
                maxHeight:"665px",
                maxWidth: "570px",
                objectFit: "contain",
                display: "block",
              }}
            />
          )}
        </div>
      </main>
    </>
  );
}