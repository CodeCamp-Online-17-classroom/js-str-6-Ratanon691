function extractCurrencyValue(str, rate) {
  let usd = +str.slice(1)
  let convert = usd * rate
  console.log(`THB${convert}`)
}
extractCurrencyValue('$120', 30); // THB3600
