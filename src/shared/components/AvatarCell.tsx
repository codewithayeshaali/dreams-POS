import theme from "../../theme";

interface AvatarCellProps {
  name: string;
  src?: string;
  subtitle?: string;
}

export function AvatarCell({ name, src, subtitle }: AvatarCellProps) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      {src ? (
        <img src={src} alt={name} style={{ width: "32px", height: "32px", borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
      ) : (
        <div style={{
          width: "32px", height: "32px", borderRadius: "50%",
          backgroundColor: "#e5e7eb", flexShrink: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "12px", fontWeight: 600, color: "#6b7280",
        }}>
          {name.charAt(0).toUpperCase()}
        </div>
      )}
      <div>
        <div style={{ fontSize: theme.typography.fontSize.sm, fontWeight: theme.typography.fontWeight.semibold, color: theme.colors.textPrimary }}>
          {name}
        </div>
        {subtitle && (
          <div style={{ fontSize: theme.typography.fontSize.xs, color: theme.colors.textSecondary }}>{subtitle}</div>
        )}
      </div>
    </div>
  );
}