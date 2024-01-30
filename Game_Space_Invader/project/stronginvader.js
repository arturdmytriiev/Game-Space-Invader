class StrongInvader extends Invader {
    constructor({ position }) {
      super({ position });
      this.hits = 0;
      const image = new Image();
      image.src = './space/spaceship4.png';
      image.onload = () => {
        this.image = image;
      }
    }
  
    hit() {
      this.hits++;
      if (this.hits >= 2) {
        return true;
      }
      return false;
    }
  }
  