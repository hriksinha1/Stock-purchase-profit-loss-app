var initialPrice = document.querySelector("#initial-price");
var currentPrice = document.querySelector("#current-price");
var stockQuantity = document.querySelector("#stock-quantity");
var checkButton = document.querySelector("#click-btn");
var outputBox = document.querySelector("#output-box");

checkButton.addEventListener('click', clickHandler);

function clickHandler() {

    var ip = Number(initialPrice.value);
    var cp = Number(currentPrice.value);
    var sq = Number(stockQuantity.value);

    calculateProfitAndLoss(ip, sq, cp);
}

function calculateProfitAndLoss (initial, quantity, current) {

    if (initial > current){

        var loss = (initial - current) * quantity;
        var lossPercentage = (loss/initial) * 100;

       showOutput(`Hey your loss is ${loss} and the percentage is ${lossPercentage}%`);

    } else if (current > initial){

        var profit = (current-initial)*quantity;
        var profitPercentage = (profit/initial)*100;

        showOutput(`Hey your profit is ${profit} and your percentage is ${profitPercentage}%`);

    } else {

        console.log(`No pain no gain`);

    }

}

calculateProfitAndLoss(10,10,100);

function showOutput(message) {

    outputBox.innerHTML = message;
}