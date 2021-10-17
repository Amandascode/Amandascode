function paintWalls(paintcolor) {
    console.log("paint the wall " + paintcolor);
};



const color1 = "lightgreen";
const color2 = "hysterlicalorange";
paintWalls(color1);
paintWalls(color2);

function orientationWalls(wallSide, wallColor) {
    console.log("the " + wallSide + " wall has been painted " + wallColor);
}

const noord = "North";
const zuid = "South";

//orientationWalls(wallSide1);

const greenish = "brightgreen";
const blueish = "lightblue";
//orientationWalls(wallSide2, wallColor2);
orientationWalls(blueish, zuid);