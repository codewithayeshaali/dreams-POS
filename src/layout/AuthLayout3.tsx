import type { ReactNode } from "react";
import theme from "../theme";

interface AuthLayout3Props {
  header?: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
  imageSrc?: string;
}

export function AuthLayout3({
  header,
  footer,
  children,
  imageSrc,
}: AuthLayout3Props) {
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        html, body, #root {
          margin: 0 !important;
          padding: 0 !important;
          height: 100%;
          width: 100%;
          overflow: hidden;
        }
        .auth3-left {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .auth3-left::-webkit-scrollbar { display: none; }

        @media (max-width: 640px) {
          .auth3-left {
            width: 100% !important;
            padding: 24px 20px !important;
          }
        }

        @media (min-width: 641px) and (max-width: 900px) {
          .auth3-left {
            width: 100% !important;
            padding: 32px 40px !important;
          }
        }

        @media (min-width: 901px) {
          .auth3-left {
            width: 50% !important;
          }
        }
      `}</style>

      <main
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: "hidden",
          fontFamily: theme.typography.fontFamily.primary,
        }}
      >
        {imageSrc && (
          <img
            src={imageSrc}
            alt=""
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
               padding: "24px 24px",
              display: "block",
              zIndex: 0,
            }}
          />
        )}

        <div
          className="auth3-left"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "50%",
            height: "100%",
            zIndex: 1,
            backgroundColor: "#ffffff",
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
            padding: "48px",
          }}
        >
          <div style={{ flexShrink: 0, marginBottom: "30px" }}>
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
            <div style={{ width: "100%", maxWidth: "400px" }}>
              {children}
            </div>
          </div>

          <div style={{ flexShrink: 0, textAlign: "center",marginTop:"30px" }}>
            {footer}
          </div>
        </div>
      </main>
    </>
  );
}




