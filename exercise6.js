// Define a function called hotelCost()
function hotelCost() {
    let numberNights = prompt("How many nights ?");

    // If the user doesn’t answer or if the answer is not a number, ask again.
    while (numberNights == '' || isNaN(numberNights)) {
        numberNights = prompt("How many nights ?");
    }

    // the total price of the hotel.
    let price = 150*Number(numberNights);
    return price;
}

// Define a function called planeRideCost()
function planeRideCost() {
    let destination = prompt("Your destination ?");

    // If the user doesn’t answer or if the answer is not a number, ask again.
    while (destination == '' || !isNaN(destination)) {
        destination = prompt("Your destination ?");
    }

    let price=0;
    switch (destination) {
        case "Londres":
            price = 183;
            break;
        case "Paris":
            price = 220;
            break;
    
        default:
            price = 300;
            break;
    }

    return price;
}


// Define a function called rentalCarCost()
function rentalCarCost() {
    let nbDays = prompt("How many days ?");

    // If the user doesn’t answer or if the answer is not a number, ask again.
    while (nbDays == '' || isNaN(nbDays)) {
        nbDays = prompt("How many days ?");
    }

    price = 40*Number(nbDays);
    if (Number(nbDays)>10) {
        price = (price - ((5*price)/100));
    }

    return price;
}

// Define a function called totalVacationCost() that returns the total cost of the user’s vacation
function totalVacationCost() {
    let hotelCostT = hotelCost();
    let planeRideCostT = planeRideCost();
    let rentalCarCostT = rentalCarCost();

    return `The car cost: ${rentalCarCostT}, the hotel cost: ${hotelCostT}, the plane tickets cost: ${planeRideCostT}`;
}

console.log( totalVacationCost() )



