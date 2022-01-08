
var snake_img, scorpion_img;
var maleCharacter, maleCharacter_img;
var maze, maze_img;
var snake, scorpion;
var playerX=80, playerY=510;

function preload()
{
  snake_img = loadImage("Snake.png");
  scorpion_img = loadImage("Scorpion.png");
  maleCharacter_img = loadImage("maleCharacter.png");
  maze_img = loadImage("Maze.png");
}

function setup() {
  createCanvas(1000,700);

  maleCharacter = createSprite(80,510,30,30);
  maleCharacter.addImage(maleCharacter_img);
  maleCharacter.scale = 0.09;

  maze = createSprite(500,350,10000,5000);
  maze.addImage(maze_img);
  maze.scale = 1.6;

  scorpion = createSprite(650,525);
  scorpion.addImage(scorpion_img);
  scorpion.scale=0.05;

  snake = createSprite(680,335);
  snake.addImage(snake_img);
  snake.scale=0.06;

  scorpion.setCollider("circle",0,0,250);
  scorpion.debug=false;

  snake.setCollider("circle",0,0,250);
  snake.debug=false;

  maleCharacter.setCollider("rectangle",0,0,200,475);
  maleCharacter.debug=false;
  maze.debug=false;
}

function draw() 
{
  background("white");

  if (keyIsDown(UP_ARROW)) {
     playerY -= 10;
     maleCharacter.y = playerY;
     console.log(maleCharacter.x + "," + maleCharacter.y)
  }
  if (keyIsDown(DOWN_ARROW)) {
    playerY += 10;
    maleCharacter.y = playerY;
    console.log(maleCharacter.x + "," + maleCharacter.y)
 }
 if (keyIsDown(RIGHT_ARROW)) {
  playerX += 10;
  maleCharacter.x = playerX;
  console.log(maleCharacter.x + "," + maleCharacter.y)
}
if (keyIsDown(LEFT_ARROW)) {
 playerX -= 10;
 maleCharacter.x = playerX;
 console.log(maleCharacter.x + "," + maleCharacter.y)
}


if (maleCharacter.isTouching(scorpion)) {
  maleCharacter.x=80;
  maleCharacter.y=510;
  console.log(maleCharacter.x + "," + maleCharacter.y)
}

if (maleCharacter.isTouching(snake)) {
  maleCharacter.x=80;
  maleCharacter.y=510;
  console.log(maleCharacter.x + "," + maleCharacter.y)
}

  drawSprites();
}


