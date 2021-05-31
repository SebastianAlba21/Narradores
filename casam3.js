export default class casam3 extends Phaser.Scene{
    constructor() {
        super("casam3");
    }
    init() {

    }

    preload() {
        this.load.image('casa', 'Fondos/casa.jpg');
        this.load.spritesheet('personaje3',
            'Personajes/personaje3.png',
            { frameWidth: 155, frameHeight: 230 }
        );
    }

    create() {
        this.cursors = this.input.keyboard.createCursorKeys();
        this.casa = this.add.image(this.sys.game.canvas.width / 2, this.sys.game.canvas.height / 2, 'casa');
        //this.player = this.physics.add.sprite(this.sys.game.canvas.width / 3, this.sys.game.canvas.height, 'personaje')
        this.player = this.physics.add.sprite(this.sys.game.canvas.width / 3, this.sys.game.canvas.height, 'personaje3')
       .setGravityY(100)
       .setBounce(0.2)
       .setCollideWorldBounds(true);
        this.animar();
    }

    update(time, delta) {
        if (this.input.keyboard.checkDown(this.cursors.space, 250)) {
            this.player.setVelocity(0, 0)
                .anims.play('turn');
            //this.fire(this.player);
        }
        else if (this.cursors.left.isDown) {
            this.player.setVelocityX(-160)
                .anims.play('left', true);
        }
        else if (this.cursors.right.isDown) {
            this.player.setVelocityX(160)
                .anims.play('right', true);
        }
        else if (this.cursors.up.isDown) {
            this.player.setVelocity(-160)
            this.player.setVelocityX(0)
                .anims.play('jump', true);
        }
        else {
            this.player.setVelocityX(0)
                .anims.play('turn');
        }
    }
    animar() {
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('personaje3', { start: 1, end: 2 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [{ key: 'personaje3', frame: 3 }],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('personaje3', { start: 4, end: 6 }),
            frameRate: 10,
            repeat: -1
        });
    }
}