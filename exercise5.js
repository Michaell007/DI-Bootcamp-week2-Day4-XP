// Create a function
function changeEnough(itemPrice, amountOfChange) {
    let money = (Number(amountOfChange[0])*0.25) + (Number(amountOfChange[1])*0.10) + (Number(amountOfChange[2])*0.05) + (Number(amountOfChange[3])*0.01);
    if (money>=itemPrice) {
        return true;
    } else {
        return false;
    }
}