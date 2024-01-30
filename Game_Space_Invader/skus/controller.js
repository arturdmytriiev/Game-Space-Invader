function showInstructionMenu() {
    drawInstructionMenu();
}

window.onload = function () {
    const instructionButton = document.getElementById("instrButton");
    instructionButton.onclick = showInstructionMenu;
};