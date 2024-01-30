function drawInstructionMenu() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    ctx.font = "24px Arial";
    ctx.fillText("Instruction Menu", 300, 50);

    ctx.font = "18px Arial";
    ctx.fillText("1. Press 'Instruction' button to open the instruction menu.", 100, 100);
    // Добавьте дополнительные инструкции по мере необходимости
}