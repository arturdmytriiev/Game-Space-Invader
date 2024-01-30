//-------------------------------------
// MODEL
var button;
var button_l
var button_p
//-------------------------------------
// View
function button_step() {
    window.location='instruktion.html'
}
function button_lead ()
{
 window.location = 'setting.html'
}
function button_prav ()
{
    window.location = 'pravidla.html'
}
//-------------------------------------
// Controller
function step() {
    button_step()
}
function lead ()
{
    button_lead ()
}
function prav ()
{
    button_prav ()
}

window.onload = function() {
    button = document.getElementById("instrButton")
    button_l = document.getElementById("leadButton")
    button_p  = document.getElementById("pravButton")
    button_p.onclick = prav
    button_l.onclick = lead
    button.onclick = step
}