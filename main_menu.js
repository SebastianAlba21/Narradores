export default class main_menu extends Phaser.Game{
    init() {

    }
    preload() {
        this.load.image('background', 'Fondos/background.png');

    }
    create() {
        //this.cursors = this.input.keyboard.createCursorKeys();
        this.background = this.add.image(this.sys.game.canvas.width / 2, this.sys.game.canvas.height / 2, 'background');
    }
}