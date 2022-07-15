
// Write a class KioskCalc that has the following fruitsPriceList object.
// this.fruitsPriceList = { "orange": 30, "mango": 15, "avocado": 40 }; 
// and takes two parameters (fruit, quantity) when initialized i.e. 
// var kioskCalc = new KioskCalc(“orange”, 2);
// Thereafter, it allows one to calculate the total cost of the fruit by accessing the 
// getTotalCost( ) method. 
// kioskCalc.getTotalCost( )   returns “2 orange for KES 60”  

class kioskCalculate{
    constructor(fruitName, quantity){
        this.fruitName = fruitName
        this.quantity = quantity
        this.fruitPriceList = {"Tangerine":80,"Grapes":50,"Pineapple":100},
        this.getTotalCost = function(){
            return `${quantity} ${fruitName} for KES ${quantity * this.fruitPriceList.Tangerine}`
        }
    }
}
var kioskCalc = new kioskCalculate("Tangerine",2)
console.log(kioskCalc.getTotalCost())
