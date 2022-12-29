function isDivisible(divisor=23) {
    // loop through numbers 0 to 500
    let sum =0;
    for (let index = 0; index <= 500; index++) {
        if (index%Number(divisor) == 0) {
            sum += index;
            console.log(index);
        }
    }

    console.log('Sum:', sum);
}

isDivisible();