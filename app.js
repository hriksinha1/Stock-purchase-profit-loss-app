var initialPrice = document.querySelector("#initial-price");
var currentPrice = document.querySelector("#current-price");
var stockQuantity = document.querySelector("#stock-quantity");
var checkButton = document.querySelector("#click-btn");
var outputBox = document.querySelector("#output-box");

function calculateProfitAndLoss (initial, quantity, current) {

    if (initial>current){

        var loss = (initial-current)*quantity;
        var lossPercentage = (loss/initial) * 100;

        console.log ("Your loss percentage is ${loss} and the percentage is ${lossPercentage}%")

    } else if (current>initial){

    } else

}

calculateProfitAndLoss(100,10,100);