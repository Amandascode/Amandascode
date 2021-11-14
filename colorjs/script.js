let colors = ["yellow", "blue", "red", "orange"];
let i = 0;
while (i < colors.length) {
    console.log(colors[i]);
    i++
}

for (i; i < colors.length; i++) {
    console.log(colors[i])
}


colors.forEach(x => console.log(x))

//while loop 4 lines
//for loop 2 lines
//for Each loop 1 line

//bij forEacht hoef je alleen maar de array te veranderen als je een andere array wil gebruiken

const car = { type: "Fiat", model: "500", color: "white" };

for (i in car) {
    console.log(i + ' ' + car[i])
}