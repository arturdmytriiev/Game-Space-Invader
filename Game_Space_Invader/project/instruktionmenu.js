const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
canvas.width = 1350
canvas.height = 740



const backgroundImage = new Image()
backgroundImage.src = './space/startScreenBackground.png'

backgroundImage.onload = function () {
    instranim()
}

function instranim() 
{
    ctx.drawImage(backgroundImage, 200, 0, 900, 540)
    drawMenuText()
    requestAnimationFrame(instranim)
}

function drawText(text, x, y, fontSize = '20px', color = 'black', textAlign = 'center') {
    ctx.font = `${fontSize} Arial`
    ctx.fillStyle = color
    ctx.textAlign = textAlign
    ctx.fillText(text, x, y)
}

function drawRect(x, y, width, height, color = 'black') {
    ctx.fillStyle = color
    ctx.fillRect(x, y, width, height)
}

function drawMenuText() {
    drawText('Návod na použitie', canvas.width / 2, 150, '40px', 'white')
    drawText('Inštrukcie:', canvas.width / 2, 200, '30px', 'white')
    drawText('1.Na pohyb používajte šípky (a - doľava, b - doprava, space - strieľať).', canvas.width / 2, 260, '20px', 'white')
    drawText('2.Stlačením tlačidla Start spustíte hru.', canvas.width / 2, 300, '20px', 'white')
    drawText('3.Stlačením tlačidla Setting zmeníte nastavenia ', canvas.width / 2, 340, '20px', 'white')
    drawText('4.Stlačením pravidla sa zobrazia pravidlá hry', canvas.width / 2, 380, '20px', 'white')
}
