//function declaration
function rekenSom(number1, number2) {
    sq1 = (number1 * number1);
    sq2 = (number2 * number2);
    sum = sq1 + sq2
    sq3 = sum * sum
    return sq3;
}

console.log(rekenSom(2, 4));

//function expression
const rekenSom1 = function(number1, number2) {
    sq1 = (number1 * number1);
    sq2 = (number2 * number2);
    sum = sq1 + sq2
    sq3 = sum * sum
    return sq3;
};
console.log(rekenSom1(3, 6));

//arrow function
const rekenSom2 = (number1,
    number2) => {
    sq1 = (number1 * number1);
    sq2 = (number2 * number2);
    sum = sq1 + sq2
    sq3 = sum * sum
    return sq3;
};
console.log(rekenSom2(2, 9));