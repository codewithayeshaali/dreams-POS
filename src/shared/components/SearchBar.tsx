import theme from "../../theme";

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  width?: string;
}

export function SearchBar({ value, onChange, placeholder = "Search", width = "280px" }: SearchBarProps) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: "8px",
      backgroundColor: "#fff", border: `1px solid ${theme.colors.border}`,
      borderRadius: "8px", padding: "8px 12px", width,
    }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={theme.colors.textSecondary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          border: "none", outline: "none", width: "100%", backgroundColor: "transparent",
          fontSize: theme.typography.fontSize.sm,
          color: theme.colors.textPrimary,
          fontFamily: theme.typography.fontFamily.primary,
        }}
      />
      {value && (
        <button onClick={() => onChange("")} style={{ border: "none", background: "none", cursor: "pointer", padding: 0, display: "flex" }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={theme.colors.textSecondary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      )}
    </div>
  );
}