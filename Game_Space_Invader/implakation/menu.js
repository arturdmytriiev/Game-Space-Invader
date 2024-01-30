const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = window.innerHeight
canvas.height = window.innerHeight
function animate()
{
    requestAnimationFrame(animate)
    c.fillRect(0,0,canvas.width,canvas.height)
   
}
animate() 

