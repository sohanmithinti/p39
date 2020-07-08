var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var run;

var track, run_img;

function preload(){
  track = loadImage("images/htrack.jpg");
  run_img = loadImage("images/runner.png");
  //car2_img = loadImage("../images/car2.png");
  //car3_img = loadImage("../images/car3.png");
  //car4_img = loadImage("../images/car4.png");
  //ground = loadImage("../images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  run.velocityY = 4;
  if(keyDown("space")){
    run.y = run.y +10;
  }
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
