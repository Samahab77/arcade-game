// Enemies class
var Enemy = function(x ,y , speed) {

     // define variables applied to each of our instances height, weight and img's of bug
    this.speed = speed;
    this.y= y;
    this.x= x;
   this.sprite = 'images/enemy-bug.png';
     
};


// Update the enemy's position
Enemy.prototype.update = function(dt) {
   
    // Enemy with rundom speed 
    this.x += this.speed * dt;
    if(this.x > 505 ){
        this.x = -50;
        this.speed= 100 +Math.floor(Math.random()*300)
    }

 // collision function, 
      if (player.x < this.x + 80 &&
           player.x + 80 > this.x &&
           player.y < this.y + 60 &&
           60 + player.y > this.y) {
           player.x = 202;
           player.y = 400;
       };
  

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


 // player class and define variable for player to move along x and y
 // This class requires an update(), render() and
// a handleInput() method.
let Player = function (x, y) {
    this.x = x;
    this.y = y;
//images for player 
    this.player = 'images/char-boy.png';
    
}

Player.prototype.update = function (dt){

}
//render enemy into the game 
Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.player), this.x , this.y);

};

//// Allows the user to use the arrow keys 
Player.prototype.handleInput = function(keys){
     // Enables user on left arrow key to move left on the x axis witout move out of canvas 
    if (keys == 'left' && this.x > 0){
        this.x -= 102;
    }
     // Enables user on right arrow key to move right on the x axis witout move out of canvas 

    if(keys == 'right' && this.x< 405 ){
        this.x += 102;
    }
// Enables user on up arrow key to move left on the y axis  

     if (keys == 'up' && this.y > 0) {
         this.y -= 83;
     }
     // Enables user on down arrow key to move left on the y axis  

     if (keys == 'down' && this.y < 405) {
         this.y += 83;
     }
     //if user reach the water ,the user will reset to the starting postion
     if (this.y < 0){
         setTimeout(() => {
             this.x=200;
             this.y=400;
         },600);
     };
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const allEnemies = [];
//location of enemy along y axis
let enemyLocation = [63, 147, 230]


enemyLocation.forEach(function (lY) {
    enemy = new Enemy(0, lY,200)
    allEnemies.push(enemy)
;})

let player = new Player(202, 400)
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
