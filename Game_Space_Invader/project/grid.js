
class Grid {
    constructor()
    {
        this.position = {
            x:0,
            y:0
        }
        this.velocity = {
            x:3,
            y:0
        }
        //stĺpce a riadky výskytu nepriateľa 
        this.invaders = []
        const columns =Math.floor(Math.random()*10+5)
        const rows =Math.floor(Math.random()*7+1)

        this.width = columns * 30

        for(let i = 0; i < columns; i++){
        for(let j = 0; j < rows; j++){
            const invaderType = Math.random() > 0.5 ? Invader : StrongInvader;
            this.invaders.push(new invaderType({ position: { 
                x: i * 30, 
                y: j * 30 } }));
        }
    }
        console.log(this.invaders)
    }
   //--------------------------------------------------------
    update(){
     this.position.x += this.velocity.x
     this.position.y += this.velocity.y
     
this.velocity.y = 0

     if(this.position.x + this.width >= canvas.width || this.position.x <= 0){
        this.velocity.x = -this.velocity.x
        this.velocity.y = 30
     }
    }
}
