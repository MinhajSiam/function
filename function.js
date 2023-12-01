function bringSingara(money) {
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}

var myTk = 155;
var singaras = bringSingara(myTk);
console.log("You can buy " + singaras + " Singara with your Tk.");