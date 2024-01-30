//-------------------------------------
// MODEL
var button_back
//-------------------------------------
// View
function button_backs() {
    window.location='index.html'
}
//-------------------------------------
// Controller
function backs() {
    button_backs()
}

window.onload = function() {
    button_back = document.getElementById("backinstrButton")
    button_back.onclick = backs
}