// import type { ReactNode } from "react";
// import theme from "../theme";

// interface Column {
//   key: string;
//   label: string;
//   width?: string;
//   render?: (value: any, row: any) => ReactNode;
// }

// interface PeopleLayoutProps {
//   title: string;
//   breadcrumb?: string;
//   data: any[];
//   columns: Column[];
//   onAdd?: () => void;
//   addLabel?: string;
//   onView?: (row: any) => void;
//   onEdit?: (row: any) => void;
//   onDelete?: (row: any) => void;
//   searchPlaceholder?: string;
//   totalPages?: number;
//   currentPage?: number;
//   onPageChange?: (page: number) => void;
//   rowsPerPage?: number;
//   onRowsPerPageChange?: (rows: number) => void;
//   statusFilter?: boolean;
// }

// function StatusBadge({ status }: { status: string }) {
//   const isActive = status?.toLowerCase() === "active";
//   return (
//     <span
//       style={{
//         display: "inline-flex",
//         alignItems: "center",
//         padding: "3px 10px",
//         borderRadius: "4px",
//         fontSize: "12px",
//         fontWeight: 600,
//         backgroundColor: isActive ? "#e6f9f0" : "#ffeaea",
//         color: isActive ? "#28a745" : "#dc3545",
//         fontFamily: theme.typography.fontFamily.primary,
//       }}
//     >
//       {status}
//     </span>
//   );
// }

// function ActionButtons({
//   onView,
//   onEdit,
//   onDelete,
//   row,
// }: {
//   onView?: (row: any) => void;
//   onEdit?: (row: any) => void;
//   onDelete?: (row: any) => void;
//   row: any;
// }) {
//   return (
//     <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
//       {onView && (
//         <button
//           onClick={() => onView(row)}
//           style={{
//             border: "none",
//             background: "none",
//             cursor: "pointer",
//             padding: "4px",
//             color: "#6c757d",
//             display: "flex",
//             alignItems: "center",
//             transition: "color 0.2s",
//           }}
//           onMouseEnter={(e) => (e.currentTarget.style.color = theme.colors.primary)}
//           onMouseLeave={(e) => (e.currentTarget.style.color = "#6c757d")}
//           title="View"
//         >
//           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//             <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
//             <circle cx="12" cy="12" r="3" />
//           </svg>
//         </button>
//       )}
//       {onEdit && (
//         <button
//           onClick={() => onEdit(row)}
//           style={{
//             border: "none",
//             background: "none",
//             cursor: "pointer",
//             padding: "4px",
//             color: "#6c757d",
//             display: "flex",
//             alignItems: "center",
//             transition: "color 0.2s",
//           }}
//           onMouseEnter={(e) => (e.currentTarget.style.color = theme.colors.primary)}
//           onMouseLeave={(e) => (e.currentTarget.style.color = "#6c757d")}
//           title="Edit"
//         >
//           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//             <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
//             <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
//           </svg>
//         </button>
//       )}
//       {onDelete && (
//         <button
//           onClick={() => onDelete(row)}
//           style={{
//             border: "none",
//             background: "none",
//             cursor: "pointer",
//             padding: "4px",
//             color: "#6c757d",
//             display: "flex",
//             alignItems: "center",
//             transition: "color 0.2s",
//           }}
//           onMouseEnter={(e) => (e.currentTarget.style.color = "#dc3545")}
//           onMouseLeave={(e) => (e.currentTarget.style.color = "#6c757d")}
//           title="Delete"
//         >
//           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//             <polyline points="3 6 5 6 21 6" />
//             <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
//             <path d="M10 11v6M14 11v6" />
//             <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
//           </svg>
//         </button>
//       )}
//     </div>
//   );
// }

// export function PeopleLayout({
//   title,
//   breadcrumb = "Dashboard",
//   data,
//   columns,
//   onAdd,
//   addLabel = `Add ${title}`,
//   onView,
//   onEdit,
//   onDelete,
//   searchPlaceholder = "Search...",
//   totalPages = 15,
//   currentPage = 1,
//   onPageChange,
//   rowsPerPage = 10,
//   onRowsPerPageChange,
//   statusFilter = true,
// }: PeopleLayoutProps) {
//   return (
//     <>
//       <style>{`
//         *, *::before, *::after { box-sizing: border-box; }

//         .people-table-row:hover {
//           background-color: #f8f9fa !important;
//         }

//         .people-page-btn:hover {
//           background-color: ${theme.colors.primary} !important;
//           color: #fff !important;
//         }

//         .people-search-input:focus {
//           outline: none;
//           border-color: ${theme.colors.primary} !important;
//         }

//         .people-add-btn:hover {
//           opacity: 0.88;
//         }

//         @media (max-width: 768px) {
//           .people-header-row {
//             flex-direction: column !important;
//             align-items: flex-start !important;
//             gap: 12px !important;
//           }
//           .people-toolbar {
//             flex-direction: column !important;
//             align-items: flex-start !important;
//             gap: 10px !important;
//           }
//           .people-table-wrap {
//             overflow-x: auto !important;
//           }
//         }
//       `}</style>

//       <div
//         style={{
//           width: "100%",
//           fontFamily: theme.typography.fontFamily.primary,
//           backgroundColor: "#f5f5f5",
//           minHeight: "100%",
//           padding: "20px 24px",
//           boxSizing: "border-box",
//         }}
//       >
//         {/* Page Header */}
//         <div
//           className="people-header-row"
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             marginBottom: "20px",
//           }}
//         >
//           <div>
//             <h1
//               style={{
//                 margin: 0,
//                 fontSize: "18px",
//                 fontWeight: 700,
//                 color: theme.colors.textPrimary,
//                 fontFamily: theme.typography.fontFamily.primary,
//               }}
//             >
//               {title}
//             </h1>
//             <p
//               style={{
//                 margin: "2px 0 0",
//                 fontSize: "12px",
//                 color: theme.colors.textSecondary,
//                 fontFamily: theme.typography.fontFamily.primary,
//               }}
//             >
//               {breadcrumb} &rsaquo; {title}
//             </p>
//           </div>

//           {onAdd && (
//             <button
//               className="people-add-btn"
//               onClick={onAdd}
//               style={{
//                 display: "inline-flex",
//                 alignItems: "center",
//                 gap: "6px",
//                 backgroundColor: theme.colors.primary,
//                 color: "#ffffff",
//                 border: "none",
//                 borderRadius: "6px",
//                 padding: "8px 16px",
//                 fontSize: "13px",
//                 fontWeight: 600,
//                 cursor: "pointer",
//                 fontFamily: theme.typography.fontFamily.primary,
//                 transition: "opacity 0.2s",
//               }}
//             >
//               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                 <line x1="12" y1="5" x2="12" y2="19" />
//                 <line x1="5" y1="12" x2="19" y2="12" />
//               </svg>
//               {addLabel}
//             </button>
//           )}
//         </div>

//         {/* Table Card */}
//         <div
//           style={{
//             backgroundColor: "#ffffff",
//             borderRadius: "10px",
//             boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
//             overflow: "hidden",
//           }}
//         >
//           {/* Toolbar */}
//           <div
//             className="people-toolbar"
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//               padding: "14px 16px",
//               borderBottom: "1px solid #f0f0f0",
//               gap: "12px",
//             }}
//           >
//             {/* Search */}
//             <div style={{ position: "relative", flex: 1, maxWidth: "260px" }}>
//               <svg
//                 width="14"
//                 height="14"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="#aaa"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)" }}
//               >
//                 <circle cx="11" cy="11" r="8" />
//                 <line x1="21" y1="21" x2="16.65" y2="16.65" />
//               </svg>
//               <input
//                 className="people-search-input"
//                 type="text"
//                 placeholder={searchPlaceholder}
//                 style={{
//                   width: "100%",
//                   paddingLeft: "32px",
//                   paddingRight: "12px",
//                   height: "34px",
//                   border: "1px solid #e0e0e0",
//                   borderRadius: "6px",
//                   fontSize: "13px",
//                   color: theme.colors.textPrimary,
//                   fontFamily: theme.typography.fontFamily.primary,
//                   backgroundColor: "#fafafa",
//                   transition: "border-color 0.2s",
//                 }}
//               />
//             </div>

//             {/* Status filter */}
//             {statusFilter && (
//               <select
//                 style={{
//                   height: "34px",
//                   padding: "0 12px",
//                   border: "1px solid #e0e0e0",
//                   borderRadius: "6px",
//                   fontSize: "13px",
//                   color: theme.colors.textSecondary,
//                   fontFamily: theme.typography.fontFamily.primary,
//                   backgroundColor: "#fafafa",
//                   cursor: "pointer",
//                   outline: "none",
//                 }}
//               >
//                 <option value="">Status</option>
//                 <option value="active">Active</option>
//                 <option value="inactive">Inactive</option>
//               </select>
//             )}
//           </div>

//           {/* Table */}
//           <div className="people-table-wrap">
//             <table
//               style={{
//                 width: "100%",
//                 borderCollapse: "collapse",
//                 fontSize: "13px",
//               }}
//             >
//               <thead>
//                 <tr style={{ backgroundColor: "#fafafa", borderBottom: "1px solid #f0f0f0" }}>
//                   <th style={{ width: "40px", padding: "10px 16px" }}>
//                     <input type="checkbox" style={{ cursor: "pointer" }} />
//                   </th>
//                   {columns.map((col) => (
//                     <th
//                       key={col.key}
//                       style={{
//                         padding: "10px 12px",
//                         textAlign: "left",
//                         fontWeight: 600,
//                         color: theme.colors.textSecondary,
//                         fontSize: "12px",
//                         whiteSpace: "nowrap",
//                         width: col.width,
//                         fontFamily: theme.typography.fontFamily.primary,
//                       }}
//                     >
//                       {col.label}
//                     </th>
//                   ))}
//                   <th
//                     style={{
//                       padding: "10px 12px",
//                       textAlign: "left",
//                       fontWeight: 600,
//                       color: theme.colors.textSecondary,
//                       fontSize: "12px",
//                       fontFamily: theme.typography.fontFamily.primary,
//                     }}
//                   >
//                     Action
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {data.map((row, idx) => (
//                   <tr
//                     key={idx}
//                     className="people-table-row"
//                     style={{
//                       borderBottom: "1px solid #f5f5f5",
//                       backgroundColor: "#ffffff",
//                       transition: "background-color 0.15s",
//                     }}
//                   >
//                     <td style={{ padding: "10px 16px" }}>
//                       <input type="checkbox" style={{ cursor: "pointer" }} />
//                     </td>
//                     {columns.map((col) => (
//                       <td
//                         key={col.key}
//                         style={{
//                           padding: "10px 12px",
//                           color: theme.colors.textPrimary,
//                           whiteSpace: "nowrap",
//                           fontFamily: theme.typography.fontFamily.primary,
//                         }}
//                       >
//                         {col.key === "status" ? (
//                           <StatusBadge status={row[col.key]} />
//                         ) : col.render ? (
//                           col.render(row[col.key], row)
//                         ) : (
//                           row[col.key]
//                         )}
//                       </td>
//                     ))}
//                     <td style={{ padding: "10px 12px" }}>
//                       <ActionButtons
//                         onView={onView}
//                         onEdit={onEdit}
//                         onDelete={onDelete}
//                         row={row}
//                       />
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Pagination */}
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//               padding: "12px 16px",
//               borderTop: "1px solid #f0f0f0",
//               flexWrap: "wrap",
//               gap: "10px",
//             }}
//           >
//             {/* Rows per page */}
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "8px",
//                 fontSize: "13px",
//                 color: theme.colors.textSecondary,
//                 fontFamily: theme.typography.fontFamily.primary,
//               }}
//             >
//               Row Per Page
//               <select
//                 value={rowsPerPage}
//                 onChange={(e) => onRowsPerPageChange?.(Number(e.target.value))}
//                 style={{
//                   height: "28px",
//                   padding: "0 8px",
//                   border: "1px solid #e0e0e0",
//                   borderRadius: "4px",
//                   fontSize: "12px",
//                   fontFamily: theme.typography.fontFamily.primary,
//                   cursor: "pointer",
//                   outline: "none",
//                 }}
//               >
//                 {[5, 10, 20, 50].map((n) => (
//                   <option key={n} value={n}>{n}</option>
//                 ))}
//               </select>
//               Entries
//             </div>

//             {/* Page buttons */}
//             <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
//               {/* Prev */}
//               <button
//                 onClick={() => onPageChange?.(Math.max(1, currentPage - 1))}
//                 disabled={currentPage === 1}
//                 style={{
//                   width: "28px",
//                   height: "28px",
//                   border: "1px solid #e0e0e0",
//                   borderRadius: "4px",
//                   backgroundColor: "#fff",
//                   cursor: currentPage === 1 ? "not-allowed" : "pointer",
//                   opacity: currentPage === 1 ? 0.4 : 1,
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <polyline points="15 18 9 12 15 6" />
//                 </svg>
//               </button>

//               {/* Page numbers */}
//               {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => i + 1).map((page) => (
//                 <button
//                   key={page}
//                   className="people-page-btn"
//                   onClick={() => onPageChange?.(page)}
//                   style={{
//                     width: "28px",
//                     height: "28px",
//                     border: "1px solid #e0e0e0",
//                     borderRadius: "4px",
//                     backgroundColor: currentPage === page ? theme.colors.primary : "#fff",
//                     color: currentPage === page ? "#fff" : theme.colors.textPrimary,
//                     cursor: "pointer",
//                     fontSize: "12px",
//                     fontWeight: currentPage === page ? 600 : 400,
//                     fontFamily: theme.typography.fontFamily.primary,
//                     transition: "background-color 0.15s, color 0.15s",
//                   }}
//                 >
//                   {page}
//                 </button>
//               ))}

//               {totalPages > 5 && (
//                 <>
//                   <span style={{ fontSize: "12px", color: "#aaa", padding: "0 2px" }}>...</span>
//                   <button
//                     className="people-page-btn"
//                     onClick={() => onPageChange?.(totalPages)}
//                     style={{
//                       width: "28px",
//                       height: "28px",
//                       border: "1px solid #e0e0e0",
//                       borderRadius: "4px",
//                       backgroundColor: "#fff",
//                       color: theme.colors.textPrimary,
//                       cursor: "pointer",
//                       fontSize: "12px",
//                       fontFamily: theme.typography.fontFamily.primary,
//                       transition: "background-color 0.15s, color 0.15s",
//                     }}
//                   >
//                     {totalPages}
//                   </button>
//                 </>
//               )}

//               {/* Next */}
//               <button
//                 onClick={() => onPageChange?.(Math.min(totalPages, currentPage + 1))}
//                 disabled={currentPage === totalPages}
//                 style={{
//                   width: "28px",
//                   height: "28px",
//                   border: "1px solid #e0e0e0",
//                   borderRadius: "4px",
//                   backgroundColor: "#fff",
//                   cursor: currentPage === totalPages ? "not-allowed" : "pointer",
//                   opacity: currentPage === totalPages ? 0.4 : 1,
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <polyline points="9 18 15 12 9 6" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <p
//           style={{
//             marginTop: "16px",
//             textAlign: "center",
//             fontSize: "12px",
//             color: theme.colors.textSecondary,
//             fontFamily: theme.typography.fontFamily.primary,
//           }}
//         >
//           2014-2025 © DreamsPOS. All Right Reserved
//         </p>
//       </div>
//     </>
//   );
// }

import { ReactNode } from "react";
import theme from "../theme";

interface PeopleLayoutProps {
  children: ReactNode;
}

export function PeopleLayout({ children }: PeopleLayoutProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        minHeight: "100vh",
        backgroundColor: "#f5f6fa",
        fontFamily: theme.typography.fontFamily.primary,
      }}
    >
      {children}
    </div>
  );
}