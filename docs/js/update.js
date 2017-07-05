/**
 * 更新処理
 * 1フレームごとに実行される更新処理
 *
 * @license MIT
 * @copyright 2017 YuTanaka@AmuseOne
 */
function update() {

    // マウスがクリックされたら
    if (game.input.mousePointer.isDown || game.input.mousePointer1.isDown)
    {
        // マウスのポインタの速度を400にする　400/pixel
        game.physics.arcade.moveToPointer(dude, 400);

        //もし、マウスと重なったら動かないようにする
        if (Phaser.Rectangle.contains(dude.body, game.input.x, game.input.y))
        {
            // 速さを0にする
            dude.body.velocity.setTo(0, 0);
        }
    }
    //  そうでない時、速さ0（マウスがクリックされていないから）
    else
    {
        dude.body.velocity.setTo(0, 0);
    }


    // dudeとstarsグループ内のすべての星が衝突するようになる
    //let hit = game.physics.arcade.collide(dude,stars);

    // dudeと星が重なったら、その星を消す処理(pickStar)を呼び出す
    game.physics.arcade.overlap(dude, stars, pickStar, null, this);

    //starにマウスカーソルが重なっているか？
    /*
    star.forEach(function(st,index,ar) {
        let hit = game.physics.arcade.collide(dude,st);

        if(st.input.pointerOver()){
            // 重なっているので、starを破棄する
            st.kill();
        }
    });
    */

    //dude.x++;
    //dude.y++;

    //dude.x = game.input.x;
    //dude.y = game.input.y;
    //console.log(hit);

}

// dudeに、最初に設定したスプライト、starに、次に設定したグループ内のスプライトが渡される
function pickStar(dude, star){
    star.kill();
}
