function getReceipt(days, wantsToll, wantsGPS, wantsRoadSide, isUnderAge){
    const rentalDay = 29.99
    const surchargePercent = 1.30
    let surchageAmount = 0
    let carRental = rentalDay * days;
    if(isUnderAge){
        surchageAmount = surchargePercent * carRental;
        //carRental = carRental + surchageAmount;
        carRental += surchageAmount;
    }
    let optionsSubtotal = 0;
    if(wantsToll){
        optionsSubtotal += 3.95 * days;
    }
    if(wantsGPS){
        optionsSubtotal += 2.95 * days;
    }
    if(wantsRoadSide){
        optionsSubtotal += 2.95 * days;
    }

    const grandTotal = (carRental + optionsSubtotal + surchageAmount).toFixed(2);
    return `
        Car rental: $${carRental.toFixed(2)}
           Options: $${optionsSubtotal.toFixed(2)}
Under 25 surcharge: $${surchageAmount.toFixed(2)}

         Total Due: $${grandTotal}
    `;
}
document.addEventListener("DOMContentLoaded", ()=>{
    const pickupDate = document.getElementById("pickupDate");
    const numberOfDays = document.getElementById("numberOfDays");

    const toll = document.getElementById("toll");
    const gps = document.getElementById("gps");
    const roadside = document.getElementById("roadside");

    const notUnder = document.getElementById("notUnder");
    const isUnder = document.getElementById("isUnder");

    const estimateButton = document.getElementById("estimateButton");

    const receiptOutput = document.getElementById("receiptOutput");

    estimateButton.addEventListener("click", ()=>{
        receiptOutput.innerText = getReceipt(
            numberOfDays.value,
            toll.checked,
            gps.checked,
            roadside.checked,
            isUnder.checked,
         );
    });

});


//end dom content loaded