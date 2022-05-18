import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Table from "./Table/Table";


function App() {
  const [transactions, setTransactions] = useState();

  
  const fetchData = async () => { //fetch data
    const response = await axios.get(`http://localhost:3000/transactions`);
    // setTransactions(response.data.transactions);
    console.log(response.data.transactions);
    // console.log(transactions, "line17")
    // console.log("fetched")
    return response.data.transactions
  };
  
  const getData = async () => {
    const dataFromServer = await fetchData();
    setTransactions(dataFromServer);
  };

  useEffect(() => {
    getData();
    console.log(transactions)
  }, []);
  
  const clickHandler = async () => {
    axios.post('http://localhost:3000/transactions', {
      "transactionId": 3,
      "date": 1652690094,
      "to": 180180180,
      "from": 210210210,
      "currency": "MYR",
      "value": 1000,
      "description": "debit transfer"
    })
    .then((response) => {
      // console.log(response);
    }, (error) => {
      console.log(error);
    });
    getData()
  }
  
  return (
    <div>
      {transactions ? <Table props = {transactions}></Table> : "loading"}
      {/* {transactions ? JSON.stringify(transactions) : "loading"} */}
      <button onClick={clickHandler}>Post</button>
    </div>
  );
}

export default App;
