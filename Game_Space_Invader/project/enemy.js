class Invader {
    constructor({position})
    {
        this.velocity = {
            x:0,
            y:0
        }
    const image = new Image()
    image.src = './space/invader.png'
    image.onload = () => {
        this.image = image
        this.width = image.width*1
        this.height = image.height*1
        this.position = {
            x: position.x,
            y: position.y
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

    update({velocity}){
        if (this.image)
        {
         this.draw()
         this.position.x += velocity.x 
         this.position.y += velocity.y  
        }
    }
//výstrely nepriateľa 
    shoot(invaderProjectiles)
    {
        invaderProjectiles.push(new InvaderProjectile({
           position:{
            x: this.position.x + this.width / 2,
            y: this.position.y + this.height
           },
           velocity:{
            x:0,
            y:5
           }
        }))
    }
//------------------------------------------------------

}