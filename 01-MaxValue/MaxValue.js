function MaxValue(shares) {
// Tu código aquí
  let maxProfit = shares[1]-shares[0];
  let minPrice = shares[0];

  for (let i = 1; i < shares.length; i++) {
    let auxProfit = shares[i] - minPrice;
    if (auxProfit > maxProfit) {
      maxProfit = auxProfit;
    }
    if (shares[i] < minPrice) {
      minPrice = shares[i];
    }
  }

  return maxProfit;
}

module.exports = MaxValue;
