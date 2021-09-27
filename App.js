var initialPrice = document.querySelector('#initial-price');
var stocksQuantity = document.querySelector('#stocks-quantity');
var currentPrice = document.querySelector('#current-price');
var submitBtn = document.querySelector('#submit-btn');
var outputBox = document.querySelector('#output-box');

submitBtn.addEventListener('click', submitHandler);

function submitHandler() {
  var ip = Number(initialPrice.value);
  var qty = Number(stocksQuantity.value);
  var curr = Number(currentPrice.value);
  if(ip && qty && curr){
  calculateProfitAndLoss(ip, qty, curr);
  } else {
    showOutput(`Please fill out all the fields🤨`)
  }
}

function calculateProfitAndLoss(initial, quantity, current) {
  if(initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / initial) * 100;
    var lossAnswer = lossPercentage.toFixed(2);
    showOutput(`Hey the loss is ${loss} and the percentage is ${lossAnswer}%`);
    
  }
  else if (current > initial) {
      var profit = (current - initial) * quantity;
      var profitPercentage = (profit / current) * 100;
      var profitAnswer = profitPercentage.toFixed(2);
      showOutput(`Hey the profit is ${profit} and the percentage is ${profitAnswer}%`);
  } else {
    showOutput(`No pain no gain and no gain no pain🙂`);
  }
}

function showOutput(message, color) {
 
  
  
  outputBox.innerHTML = message;
  
}





