import React, { useState, useEffect } from "react";
import baseToEUR from "./util/baseToEUR";
import Data from "./Data";

function ContainerOpenEx() {
  const [currencies, setCurrencies] = useState({});

  useEffect(() => {
    fetch(
      "https://openexchangerates.org/api/latest.json?app_id=e0562836e26b45d0bc184ccaa779cf5c"
    )
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        const { AUD, EUR, NOK } = data.rates;
        let currencies = baseToEUR(AUD, EUR, NOK);
        setCurrencies(currencies);
      });
  }, []);

  return <Data currencies={currencies} header="openexchangerates.org" />;
}

export default ContainerOpenEx;
