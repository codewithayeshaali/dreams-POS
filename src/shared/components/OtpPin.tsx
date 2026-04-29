import { ChangeEvent, KeyboardEvent, useRef, useState } from "react";
import theme from "../../theme";

interface OtpPinProps {
  length?: number;
  value: string[];
  onChange: (value: string[]) => void;
}

function OtpPin({ length = 4, value, onChange }: OtpPinProps) {
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const nextValue = e.target.value.replace(/\D/g, "").slice(-1);
    const updated = [...value];
    updated[index] = nextValue;
    onChange(updated);

    if (nextValue && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !value[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const getBorderColor = (index: number) => {
    if (focusedIndex === index) return theme.colors.primary;   
    if (hoveredIndex === index) return theme.colors.primary; 
    return theme.colors.border;                                
  };

  const getBoxShadow = (index: number) => {
    if (focusedIndex === index) return `0 0 0 3px ${theme.colors.primary}22`; // soft glow
    return "none";
  };

  return (
    <div style={{ display: "flex", gap: theme.spacing.md, width: "100%" }}>
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          ref={(el) => { inputsRef.current[index] = el; }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={value[index] || ""}
          onChange={(e) => handleChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onFocus={() => setFocusedIndex(index)}
          onBlur={() => setFocusedIndex(null)}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          style={{
            flex: 1,
            minWidth: 0,
            height: "70px",
            border: `1.5px solid ${getBorderColor(index)}`,
            borderRadius: theme.radius.lg,
            backgroundColor: theme.colors.white,
            textAlign: "center",
            outline: "none",
            color: theme.colors.secondary,
            fontFamily: theme.typography.fontFamily.primary,
            fontSize: theme.typography.fontSize.lg,
            fontWeight: theme.typography.fontWeight.bold,
            boxShadow: getBoxShadow(index),
            cursor: "text",
            transition: "border-color 0.2s ease, box-shadow 0.2s ease",
          }}
        />
      ))}
    </div>
  );
}

export default OtpPin;
