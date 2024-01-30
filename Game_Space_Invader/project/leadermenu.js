const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
canvas.width = 1350
canvas.height = 740



const backgroundImage = new Image()
backgroundImage.src = './space/startScreenBackground.png'

const leaderboard = []

  leaderboard.sort((a, b) => b.score - a.score)

backgroundImage.onload = function () {
    instranim()
}

function drawLeaderboard() {
    const startX = 400;
    const startY = 100;
    const lineHeight = 40;
  
    ctx.fillStyle = 'white'
    ctx.font = '24px Arial'
    ctx.fillText('Leaderboard', startX, startY - lineHeight)
  
    leaderboard.slice(0, 10).forEach((player, index) => {
      const y = startY + index * lineHeight
      ctx.fillText(`${index + 1}. ${player.name}: ${player.score}`, startX, y)
    })
  }

function instranim() 
{
    ctx.drawImage(backgroundImage, 200, 0, 900, 540)
    drawLeaderboard()
    requestAnimationFrame(instranim)
}
function drawRect(x, y, width, height, color = 'black') {
    ctx.fillStyle = color
    ctx.fillRect(x, y, width, height)
}

