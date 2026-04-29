import theme from "../../theme";

interface AuthFooterProps {
  text?: string;
}

export function AuthFooter({ text }: AuthFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: "14px",
          fontFamily: theme.typography.fontFamily.primary,
          fontWeight: theme.typography.fontWeight.regular,
          color: theme.colors.textSecondary,
          letterSpacing: "0.2px",
          textAlign: "center",
        }}
      >
        {text ?? `Copyrights © ${year} - DreamsPOS`}
      </p>
    </footer>
  );
}

export default AuthFooter;


