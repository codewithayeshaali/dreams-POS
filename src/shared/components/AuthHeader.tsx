import theme from "../../theme";
import logoImage from "../../assets/logo.png";

interface AuthHeaderProps {
  title: string;
  subtitle: string;
  align?: "left" | "center";
  logoSrc?: string;
}


function AuthHeader({
  title,
  subtitle,
  align = "left",
  logoSrc = logoImage,
}: AuthHeaderProps) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: align === "center" ? "center" : "flex-start",
        textAlign: align,
      }}
    >
      <img
        src={logoImage}
        alt="DreamsPOS"
        style={{
          width: "110px",
          height: "auto",
          marginBottom: "48px",
        }}
      />

      <div style={{ width: "100%" }}>
        <h2
          style={{
            margin: 0,
            fontFamily: theme.typography.fontFamily.primary,
            fontSize: theme.typography.fontSize.xxl,
            fontWeight: theme.typography.fontWeight.bold,
            lineHeight: "36px",
            color: theme.colors.textPrimary,
          }}
        >
          {title}
        </h2>

        <p
          style={{
            margin: "4px 0 0",
            fontFamily: theme.typography.fontFamily.primary,
            fontSize: theme.typography.fontSize.sm,
            fontWeight: theme.typography.fontWeight.regular,
            lineHeight: "24px",
            color: theme.colors.textSecondary,
          }}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export default AuthHeader;



