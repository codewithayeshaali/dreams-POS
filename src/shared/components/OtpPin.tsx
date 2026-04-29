import { ChangeEvent, KeyboardEvent, useRef } from "react";
import theme from "../../theme";

interface OtpPinProps {
  length?: number;
  value: string[];
  onChange: (value: string[]) => void;
}

function OtpPin({ length = 4, value, onChange }: OtpPinProps) {
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const nextValue = e.target.value.replace(/\D/g, "").slice(-1);
    const updated = [...value];
    updated[index] = nextValue;
    onChange(updated);

    if (nextValue && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace" && !value[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div style={{ display: "flex", gap: theme.spacing.md }}>
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          ref={(el) => {
            inputsRef.current[index] = el;
          }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={value[index] || ""}
          onChange={(e) => handleChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          style={{
            width: "56px",
            height: "56px",
            border: `1px solid ${theme.colors.border}`,
            borderRadius: theme.radius.lg,
            backgroundColor: theme.colors.white,
            textAlign: "center",
            outline: "none",
            color: theme.colors.secondary,
            fontFamily: theme.typography.fontFamily.primary,
            fontSize: theme.typography.fontSize.lg,
            fontWeight: theme.typography.fontWeight.bold,
          }}
        />
      ))}
    </div>
  );
}

export default OtpPin;
