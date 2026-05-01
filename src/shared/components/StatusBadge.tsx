import theme from "../../theme";

interface StatusBadgeProps {
  status: "Active" | "Inactive" | "Expired" | "Low" | string;
}

const STATUS_STYLES: Record<string, { bg: string; color: string }> = {
  Active:   { bg: "#dcfce7", color: "#16a34a" },
  Inactive: { bg: "#fef2f2", color: "#ef4444" },
  Expired:  { bg: "#fef2f2", color: "#ef4444" },
  Low:      { bg: "#fef9c3", color: "#ca8a04" },
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const style = STATUS_STYLES[status] || { bg: "#f3f4f6", color: "#6b7280" };
  return (
    <span style={{
      display: "inline-flex", alignItems: "center",
      padding: "3px 10px", borderRadius: "20px",
      fontSize: theme.typography.fontSize.xs,
      fontWeight: theme.typography.fontWeight.semibold,
      fontFamily: theme.typography.fontFamily.primary,
      backgroundColor: style.bg, color: style.color,
    }}>
      {status}
    </span>
  );
}

