/*
Diypa571
2021-02-1
*/


// This is the init function, we need it for window onload
function init()
{
    // Creating a reference to the the element with id equal to menuToggle
menuElem = document.getElementById("menuToggle");
// addEventListener for the element function call
menuElem.addEventListener("click",   displaySidebar);
} 

var inc = 0;
function displaySidebar() {
++inc;
var x = document.getElementById("wrapper");
if (inc === 1){
x.className = "menuToggle";
}

if (x.className === "menuToggle") {
x.className += " toggled";
} else {
x.className = "menuToggle";
}
}

 
window.onload = init;