const age = 22;
const isFemale = true;
const driverStatus = "Bob";
let firstName = "Sarah";
const totalAmount = 35;


console.log(age);
if (age >= 18) {
    console.log("je mag naar binnen");
} else {
    console.log("je bent te jong, ga maar lekker buitenspelen");
}

if (isFemale == true) {
    console.log("welkom mevrouw");

} else {
    console.log("meneer het is ladies only, tot over een andere keer");
}

if (driverStatus === "Bob") {
    console.log("je bent veilig, je mag rijden");
} else {
    console.log("je bent hardstikke bezopen, ga maar lopen");
}
if (age >= 18 && age <= 25) {
    console.log("je krijgt 50% korting");
}
if (firstName === "Abraham" || firstName === "Sarah") {
    console.log("gefeliciteerd, je krijgt een gratis biertje");
}
if (totalAmount >= 100) {
    console.log("gefeliciteerd, je krijgt een fles champagine");
} else
if (totalAmount >= 50 && totalAmount <= 100) {
    console.log("gefeliciteerd, je krijgt een portie nachos");

} else {
    if (totalAmount >= 25 && totalAmount <= 50) {
        console.log("gefeliciteerd, je krijgt een portie nachos");
    }
}