import { useState } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = (props) => {
  const [tableData, setTableData] = useState(props.props);
  // setTableData(props.props);
  // console.log(props.props)
  const columns = [
    { label: "Transaction Id", accessor: "transactionId", sortable: true },
    { label: "Date", accessor: "date", sortable: false },
    { label: "Description", accessor: "description", sortable: true },
    { label: "Currency", accessor: "currency", sortable: true },
    { label: "From", accessor: "from", sortable: true },
    { label: "To", accessor: "to", sortable: true },
    { label: "Value", accessor: "value", sortable: true },
  ];

  return (
    <>
      <table className="table">
        <caption>
          Developers currently enrolled in this course, column headers are
          sortable.
        </caption>
        <TableHead columns={columns} />
        <TableBody columns={columns} tableData={tableData} />
      </table>
    </>
  );
};

export default Table;
