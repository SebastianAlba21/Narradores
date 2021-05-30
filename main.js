import Mundo3 from './mundo3.js';
import Mundo from './mundo3.js';
const configuracion = {

    title: 'proyecto',
    url: 'proyect',
    version: '1.0.0',

    type: Phaser.CANVAS,
    backgroundColor: '#FF0000', 
    width: 1920, 
    height: 1000,
    parent: 'container', 
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },


scene: [Mundo3]
}
const game = new Phaser.Game(configuracion);