class Lod {
    constructor()
    {
        this.velocity = {
            x:0,
            y:0
        }
        this.opacity = 1
    const image = new Image()
    image.src = './space/Space-Invaders-Ship.png'
    image.onload = () => {
        this.image = image
        this.width = image.width*0.15
        this.height = image.height*0.1
        this.position = {
            x: canvas.width / 2 - this.width / 2,
            y: canvas.height - this.height - 10
        }
      }
    }
    reset() {
        this.position.x = canvas.width / 2 - this.width / 2
        this.position.y = canvas.height - this.height - 10
        this.velocity.x = 0
        this.velocity.y = 0
    }
    
    draw(){
        c.globalAlpha
        if(this.image)
        c.drawImage(this.image, 
            this.position.x, 
            this.position.y,
            this.width, 
            this.height)
    }
    update(){
        if (this.image)
        {
         this.draw()
         this.position.x += this.velocity.x  
        }
    }
}