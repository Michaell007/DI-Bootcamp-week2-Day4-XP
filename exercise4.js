// Add the stock and prices objects to your js file.
const stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1,
}

const prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}

// Create an array called shoppingList
let shoppingList = ["banana","orange","apple"];

// Create a function called myBill() that takes no parameters.
function myBill() {
    let total=0;
    for (const fruit of shoppingList) {
        // check out stock
        if (stock[fruit] != undefined) {
            // find out the price
            let price = prices[fruit];

            // Bonus: If the item is in stock, decrease the item’s stock by 1
            stock[fruit] = stock[fruit]-1;

            total += Number(price);
        }
    }
    return total;
}