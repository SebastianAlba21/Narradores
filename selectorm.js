export default class selectorm extends Phaser.Scene{
    constructor() {
        super("selectorm");
    }
    init(){

    }
    preload(){
        this.load.image('background_p', 'ps/background_p.png');
        this.load.image('p1', 'ps/personaje1.png');
        this.load.image('p2', 'ps/personaje2.png');
        this.load.image('p3', 'ps/personaje3.png');


    }
    create(){
        this.cursors = this.input.keyboard.createCursorKeys();
        this.background = this.add.image(this.sys.game.canvas.width / 2, this.sys.game.canvas.height / 2, 'background_p');
        var sprite = this.add.sprite(500, 700, 'p1').setInteractive();
        var sprite2 = this.add.sprite(1000, 700, 'p2').setInteractive();
        var sprite3 = this.add.sprite(1500, 700, 'p3').setInteractive();
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
        this.scene.start('Mundo');
    }
    handleContinue2() {
        this.scene.start('casam2');
    }
    handleContinue3() {
        this.scene.start('casam3');
    }
} 