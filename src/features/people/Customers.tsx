// import { useState } from "react";
// import { PeopleLayout } from "../../layout/PeopleLayout";

// const COLUMNS = [
//   { key: "code", label: "Code #", width: "80px" },
//   {
//     key: "customer",
//     label: "Customer",
//     render: (_: any, row: any) => (
//       <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
//         <img
//           src={row.avatar}
//           alt={row.customer}
//           style={{ width: "28px", height: "28px", borderRadius: "50%", objectFit: "cover" }}
//         />
//         <span>{row.customer}</span>
//       </div>
//     ),
//   },
//   { key: "email", label: "Email" },
//   { key: "phone", label: "Phone" },
//   { key: "country", label: "Country" },
//   { key: "status", label: "Status" },
// ];

// const DATA = [
//   { code: "CU001", customer: "Carl Evans", avatar: "/avatars/1.jpg", email: "carlevans@example.com", phone: "+12163547758", country: "Germany", status: "Active" },
//   { code: "CU002", customer: "Minerva Rameriz", avatar: "/avatars/2.jpg", email: "rameriz@example.com", phone: "+11367529510", country: "Japan", status: "Active" },
// ];

// function Customers() {
//   const [page, setPage] = useState(1);
//   const [rows, setRows] = useState(10);

//   return (
//     <PeopleLayout
//       title="Customers"
//       data={DATA}
//       columns={COLUMNS}
//       addLabel="Add Customer"
//       onAdd={() => console.log("Add")}
//       onView={(row) => console.log("View", row)}
//       onEdit={(row) => console.log("Edit", row)}
//       onDelete={(row) => console.log("Delete", row)}
//       searchPlaceholder="Search customers..."
//       totalPages={15}
//       currentPage={page}
//       onPageChange={setPage}
//       rowsPerPage={rows}
//       onRowsPerPageChange={setRows}
//     />
//   );
// }

// export default Customers;



import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { PeopleLayout } from "../../layout/PeopleLayout";
import { PageHeader } from "../../shared/components/PageHeader";
import { TableToolbar } from "../../shared/components/TableToolbar";
import { SearchBar } from "../../shared/components/SearchBar";
import { TableCard } from "../../shared/components/TableCard";
import { DataTable, Column } from "../../shared/components/DataTable";
import { RowActions } from "../../shared/components/RowActions";
import { TablePagination } from "../../shared/components/TablePagination";
import { StatusBadge } from "../../shared/components/StatusBadge";
import { AvatarCell } from "../../shared/components/AvatarCell";
import theme from "../../theme";

interface Customer {
  code: string;
  name: string;
  avatar?: string;
  email: string;
  phone: string;
  country: string;
  status: "Active" | "Inactive";
}

const MOCK_CUSTOMERS: Customer[] = [
  { code: "CU001", name: "Carl Evans",        email: "carlevans@example.com",    phone: "+12163547758", country: "Germany", status: "Active" },
  { code: "CU002", name: "Minerva Rameriz",   email: "rameriz@example.com",      phone: "+11367529510", country: "Japan",   status: "Active" },
  { code: "CU003", name: "Robert Lamon",      email: "robert@example.com",       phone: "+15362789414", country: "USA",     status: "Active" },
  { code: "CU004", name: "Patricia Lewis",    email: "patricia@example.com",     phone: "+18513094627", country: "Austria", status: "Active" },
  { code: "CU005", name: "Mark Joslyn",       email: "markjoslyn@example.com",   phone: "+14678219025", country: "Turkey",  status: "Active" },
  { code: "CU006", name: "Marsha Betts",      email: "marshbetts@example.com",   phone: "+10913278319", country: "Mexico",  status: "Active" },
  { code: "CU007", name: "Daniel Jude",       email: "dalejude@example.com",     phone: "+19125852947", country: "France",  status: "Active" },
  { code: "CU008", name: "Emma Bates",        email: "emmabates@example.com",    phone: "+13671835209", country: "Greece",  status: "Active" },
  { code: "CU009", name: "Richard Fralick",   email: "richard@example.com",      phone: "+19756194733", country: "Italy",   status: "Active" },
  { code: "CU010", name: "Michelle Robison",  email: "robinson@example.com",     phone: "+19167850925", country: "China",   status: "Active" },
];

const ROWS_PER_PAGE_OPTIONS = [10, 25, 50, 100];

function Customers() {
  const navigate = useNavigate();

  const [search, setSearch]               = useState("");
  const [statusFilter, setStatusFilter]   = useState("All");
  const [page, setPage]                   = useState(1);
  const [rowsPerPage, setRowsPerPage]     = useState(10);
  const [selectedIds, setSelectedIds]     = useState<Set<number>>(new Set());

  const filtered = MOCK_CUSTOMERS.filter((c) => {
    const matchSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.code.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "All" || c.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const totalPages  = Math.max(1, Math.ceil(filtered.length / rowsPerPage));
  const paginated   = filtered.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  // Selection handlers
  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedIds(new Set(paginated.map((_, i) => (page - 1) * rowsPerPage + i)));
    } else {
      setSelectedIds(new Set());
    }
  };

  const handleSelectRow = (index: number, checked: boolean) => {
    const updated = new Set(selectedIds);
    const globalIndex = (page - 1) * rowsPerPage + index;
    checked ? updated.add(globalIndex) : updated.delete(globalIndex);
    setSelectedIds(updated);
  };

  const columns: Column<Customer>[] = [
    {
      key: "code",
      label: "Code #",
      width: "90px",
    },
    {
      key: "name",
      label: "Customer",
      render: (row) => <AvatarCell name={row.name} src={row.avatar} />,
    },
    {
      key: "email",
      label: "Email",
    },
    {
      key: "phone",
      label: "Phone",
    },
    {
      key: "country",
      label: "Country",
    },
    {
      key: "status",
      label: "Status",
      render: (row) => <StatusBadge status={row.status} />,
    },
  ];

  return (
    <PeopleLayout>

      <PageHeader
        title="Customers"
        breadcrumb="Dashboard"
        actions={
          <TableToolbar
            addLabel="Add Customer"
            onAdd={() => navigate("/customers/add")}
            onExportPDF={() => console.log("Export PDF")}
            onExportExcel={() => console.log("Export Excel")}
            onRefresh={() => { setSearch(""); setPage(1); }}
            onCollapse={() => console.log("Collapse")}
          />
        }
        filters={
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
            <SearchBar
              value={search}
              onChange={(val) => { setSearch(val); setPage(1); }}
              placeholder="Search"
              width="260px"
            />

            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: theme.typography.fontSize.sm, color: theme.colors.textSecondary }}>
                Status
              </span>
              <select
                value={statusFilter}
                onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }}
                style={{
                  padding: "7px 28px 7px 10px",
                  border: `1px solid ${theme.colors.border}`,
                  borderRadius: "8px",
                  fontSize: theme.typography.fontSize.sm,
                  color: theme.colors.textPrimary,
                  fontFamily: theme.typography.fontFamily.primary,
                  outline: "none",
                  cursor: "pointer",
                  backgroundColor: "#fff",
                  appearance: "none",
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 8px center",
                }}
              >
                <option value="All">All</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>
        }
      />

      <div style={{ padding: "0 24px 24px" }}>
        <TableCard>
          <DataTable
            columns={columns}
            data={paginated}
            selectable
            selectedIds={selectedIds}
            onSelectAll={handleSelectAll}
            onSelectRow={handleSelectRow}
            emptyText="No customers found"
            actions={(row) => (
              <RowActions
                onView={() => navigate(`/customers/${row.code}`)}
                onEdit={() => navigate(`/customers/${row.code}/edit`)}
                onDelete={() => console.log("Delete", row.code)}
              />
            )}
          />

          <TablePagination
            currentPage={page}
            totalPages={totalPages}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={ROWS_PER_PAGE_OPTIONS}
            onPageChange={setPage}
            onRowsPerPageChange={(r) => { setRowsPerPage(r); setPage(1); }}
          />
        </TableCard>
      </div>

    </PeopleLayout>
  );
}

export default Customers;