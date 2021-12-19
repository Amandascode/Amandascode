let toggleNavStatus = false

let toggleNav = function() {
    let getSidebar = document.querySelector(".nav-sidebar")
    let getSidebarUl = document.querySelector(".nav-sidebar ul")
    let getSidebarLinks = document.querySelector(".nav-sidebar li")
    if (toggleNavStatus === false) {
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "200px";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }
        toggleNavStatus = true;
    } else if (toggleNavStatus === true) {
        getSidebar.style.width = "50px";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "0";
        }
        getSidebarUl.style.visibility = "hidden";
        toggleNavStatus = false;
    }
}

var red = document.getElementById("red")
var home = document.getElementById("home")
var green = document.getElementById("green")
var orange = document.getElementById("orange")

red.addEventListener("click", function() { document.body.style.background = "red" })
home.addEventListener("click", function() { document.body.style.background = "gray" })
green.addEventListener("click", function() { document.body.style.background = "green" })
orange.addEventListener("click", function() { document.body.style.background = "orange" })

red.addEventListener("click", function() {
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebar = document.querySelector(".nav-sidebar")
    getSidebarUl.style.visibility = "hidden";
    getSidebar.style.width = "50px";
    toggleNavStatus = false;
})

green.addEventListener("click", function() {
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebar = document.querySelector(".nav-sidebar")
    getSidebarUl.style.visibility = "hidden";
    getSidebar.style.width = "50px";
    toggleNavStatus = false;
})
home.addEventListener("click", function() {
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebar = document.querySelector(".nav-sidebar")
    getSidebarUl.style.visibility = "hidden";
    getSidebar.style.width = "50px";
    toggleNavStatus = false;
})
orange.addEventListener("click", function() {
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebar = document.querySelector(".nav-sidebar")
    getSidebarUl.style.visibility = "hidden";
    getSidebar.style.width = "50px";
    toggleNavStatus = false;
})