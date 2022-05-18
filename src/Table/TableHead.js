import React from "react";
import { useState } from "react";

const TableHead = ({ columns, handleSorting }) => {
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");

  // this functions toggles between ascending and descending, and sends the parameters to handleSorting to be sorted
  const handleSortingChange = (accessor) => {
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
    console.log(accessor, sortOrder);
  };
  return (
    <thead>
      <tr>
        {columns.map(({ label, accessor, sortable }) => {
          return (
            <th
              className="th"
              key={accessor}
              onClick={sortable ? () => handleSortingChange(accessor) : null}
            >
              {label}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
