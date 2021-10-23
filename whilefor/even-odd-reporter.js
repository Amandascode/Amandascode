function isOdd(num) {
    if (num % 2 == 0) { return "even" } else { return "odd" };
}

for (let i = 0; i <= 20; i++) {
    let v = isOdd(i)
    console.log(`Is ${i} even or odd? ${v}`);
}

/*function isOdd($i) { return num % 2; }
console.log(isOdd);
console.log("2 is " + isOdd(2));
console.log("3 is " + isOdd(3));
console.log("4 is " + isOdd(4));
*/