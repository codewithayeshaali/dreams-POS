import theme from "../../theme";

interface TablePaginationProps {
  currentPage: number;
  totalPages: number;
  rowsPerPage: number;
  rowsPerPageOptions?: number[];
  onPageChange: (page: number) => void;
  onRowsPerPageChange: (rows: number) => void;
}

export function TablePagination({
  currentPage, totalPages, rowsPerPage,
  rowsPerPageOptions = [10, 25, 50, 100],
  onPageChange, onRowsPerPageChange,
}: TablePaginationProps) {
  const getPages = () => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (currentPage <= 4) return [1, 2, 3, 4, 5, "...", totalPages];
    if (currentPage >= totalPages - 3) return [1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
  };

  const navBtn = (onClick: () => void, disabled: boolean, icon: React.ReactNode) => (
    <button onClick={onClick} disabled={disabled} style={{
      width: "30px", height: "30px", border: `1px solid ${theme.colors.border}`,
      borderRadius: "6px", backgroundColor: "#fff", cursor: disabled ? "not-allowed" : "pointer",
      display: "flex", alignItems: "center", justifyContent: "center",
      opacity: disabled ? 0.4 : 1, transition: "opacity 0.15s",
    }}>
      {icon}
    </button>
  );

  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "12px 16px", borderTop: `1px solid ${theme.colors.border}`,
      flexWrap: "wrap", gap: "12px",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span style={{ fontSize: theme.typography.fontSize.sm, color: theme.colors.textSecondary }}>Row Per Page</span>
        <select
          value={rowsPerPage}
          onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
          style={{
            padding: "4px 8px", border: `1px solid ${theme.colors.border}`,
            borderRadius: "6px", fontSize: theme.typography.fontSize.sm,
            color: theme.colors.textPrimary, outline: "none", cursor: "pointer",
            fontFamily: theme.typography.fontFamily.primary,
          }}
        >
          {rowsPerPageOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
        <span style={{ fontSize: theme.typography.fontSize.sm, color: theme.colors.textSecondary }}>Entries</span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        {navBtn(() => onPageChange(currentPage - 1), currentPage === 1,
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={theme.colors.textSecondary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        )}

        {getPages().map((p, i) =>
          p === "..." ? (
            <span key={`dot-${i}`} style={{ padding: "0 4px", color: theme.colors.textSecondary, fontSize: theme.typography.fontSize.sm }}>...</span>
          ) : (
            <button
              key={p}
              onClick={() => onPageChange(Number(p))}
              style={{
                width: "30px", height: "30px",
                border: currentPage === p ? "none" : `1px solid ${theme.colors.border}`,
                borderRadius: "6px",
                backgroundColor: currentPage === p ? theme.colors.primary : "#fff",
                color: currentPage === p ? "#fff" : theme.colors.textPrimary,
                cursor: "pointer", fontSize: theme.typography.fontSize.sm,
                fontWeight: currentPage === p ? theme.typography.fontWeight.bold : "normal",
                fontFamily: theme.typography.fontFamily.primary,
              }}
            >
              {p}
            </button>
          )
        )}

        {navBtn(() => onPageChange(currentPage + 1), currentPage === totalPages,
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={theme.colors.textSecondary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        )}
      </div>
    </div>
  );
}