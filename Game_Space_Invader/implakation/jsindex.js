
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = window.innerHeight
canvas.height = window.innerHeight

const lods = new Lod()
const keys = {
    a:{
        pressed: false
    },
    d:{
        pressed:false
    },
    space:{
        pressed:false
    }
}

function Lodeanimate()
{
    requestAnimationFrame(Lodeanimate)
    c.fillRect(0,0,canvas.width,canvas.height)
    lods.draw()
    lods.update()
   if(keys.a.pressed&&lods.position.x >= 0)
   {
    lods.velocity.x = -7
   }
   else if(keys.d.pressed&&lods.position.x <= 621)
   {
    lods.velocity.x = 7
   }
   else {
    lods.velocity.x = 0 
   }
}

    Lodeanimate();

addEventListener('keydown',(event)=>{
    switch(event.key){
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
        keys.space.pressed = true
        break
        
    }
   
})
addEventListener('keyup',(event)=>{
    switch(event.key){
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