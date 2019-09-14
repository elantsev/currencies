import React, { useState, useEffect } from "react";
import baseToEUR from "./util/baseToEUR";
import Data from './Data';

function ContainerFloatrates() {
  const [currencies, setCurrencies] = useState({});

  useEffect(() => {
    fetch("http://www.floatrates.com/daily/usd.xml")
      .then(response => response.text())
      .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
      .then(data => {
        let USDAUD, USDEUR, USDNOK;
        let items = data.querySelectorAll("item");
        for (let i = 0; i < items.length; i++) {
          if (items[i].querySelector("targetCurrency").innerHTML === "AUD") {
            USDAUD = items[i].querySelector("exchangeRate").innerHTML;
          }
          if (items[i].querySelector("targetCurrency").innerHTML === "EUR") {
            USDEUR = items[i].querySelector("exchangeRate").innerHTML;
          }
          if (items[i].querySelector("targetCurrency").innerHTML === "NOK") {
            USDNOK = items[i].querySelector("exchangeRate").innerHTML;
          }
        }

        let currencies = baseToEUR(USDAUD, USDEUR, USDNOK);
        setCurrencies(currencies);
      });
  }, []);

  return <Data currencies={currencies} header="Floatrates" />;
}

export default ContainerFloatrates;
