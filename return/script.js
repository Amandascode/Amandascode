const overHundred = function(number) {
    if (number > 100) {
        return true;
    } else {
        return false;
    }
};
grootte = overHundred(300);
//console.log(grootte);

//brenda spreekt
const toegangClub = function(age, maxVisit, currentVisit) {
    if (age < 18) { return "this is a club for adults"; } else {
        if (currentVisit + 1 > maxVisit) { return "it's too busy now come back later"; } else { return "come in"; }
    }
}

console.log(toegangClub(27, 400, 750));

//gemiddelde
const calcAverage = function(a, b, c, d, e) {
    return Math.round(a + b + c + d + e / 5)
};
console.log(calcAverage(7, 9, 34, 73, 38));
console.log(calcAverage(22, 39, 4, 53, 8));
console.log(calcAverage(5, 10, 15, 20, 25));
//produce