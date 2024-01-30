const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
canvas.width = 1350
canvas.height = 740



const backgroundImage = new Image()
const keyimage = new Image ()
const spacimage = new Image ()
backgroundImage.src = './space/startScreenBackground.png'
keyimage.src = './photo/Screenshot 2023-04-06 114231.jpg'
spacimage.src = './photo/Screenshot 2023-04-06 121029.jpg'

backgroundImage.onload = function () {
    instranim()
}

function instranim() 
{
    ctx.drawImage(backgroundImage, 200, 0, 900, 540)
    ctx.drawImage(keyimage,300,410,150,80)
    ctx.drawImage(spacimage,810,380,200,110)
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
    drawText('Pravidla hri:', canvas.width / 2, 150, '40px', 'white')
    drawText('1.Ovládajte hru pomocou klávesnice (a-vľavo, b-vpravo, space - strieľajte)', canvas.width / 2, 190, '20px', 'white')
    drawText('2.Hra pokračuje, kým súperov laser nezasiahne loď ovládanú hráčom.  ', canvas.width / 2, 230, '20px', 'white')
    drawText('3.Hráč ovláda loď, ktorá strieľa na nepriateľov. Keď hráč zničí nepriateľov, získa + 50 bodov.  ', canvas.width / 2, 270, '20px', 'white')
    drawText('4.Úlohou hráča je získať čo najviac bodov. ', canvas.width / 2, 310, '20px', 'white')
    drawText('5.V hre sú 3 typy nepriateľov. Majú rôzne obrázky a každý nepriateľ bude potrebovať iný počet zásahov na znic', canvas.width / 2 - 30, 350, '17px', 'white')
}

