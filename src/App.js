import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Table from "./Table/Table";


function App() {
  const [transactions, setTransactions] = useState();

  useEffect( () => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    const response = await axios.get(`http://localhost:3000/transactions`);
    setTransactions(response.data.transactions);
  };

  const clickHandler = () => {
    console.log("button")
  }
  
  return (
    <div>
      {transactions ? <Table props = {transactions}></Table> : "loading"}
      <button onClick={clickHandler}>Post</button>
    </div>
  );
}

export default App;
