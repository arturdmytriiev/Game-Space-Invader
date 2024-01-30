class StrongGrid extends Grid {
    constructor() {
        super();
        this.invaders = [];
        const columns = Math.floor(Math.random() * 10 + 5);
        const rows = Math.floor(Math.random() * 7 + 1);

        for (let i = 0; i < columns; i++) {
            for (let j = 0; j < rows; j++) {
                this.invaders.push(new StrongInvader({ position: { x: i * 30, y: j * 30 } }));
            }
        }
    }
}
