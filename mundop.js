class Mundop extends Phaser.Scene{
    constructor() {
        super("Mundop");
    }
    init(){

    }
    preload(){
        this.load.image('background', 'Fondos/background.png');
    }
    create(){
        this.background = this.add.image(this.sys.game.canvas.width / 2, this.sys.game.canvas.height / 2, 'background');
    }
    update(){

    }
}
export default Mundop;