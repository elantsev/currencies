import React, { useState, useEffect } from "react";
import baseToEUR from "./util/baseToEUR";
import Data from "./Data";

function ContainerApilayer() {
  const [currencies, setCurrencies] = useState({});

  useEffect(() => {
    fetch(
      "http://apilayer.net/api/live?access_key=c252f5f007e91fd07637e86c7e4cf324"
    )
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        const { USDAUD, USDEUR, USDNOK } = data.quotes;

        let currencies = baseToEUR(USDAUD, USDEUR, USDNOK);
        setCurrencies(currencies);
      });
  }, []);

  return <Data currencies={currencies} header="apilayer.net" />;
}

export default ContainerApilayer;
