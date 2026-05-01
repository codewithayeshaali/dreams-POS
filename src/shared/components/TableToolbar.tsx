import theme from "../../theme";

interface TableToolbarProps {
  addLabel?: string;
  onAdd?: () => void;
  onExportPDF?: () => void;
  onExportExcel?: () => void;
  onRefresh?: () => void;
  onCollapse?: () => void;
  showAdd?: boolean;
}

export function TableToolbar({
  addLabel = "Add New",
  onAdd,
  onExportPDF,
  onExportExcel,
  onRefresh,
  onCollapse,
  showAdd = true,
}: TableToolbarProps) {
  const iconBtn = (
    onClick: (() => void) | undefined,
    bg: string,
    color: string,
    border: boolean,
    icon: React.ReactNode,
    title: string
  ) => (
    <button
      onClick={onClick}
      title={title}
      style={{
        width: "32px", height: "32px", border: border ? `1px solid ${theme.colors.border}` : "none",
        borderRadius: "6px", backgroundColor: bg, color, cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
        transition: "opacity 0.15s ease",
      }}
      onMouseEnter={e => (e.currentTarget.style.opacity = "0.8")}
      onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
    >
      {icon}
    </button>
  );

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      {iconBtn(onExportPDF, "#ef4444", "#fff", false,
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/>
        </svg>, "Export PDF"
      )}

      {iconBtn(onExportExcel, "#22c55e", "#fff", false,
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18"/>
        </svg>, "Export Excel"
      )}

      {iconBtn(onRefresh, "#fff", theme.colors.textSecondary, true,
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 4 23 10 17 10"/>
          <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
        </svg>, "Refresh"
      )}

      {iconBtn(onCollapse, "#fff", theme.colors.textSecondary, true,
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"/>
        </svg>, "Collapse"
      )}

      {showAdd && (
        <button
          onClick={onAdd}
          style={{
            display: "flex", alignItems: "center", gap: "6px",
            padding: "8px 16px", backgroundColor: theme.colors.primary,
            color: "#fff", border: "none", borderRadius: "8px",
            fontSize: theme.typography.fontSize.sm,
            fontWeight: theme.typography.fontWeight.semibold,
            fontFamily: theme.typography.fontFamily.primary,
            cursor: "pointer", whiteSpace: "nowrap",
            transition: "opacity 0.15s ease",
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          {addLabel}
        </button>
      )}
    </div>
  );
}