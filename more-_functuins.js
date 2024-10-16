
function add(a,b){
    let result = a + b;
return result;
}

const result = add (7,8)
console.log(result);

function getReceipt(amountPaid, changeDue){
    const total = 100;
    //const text = amountPaid + ", " + changeDue
    const text = `
AMOUNT PAID: ${amountPaid}
CHANGE DUE: ${changeDue}
---------------------------
TOTAL COST: ${total}
    `;
    return text;
}

console.log(getReceipt(10, 3));