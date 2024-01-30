const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
canvas.width = 1350
canvas.height = 740


//Premenne
const backgroundImage = new Image()
backgroundImage.src = './space/startScreenBackground.png'
const musicOnButton = document.getElementById('musicOnButton');
const musicOffButton = document.getElementById('musicOffButton');
const button = new Image ()
button.src = './space/button.png'
let isMusicPlaying = false;
const audio = new Audio('./audio/a31df44c3944ea6.mp3');
audio.loop = true;
//------------------------------

//Tlacim na button 
musicOnButton.addEventListener('click', () => {
    isMusicPlaying = true
    audio.play()
    musicOnButton.style.display = 'none'
    musicOffButton.style.display = 'block'
})

musicOffButton.addEventListener('click', () => {
    isMusicPlaying = false
    audio.pause()
    musicOnButton.style.display = 'block'
    musicOffButton.style.display = 'none';
})
//--------------------------


backgroundImage.onload = function () {
    instranim()
}

function instranim() 
{
    ctx.drawImage(backgroundImage, 200, 0, 900, 540)
    ctx.drawImage(button,619,247,80,60)
    requestAnimationFrame(instranim)
}
function drawRect(x, y, width, height, color = 'black') {
    ctx.fillStyle = color
    ctx.fillRect(x, y, width, height)
}


