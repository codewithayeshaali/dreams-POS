import { ReactNode } from "react";
import theme from "../../theme";

export interface Column<T> {
  key: string;
  label: string;
  width?: string;
  align?: "left" | "center" | "right";
  render?: (row: T, index: number) => ReactNode;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  selectable?: boolean;
  selectedIds?: Set<number>;
  onSelectAll?: (checked: boolean) => void;
  onSelectRow?: (index: number, checked: boolean) => void;
  actions?: (row: T, index: number) => ReactNode;
  emptyText?: string;
  loading?: boolean;
}

export function DataTable<T>({
  columns, data, selectable = true,
  selectedIds, onSelectAll, onSelectRow,
  actions, emptyText = "No data found", loading = false,
}: DataTableProps<T>) {
  return (
    <div style={{ overflowX: "auto", width: "100%" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "600px" }}>
        <thead>
          <tr style={{ backgroundColor: "#f9fafb", borderBottom: `1px solid ${theme.colors.border}` }}>
            {selectable && (
              <th style={{ width: "40px", padding: "12px 16px" }}>
                <input
                  type="checkbox"
                  onChange={(e) => onSelectAll?.(e.target.checked)}
                  style={{ cursor: "pointer" }}
                />
              </th>
            )}
            {columns.map((col) => (
              <th key={col.key} style={{
                padding: "12px 16px", textAlign: col.align || "left",
                fontSize: theme.typography.fontSize.xs,
                fontWeight: theme.typography.fontWeight.semibold,
                color: theme.colors.textSecondary,
                fontFamily: theme.typography.fontFamily.primary,
                whiteSpace: "nowrap", width: col.width,
              }}>
                {col.label}
              </th>
            ))}
            {actions && <th style={{ padding: "12px 16px", width: "110px" }} />}
          </tr>
        </thead>

        <tbody>
          {loading ? (
            <tr>
              <td colSpan={columns.length + (selectable ? 1 : 0) + (actions ? 1 : 0)}
                style={{ padding: "40px", textAlign: "center", color: theme.colors.textSecondary, fontSize: theme.typography.fontSize.sm }}>
                Loading...
              </td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td colSpan={columns.length + (selectable ? 1 : 0) + (actions ? 1 : 0)}
                style={{ padding: "40px", textAlign: "center", color: theme.colors.textSecondary, fontSize: theme.typography.fontSize.sm }}>
                {emptyText}
              </td>
            </tr>
          ) : data.map((row, i) => (
            <tr key={i}
              style={{ borderBottom: `1px solid ${theme.colors.border}`, transition: "background 0.15s" }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#fafafa")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              {selectable && (
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="checkbox"
                    checked={selectedIds?.has(i) ?? false}
                    onChange={(e) => onSelectRow?.(i, e.target.checked)}
                    style={{ cursor: "pointer" }}
                  />
                </td>
              )}
              {columns.map((col) => (
                <td key={col.key} style={{
                  padding: "12px 16px", textAlign: col.align || "left",
                  fontSize: theme.typography.fontSize.sm,
                  color: theme.colors.textPrimary,
                  fontFamily: theme.typography.fontFamily.primary,
                }}>
                  {col.render ? col.render(row, i) : String((row as any)[col.key] ?? "")}
                </td>
              ))}
              {actions && (
                <td style={{ padding: "12px 16px" }}>
                  {actions(row, i)}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}