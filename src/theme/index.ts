import colors from "./colors";
import typography from "./typography";
import spacing from "./spacing";

const theme = {
  colors,
  typography,
  spacing,

  radius: {
    sm: "4px",
    md: "5px",
    lg: "8px",
    xl: "12px",
    round: "999px",
  },

  shadows: {
    sm: "0 2px 8px rgba(0, 0, 0, 0.05)",
    md: "0 4px 16px rgba(0, 0, 0, 0.08)",
    lg: "0 8px 24px rgba(0, 0, 0, 0.12)",
  },

  button: {
    paddingY: "8px",
    paddingX: "16px",
    gap: "8px",
    radius: "5px",
  },
};

export default theme;