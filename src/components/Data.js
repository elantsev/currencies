import React from "react";
import PropTypes from "prop-types";
import "./Data.css";

function Data({ header, currencies: { EURAUD, EURUSD, EURNOK } }) {
  return (
    <div>
      <h3>{header}</h3>
      <p>{EURAUD}</p>
      <p>{EURUSD}</p>
      <p>{EURNOK}</p>
    </div>
  );
}

export default Data;

Data.propTypes = {
  header: PropTypes.string.isRequired,
  currencies: PropTypes.shape({
    EURAUD: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    EURUSD: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    EURNOK: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  })
};

Data.defaultProps = {
  currencies: {
    EURAUD: "AUD",
    EURUSD: "USD",
    EURNOK: "NOK"
  }
};
