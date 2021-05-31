import Mundop from './mundop.js'
import Mundo from './mundo.js';
import Mundo2 from './mundo2.js';
import Mundo3 from './mundo3.js';
import selectorm from './selectorm.js';
import casam2 from './casam2.js';
import casam3 from './casam3.js';
import selectorm2 from './selectorm2.js';
import carrom2 from './carrom2.js';
import carrom3 from './carrom3.js';
import selectorm3 from './selectorm3.js';
import parquem2 from './parquem2.js';
import parquem3 from './parquem3.js';

const configuracion = {

    title: 'proyecto',
    url: 'proyect',
    version: '1.0.0',

    type: Phaser.CANVAS,
    backgroundColor: '#fffff', 
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
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'phaser-example',
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },


scene: [Mundop, selectorm, Mundo, casam2, casam3, selectorm2, Mundo2, carrom2, carrom3, selectorm3, Mundo3 , parquem2, parquem3 ]
}
const game = new Phaser.Game(configuracion);