import theme from "../../theme";

interface RowActionsProps {
  onView?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  showView?: boolean;
  showEdit?: boolean;
  showDelete?: boolean;
}

export function RowActions({
  onView, onEdit, onDelete,
  showView = true, showEdit = true, showDelete = true,
}: RowActionsProps) {
  const btn = (
    onClick: (() => void) | undefined,
    bg: string, color: string,
    icon: React.ReactNode, title: string
  ) => (
    <button
      onClick={onClick}
      title={title}
      style={{
        width: "28px", height: "28px", border: "none",
        borderRadius: "6px", backgroundColor: bg, color,
        cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
        transition: "opacity 0.15s ease",
      }}
      onMouseEnter={e => (e.currentTarget.style.opacity = "0.75")}
      onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
    >
      {icon}
    </button>
  );

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
      {showView && btn(onView, "#f0f9ff", "#0ea5e9",
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>, "View"
      )}
      {showEdit && btn(onEdit, "#fefce8", "#ca8a04",
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
        </svg>, "Edit"
      )}
      {showDelete && btn(onDelete, "#fef2f2", "#ef4444",
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="3 6 5 6 21 6"/>
          <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
          <path d="M10 11v6M14 11v6M9 6V4h6v2"/>
        </svg>, "Delete"
      )}
    </div>
  );
}