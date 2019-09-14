import React from "react";
import "./App.css";
import Data from "./components/Data";
import ContainerApilayer from "./components/ContainerApilayer";
import ContainerFloatrates from "./components/ContainerFloatrates";
import ContainerOpenEx from "./components/ContainerOpenEx";

function App() {
  return (
    <div className="app">
      <Data
        header="currencies"
        // currencies={{ EURAUD: "AUD", EURUSD: "USD", EURNOK: "NOK" }}
      />
      <ContainerApilayer />
      <ContainerOpenEx />
      <ContainerFloatrates />
    </div>
  );
}

export default App;
