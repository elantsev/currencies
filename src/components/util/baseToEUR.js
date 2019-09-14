export default function baseToEUR(USDAUD, USDEUR, USDNOK) {
  let EURAUD = (USDAUD / USDEUR).toFixed(2);
  let EURUSD = (1 / USDEUR).toFixed(2);
  let EURNOK = (USDNOK * USDEUR).toFixed(2);
  return { EURAUD, EURUSD, EURNOK };
}
