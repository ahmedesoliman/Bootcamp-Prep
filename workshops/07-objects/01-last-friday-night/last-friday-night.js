// YOUR CODE BELOW

function lastFridayNight(transactions){
    let total = 0;
    for (let i = 0; i < transactions.length; i++){
      let item = transactions[i];
      let transactionsAmount = item.amount;
      total += transactionsAmount;
    }
    return total;
  }
  