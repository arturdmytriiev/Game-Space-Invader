
class Lod
{
    constructor(){
        this.position = {
            x:120,
            y:450
        }
        this.velocity = {
            x:0,
            y:0
        }
        const image = new Image()
        image.src = "./space/Space-Invaders-Ship.png"
        image.onload = ()=>{
            this.image = image
            this.width = 100
            this.height = 70
            this.position = {
                x:canvas.width/2.5,
                y:canvas.height/1.17
            }
        }
    }
    draw(){
        if(this.image)
        c.drawImage(this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height)
        }
    
        update()
        {
            if(this.image){
            this.draw()
            this.position.x += this.velocity.x
            }
        }
}