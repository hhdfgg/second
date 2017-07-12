/**
 * 準備処理
 * 画像の読み込みなどを行う
 *
 * @license MIT
 * @copyright 2017 YuTanaka@AmuseOne
 */
function preload() {
        this.load.baseURL = "https://hhdfgg.github.io/second/";
        this.load.crossOrigin = "anonymous";
    
    game.load.image('star', '/assets/images/star.png');
    game.load.spritesheet('dude', '/assets/images/dude.png',32,48);
    game.load.image('baddie', '/assets/images/baddie.png');

}
