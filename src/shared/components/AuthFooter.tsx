import theme from "../../theme";

interface AuthFooterProps {
  text?: string;
}

function AuthFooter({
  text = "Copyright © 2025 - DreamsPOS",
}: AuthFooterProps) {
  return (
    <p
      style={{
        margin: 0,
        textAlign: "center",
        fontFamily: theme.typography.fontFamily.primary,
        fontSize: theme.typography.fontSize.xs,
        fontWeight: theme.typography.fontWeight.regular,
        lineHeight: "18px",
        color: theme.colors.textSecondary,
        width: "100%",
      }}
    >
      {text}
    </p>
  );
}

export default AuthFooter;
