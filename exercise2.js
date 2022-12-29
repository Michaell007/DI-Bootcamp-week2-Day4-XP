function calculateTip() {
    let amount = prompt("Enter the amount");
    if (Number(amount)<50) {
        let tip = ((20*Number(amount))/100);
        console.log(`the tip amount and the final bill ${Number(amount)+tip}.`);
    } else if(50<= Number(amount) <=200) {
        let tip = ((15*Number(amount))/100);
        console.log(`the tip amount and the final bill ${Number(amount)+tip}.`);
    } else if(Number(amount)>200) {
        let tip = ((10*Number(amount))/100);
        console.log(`the tip amount and the final bill ${Number(amount)+tip}.`);
    }
}
calculateTip();