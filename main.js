import Mundo from './mundo.js';
import Mundo2 from './mundo2.js';
import Mundo3 from './mundo3.js';

const configuracion = {

    title: 'proyecto',
    url: 'proyect',
    version: '1.0.0',

    type: Phaser.CANVAS,
    backgroundColor: '#FF0000', 
    width: 1920, 
    height: 1080,
    parent: 'container', 
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },


scene: [menu1, Mundo, Mundo2, Mundo3]
}
const game = new Phaser.Game(configuracion);