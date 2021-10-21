const oldEnough = function(Age) {
    if (Age >= 18) { return true; } else { return false; }
};

console.log(oldEnough(18));

const ageRight = function(Age) {
    if (oldEnough(Age)) { return ("goedemiddag ouwe;") } else { return ("Hello Kiddo") }
};

console.log(ageRight(18));