//--make a wrapper for document.getElementById();
function id(idString){
    return document.getElementById(idString);
}
// gather our elements by id
var remPixels = id("remPixels");

//make handler for window resize and loading
function adjustRem(){
    var rem = document.documentElement.style.fontsize;
    remPixels.innerHTML = "Root ems = " + rem;
    
}
//Assign the handler to window.resize and load events
window.onload= adjustRem;
window.onresize = adjustRem;
