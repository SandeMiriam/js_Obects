// Write a program to calculate purchases from a kiosk. For e.g. given the fruit name 
// 'orange' the program should fetch its price (30.00) and multiply with the quantity 
// requested (2) and return total cost in this printed format (2 Oranges for KES 
// 60.00). 
// calculateFruitCost(fruitName, quantity)
// For example, calculateFruitCost('orange', 2) should return "2 Oranges for KES 
// 60.00"

// var price = 10;
// class calculateFruitCost{
//     constructor(fruitName, quantity){
//         this.fruitName = fruitName
//         this.quantity = quantity
//     }

// }
// var grocery = new calculateFruitCost("Orange", 30)
// console.log(`${grocery.quantity} ${grocery.fruitName} for KES ${price*grocery.quantity}`);

let fruits={
    fruits:"orange",
    amount:30,
    fruitsCost:function(activity){
        return `Two ${this.fruits} for KES ${this.amount*2}.00`
    }
}
console.log(fruits.fruitsCost());
