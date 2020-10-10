var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var goal1, goal2;
var form, player, game;
var paddle1, paddle2, ball;
//var cars, car1, car2, car3, car4;
var cars=[]
function preload(){
backgroundImage=loadImage("images/images.jpg");

}
function setup(){
  canvas = createCanvas(800, 1000);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background("backgroundImage");
 // background
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
    drawSprites();
  }
}

