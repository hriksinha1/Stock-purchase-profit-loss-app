var initialPrice = document.querySelector("#initial-price");
var currentPrice = document.querySelector("#current-price");
var stockQuantity = document.querySelector("#stock-quantity");
var checkButton = document.querySelector("#click-btn");
var outputBox = document.querySelector("#output-box");

function calculateProfitAndLoss (initial, quantity, current) {

    if (initial > current){

        var loss = (initial - current) * quantity;
        var lossPercentage = (loss/initial) * 100;

       console.log(`Hey your loss is ${loss} and the percentage is ${lossPercentage}%`);

    } else if (current > initial){

        var profit = (current-initial)*quantity;
        var profitPercentage = (profit/initial)*100;

        console.log(`Hey your profit is ${profit} and your percentage is ${profitPercentage}%`);

    } else {

        console.log(`No pain no gain`);

    }

}

calculateProfitAndLoss(100,10,100);