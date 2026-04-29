import Button, {type ButtonProps } from "./Button";
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

export function SocialButton({
  provider,
  mode = "icon",
  children,
  className = "",
  ...props
}: SocialButtonProps) {
  const iconOnly = mode === "icon";

  const providerStyles = {
    google: "bg-white hover:bg-gray-50 text-gray-800 border",
    facebook: "bg-[#1877F2] hover:bg-[#166FE5] text-white border-none",
    apple: "bg-black hover:bg-neutral-800 text-white border-none",
  };

  return (
    <Button
      {...props}
      aria-label={providerLabel[provider]}
      className={`
        flex-1 flex items-center justify-center gap-2
        rounded-lg transition-all duration-200
        ${iconOnly ? "h-[54px]" : "w-full h-[48px] px-4"}
        ${providerStyles[provider]}
        active:scale-[0.97]
        ${className}
      `}
    >
      <span className="flex items-center justify-center">
        {provider === "google" && (
          <FcGoogle className="w-[20px] h-[20px]" />
        )}
        {provider === "facebook" && (
          <FaFacebook className="w-[20px] h-[20px]" />
        )}
        {provider === "apple" && (
          <FaApple className="w-[20px] h-[20px]" />
        )}
      </span>

      {!iconOnly && (
        <span className="text-sm font-medium">
          {children ?? providerLabel[provider]}
        </span>
      )}
    </Button>
  );
}