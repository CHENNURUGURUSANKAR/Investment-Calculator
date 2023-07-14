import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import InvestmentForm from "./components/investmentform/InvestmentForm";
import ResultTable from "./components/resulttable/ResultTable";
function App() {
  const [rows, setRows] = useState([]);

  function onFormSubmitListener(rows) {
    console.log("form submitted");
    setRows(rows);
  }

  return (
    <div className="card">
      <Header />
      <InvestmentForm onSubmit={onFormSubmitListener} />
      {rows.length === 0 && <p>Enter required data</p>}
      {rows.length > 0 && <ResultTable rows={rows} />}
    </div>
  );
}

export default App;
