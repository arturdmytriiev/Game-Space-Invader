
class Game {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyGameOver() {
        this.observers.forEach(observer => observer.onGameOver());
    }
}

class GameOverMenu {
    constructor(canvas, c) {
        this.canvas = canvas;
        this.c = c;
    }

    onGameOver() {
        this.display();
    }

    display() {
    this.c.font = '48px Arial';
    this.c.fillStyle = 'white';
    this.c.fillText('Game Over', this.canvas.width / 2 - 130, this.canvas.height / 2 - 50);
    this.c.fillStyle = 'red'
    this.c.fillRect(canvas.width / 2 - 144, canvas.height / 2, 120, 50)
    this.c.fillStyle = 'white'
    this.c.font = '20px Arial'
    this.c.fillText('Main Menu', canvas.width / 2 - 140, canvas.height / 2 + 30)


    this.c.fillStyle = 'green'
    this.c.fillRect(canvas.width / 2 + 30, canvas.height / 2, 100, 50)
    this.c.fillStyle = 'white'
    this.c.font = '24px Arial'
    this.c.fillText('Restart', canvas.width / 2 + 40, canvas.height / 2 + 30)
    }

}
