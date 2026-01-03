import { useEffect, useState } from "react";
import { fetchTaxes, fetchExpenditure } from "./api";
import TaxChart from "./components/TaxChart";
import ExpenditureChart from "./components/ExpenditureChart";
import GovNotes from "./components/GovNotes";
import "./App.css";

function App() {
  const [taxes, setTaxes] = useState({});
  const [expenditure, setExpenditure] = useState({});

  useEffect(() => {
    fetchTaxes().then(res => setTaxes(res.data));
    fetchExpenditure().then(res => setExpenditure(res.data));
  }, []);

  return (
    <div className="app-container">
      <div className="header">
        <h1>Indian Budget Transparency Dashboard</h1>
        <p>Union Budget 2025–26 • Public Financial Overview</p>
      </div>

      <div className="grid">
        <div className="card">
          <h3>Tax Revenue Sources</h3>
          <TaxChart data={taxes} />
        </div>

        <div className="card">
          <h3>Government Expenditure</h3>
          <ExpenditureChart data={expenditure} />
        </div>
      </div>

      <div className="card">
        <GovNotes />
      </div>
    </div>
  );
}

export default App;
