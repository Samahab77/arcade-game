// Enemies our player must avoid
var Enemy = function(x ,y , speed) {
    this.speed = speed;
    this.y= y;
    this.x= x;
   this.sprite = 'images/enemy-bug.png';
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
 
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    if(this.x > 505 ){
        this.x = -50;
        this.speed= 100 +Math.floor(Math.random()*300)
    }

    // collsion function
     if (player.x < this.x + 80 &&
           player.x + 80 > this.x &&
           player.y < this.y + 60 &&
           60 + player.y > this.y) {
           player.x = 202;
           player.y = 405;
       };
  

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
let Player = function(x ,y){
    this.x = x;
    this.y = y;

    this.player = 'images/enemy-bug.png';
    
}
// This class requires an update(), render() and
// a handleInput() method.
Player.prototype.update = function (dt){

}

Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.player), this.x , this.y);

};

Player.prototype.handleInput = function(keys){
    if (keys == 'left' && this.x > 0){
        this.x -= 102;
    }

    if(keys == 'right' && this.x< 405 ){
        this.x += 102;
    }
     if (keys == 'up' && this.y > 0) {
         this.y -= 83;
     }
     if (keys == 'down' && this.y < 405) {
         this.y += 83;
     }
     if (this.y < 0){
         setTimeout(() => {
             this.x=202;
             this.y=404
         },700);
     };
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const allEnemies = [];

let enemyLocation = [63, 147, 230]


enemyLocation.forEach(function (lY) {
    enemy = new Enemy(0, lY,200)
    allEnemies.push(enemy)
;})

let player = new Player(202, 404)
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
