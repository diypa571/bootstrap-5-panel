# bootstrap-5-panel

The Bootstrap 5 Alpha first in June 2020. <br>
Fortunatly, for the new Bootstrap version, there is no need to use Jquery. 
This means we need to write some pure Javascript/CSS code for the sidebar to work as nice as prev versions of Bootstrap with Jquery
 

Demo: https://chimerical-trifle-114efd.netlify.app/



/* <br />
Diypa571  <br />
2021-02-1  <br />
*/  <br />


// This is the init function, we need it for window onload  <br />
function init()   <br />
{  <br />
    // Creating a reference to the element with id equal to menuToggle  <br />
menuElem = document.getElementById("menuToggle");  <br />
// addEventListener for the element function call  <br />
menuElem.addEventListener("click",   displaySidebar);  <br />
}   <br />

var inc = 0;  <br />
function displaySidebar() {  <br />
++inc;  <br />
var x = document.getElementById("wrapper");  <br />
if (inc === 1){  <br />
x.className = "menuToggle";  <br />
}  <br />

if (x.className === "menuToggle") {  <br />
x.className += " toggled";  <br />
} else {  <br />
x.className = "menuToggle"; <br />
}  <br />
} <br />

  <br /> <br />
window.onload = init; <br /> <br />
