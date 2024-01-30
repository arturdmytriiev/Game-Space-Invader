const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = 1350
canvas.height = 740 

const backgroundImage = new Image()
backgroundImage.src = './space/1645289641_1-phonoteka-org-p-fon-dlya-rabochego-stola-zvezdi-1.jpg'

const lods = new Lod()
const projectiles = []
const grid = []
const invaderProjectiles = []

const games = new Game()
const gameOverMenu = new GameOverMenu(canvas, c)
let score = 0
document.addEventListener("DOMContentLoaded", () => {
const scoreboard = document.getElementById("scoreboard")
})

games.addObserver(gameOverMenu)

const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    space: {
        pressed: false
    }
}

let frames = 0

let game = {
    over: false,
    active: true
}



function updateScore(points) {
    score += points;
    scoreboard.innerText = `Score: ${score}`
}

function restartGame() {
    frames = 0
    game.active = true
    game.over = false
    lods.reset()
    grid.length = 0
    projectiles.length = 0
    invaderProjectiles.length = 0
    updateScore(0)
    score = 0
    scoreboard.innerText = 'Score: 0';
    animate()
}

function stopBackgroundMusic() {
    const backgroundMusic = document.getElementById("backgroundMusic");
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
}

function playBackgroundMusic() {
    const backgroundMusic = document.getElementById("backgroundMusic");
    backgroundMusic.play();
}

function exitToMainMenu() {
    game.active = false;
    game.over = false;
    lods.reset();
    grid.length = 0;
    projectiles.length = 0;
    invaderProjectiles.length = 0;
    updateScore(0);
    score = 0;
    scoreboard.innerText = 'Score: 0';
    document.querySelector('#startScreen').style.display = 'flex';
}



canvas.addEventListener('click', (event) => {
    if (game.active) return

    const mouseX = event.clientX
    const mouseY = event.clientY

    if (mouseX >= canvas.width / 2 - 150 && mouseX <= canvas.width / 2 - 30 &&
        mouseY >= canvas.height / 2 && mouseY <= canvas.height / 2 + 50) {
        exitToMainMenu()
        stopBackgroundMusic()
        game.active = false
        game.over = true
    } else if (mouseX >= canvas.width / 2 + 30 && mouseX <= canvas.width / 2 + 130 &&
        mouseY >= canvas.height / 2 && mouseY <= canvas.height / 2 + 50) {
        restartGame()
    }
})

function animate() {

    if (!game.active) {
        return
    }
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    c.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height)
    lods.update()

    invaderProjectiles.forEach((invaderProjectile, index) => {
        if(invaderProjectile.position.y + invaderProjectile.height >= canvas.height)
        {
            setTimeout(() => {
                invaderProjectiles.splice(index,1)
            },0)
        }
        else
        {
            invaderProjectile.update()
        }

        if (invaderProjectile.position.y + invaderProjectile.height >= lods.position.y
            && invaderProjectile.position.x + invaderProjectile.width >= lods.position.x
            && invaderProjectile.position.x <= lods.position.x + lods.width) {
            console.log('you lose ')
            game.active = false
            games.notifyGameOver()
        }
    }) 

    projectiles.forEach(projectile => {
        projectile.update()
    })

    grid.forEach(grid => {
        grid.update()

        if (frames % 150 === 0 && grid.invaders.length > 0) {
            grid.invaders[Math.floor(Math.random() * grid.invaders.length)].shoot(invaderProjectiles)
            playInvaderShootSound();
        }

        grid.invaders.forEach((invader, i) => {
            invader.update({ velocity: grid.velocity })

            projectiles.forEach((projectile, j) => {
                if (projectile.position.y - projectile.radius <= invader.position.y + invader.height &&
                    projectile.position.x + projectile.radius >= invader.position.x &&
                    projectile.position.x - projectile.radius <= invader.position.x + invader.width &&
                    projectile.position.y + projectile.radius >= invader.position.y) {
                    setTimeout(() => {
                        const invaderFound = grid.invaders.find(invader2 => {
                            return invader2 == invader
                        })

                        const projectileFound = projectiles.find((projectile2) => projectile2 === projectile)

                        if (invaderFound && projectileFound) {
                            grid.invaders.splice(i, 1)
                            projectiles.splice(j, 1)
                            updateScore(15);
                        }
                    }, 0)
                }
            })
        })
    })

    if (keys.a.pressed && lods.position.x >= 0) {
        lods.velocity.x = -7
    } else if (keys.d.pressed && lods.position.x + lods.width <= canvas.width) {
        lods.velocity.x = 7
    } else {
        lods.velocity.x = 0
    }

    if (frames % 1500 === 0) {
        grid.push(new Grid())
    }

    frames++

}

document.querySelector('#startButton').addEventListener('click',()=>
{
    game.over = false
    game.active = true
    if (game.over == false && game.active == true )
    {
    document.querySelector('#startScreen').style.display = 'none'
    playBackgroundMusic();
    animate()
    }
    
})


addEventListener('keydown', (event) => {
    if (game.over) return
    switch (event.key) {
        case 'a':
            console.log('left')
            keys.a.pressed = true
            break
        case 'd':
            console.log('right')
            keys.d.pressed = true
            break
        case ' ':
            console.log('space')
            projectiles.push(new Projectile({
                position: {
                    x: lods.position.x + 36,
                    y: lods.position.y
                },
                velocity: {
                    x: 0,
                    y: -5
                }
            }))
            playLodShootSound();
            break
            }
            })
            
            addEventListener('keyup', (event) => {
            switch (event.key) {
            case 'a':
            keys.a.pressed = false
            break
            case 'd':
            keys.d.pressed = false
            break
            case ' ':
            keys.space.pressed = false
            break
            }
            })
