const vatAmount = function(baseprice, vatpercentage) {
    return baseprice * (vatpercentage / 100.);
};

const priceIncVat = function(baseprice, vatpercentage) {
    return baseprice + vatAmount(baseprice, vatpercentage);
};



console.log(priceIncVat(500, 21));
const priceincvat = priceIncVat(500, 21)

//tweede opdracht

const basePrice = function(priceIncVat, vatpercentage) {
    const baseprice = priceIncVat / (1 + (vatpercentage / 100.))
    return baseprice
}

const AmountEx = function(priceIncVat, vatpercentage) {
    const baseprice = basePrice(priceIncVat, vatpercentage)
    const vatAmount = baseprice * vatpercentage / 100.
    return [baseprice, vatAmount]
}

console.log(AmountEx(priceincvat, 21))