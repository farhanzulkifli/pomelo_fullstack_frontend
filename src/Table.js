import { useEffect, useState } from "react";
import TableBody from "./Table/TableBody";
import TableHead from "./Table/TableHead";
import axios from "axios";
import "./Table.css";

const Table = () => {
  const [tableData, setTableData] = useState();

  useEffect(() => {
    getData();
  }, []);

  //** Fetching the data and setting the data into the state */
  const getData = async () => {
    const dataFromServer = await fetchData();
    setTableData(dataFromServer);
  };

  const fetchData = async () => {
    const response = await axios.get(`http://localhost:3000/transactions`);
    return response.data.transactions;
  };

  //** Posting a transaction */
  const clickHandler = async () => {
    axios
      .post("http://localhost:3000/transactions", {
        transactionId: 3,
        date: 1652690094,
        to: 180180180,
        from: 210210210,
        currency: "MYR",
        value: 1000,
        description: "debit transfer",
      })
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    getData();
  };

  //** Setting the columns for the Table Head */
  const columns = [
    { label: "Transaction Id", accessor: "transactionId", sortable: true },
    { label: "Date and Time", accessor: "date", sortable: true },
    { label: "Description", accessor: "description", sortable: true },
    { label: "From", accessor: "from", sortable: true },
    { label: "To", accessor: "to", sortable: true },
    { label: "Currency", accessor: "currency", sortable: true },
    { label: "Value", accessor: "value", sortable: true },
  ];

  //** Handles the sorting of data via clicking on table headers */
  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  };

  return (
    <>
      <table className="table">
        <caption>Sortable Table</caption>
        {tableData ? <TableHead {...{ columns, handleSorting }} /> : "loading"}
        {tableData ? <TableBody {...{ columns, tableData }} /> : "loading"}
        <button onClick={clickHandler}>Post</button>
      </table>
    </>
  );
};

export default Table;
