// Example fixed conversion rates
const rates = {
    USD: { INR: 83.12, EUR: 0.92, USD: 1 },
    INR: { USD: 0.012, EUR: 0.011, INR: 1 },
    EUR: { USD: 1.09, INR: 90.11, EUR: 1 }
  };
  
  function convertCurrency() {
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("from-currency").value;
    const toCurrency = document.getElementById("to-currency").value;
    
    if (amount === "" || isNaN(amount)) {
      document.getElementById("result").innerText = "Please enter a valid amount!";
      return;
    }
  
    const rate = rates[fromCurrency][toCurrency];
    const convertedAmount = (amount * rate).toFixed(2);
    document.getElementById("result").innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
  }
  