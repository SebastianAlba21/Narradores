class Mundop extends Phaser.Scene{
    constructor() {
        super("Mundop");
    }
    init(){

    }
    preload(){
        this.load.image('background', 'Fondos/background.png');
        this.load.image('btn_auto', 'botones/auto.png');
        this.load.image('btn_casa', 'botones/casa.png');
        this.load.image('btn_parque', 'botones/parque.png');


    }
    create(){
        this.cursors = this.input.keyboard.createCursorKeys();
        this.background = this.add.image(this.sys.game.canvas.width / 2, this.sys.game.canvas.height / 2, 'background');
        var sprite = this.add.sprite(500, 700, 'btn_casa').setInteractive();
        var sprite2 = this.add.sprite(1000, 700, 'btn_auto').setInteractive();
        var sprite3 = this.add.sprite(1500, 700, 'btn_parque').setInteractive();
    }
    update(time, delta){
        if (this.cursors.left.isDown) {
            this.handleContinue();
        }
        else if (this.cursors.up.isDown){
            this.handleContinue2()
        }
        else if (this.cursors.right.isDown){
            this.handleContinue3()
        }
    }
    handleContinue() {
        this.scene.start('selectorm');
    }
    handleContinue2() {
        this.scene.start('selectorm2');
    }
    handleContinue3() {
        this.scene.start('selectorm3');
    }
}
export default Mundop;