function clickHandler() {

    var ip = Number(initialPrice.value);
    var cp = Number(currentPrice.value);
    var sq = Number(stockQuantity.value);

    calculateProfitAndLoss(ip, sq, cp);
}
