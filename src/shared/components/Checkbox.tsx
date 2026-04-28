import { InputHTMLAttributes } from "react";
import theme from "../../theme";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

function Checkbox({ label, style, ...props }: CheckboxProps) {
  return (
    <label
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        cursor: "pointer",
        fontFamily: theme.typography.fontFamily.primary,
        fontSize: theme.typography.fontSize.sm,
        fontWeight: theme.typography.fontWeight.regular,
        color: theme.colors.checkboxtext,
      }}
    >
      <input
        type="checkbox"
        style={{
          width: "16px",
          height: "16px",
          margin: 0,
          accentColor: theme.colors.primary,
          cursor: "pointer",
          ...style,
        }}
        {...props}
      />
      {label && <span>{label}</span>}
    </label>
  );
}

export default Checkbox;
