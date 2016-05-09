/*
 * Vars
 */
var game, keys,
    player;

/*
 * Key presses
 */
document.body.addEventListener("keydown", function (e) {
    keys.press (e.keyCode);
});
document.body.addEventListener("keyup", function (e) {
    keys.release (e.keyCode);
});

/*
 * INIT Phase
 */
(function () { // INIT
    var c = document.getElementById ("game");
    var bitSize = 5;
    game = new Game (c, bitSize);
    keys = new Keyring ();
    
    /*
    player = new Player (
        (c.width / bitSize / 2), 
        (c.height / bitSize / 2)
    );
    */
    /*
    game.spawnCoin ();
    game.spawnEnemy ();
    */
    
    Draw ();
    GameLoop ();
})();

/*
 * UPDATE Loop
 */
function GameLoop () {
    window.requestAnimationFrame(GameLoop);
    
    var now = Date.now ();
    
    if (now >= (game.frame.last + game.frame.frequency) &&
       game.paused === false) {
        /*
            Updates
        */
        game.frame.update ();

        //player.move (keys.current.state);

        /*
            Execute Draws
        */
        Draw ();
    }
    
    //console.log (keys.current);
};

function Draw () {
    game.drawOctagon (100, 100, 50)
};