import type React from "react";
import Button, { type ButtonProps } from "./Button";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";

export type SocialProvider = "google" | "facebook" | "apple";

export interface SocialButtonProps extends Omit<ButtonProps, "variant"> {
  provider: SocialProvider;
  mode?: "icon" | "label";
}

const providerLabel: Record<SocialProvider, string> = {
  google: "Sign in with Google",
  facebook: "Sign in with Facebook",
  apple: "Sign in with Apple",
};

const providerStyles: Record<SocialProvider, React.CSSProperties> = {
  facebook: { backgroundColor: "#155EEF", borderColor: "#155EEF", color: "#ffffff" },
  google:   { backgroundColor: "#ffffff", borderColor: "#E6EAED", color: "#374151" },
  apple:    { backgroundColor: "#1B2850", borderColor: "#1B2850", color: "#ffffff" },
};

export function SocialButton({
  provider,
  mode = "icon",
  children,
  style,
  ...props
}: SocialButtonProps) {
  const iconOnly = mode === "icon";

  return (
    <Button
      {...props}
      aria-label={providerLabel[provider]}
      fullWidth
      style={{
        height: iconOnly ? "54px" : "48px",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        flex: 1,
        transition: "opacity 0.2s ease",
        ...providerStyles[provider],
        ...style,
      }}
    >
      <span style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        {provider === "google"   && <FcGoogle size={20} />}
        {provider === "facebook" && <FaFacebook size={20} />}
        {provider === "apple"    && <FaApple size={20} />}
      </span>
      {!iconOnly && (
        <span style={{ fontSize: "14px", fontWeight: 500 }}>
          {children ?? providerLabel[provider]}
        </span>
      )}
    </Button>
  );
}