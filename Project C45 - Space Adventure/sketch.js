const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var rocket, rocketImg;
var asteroid, asteroidImg;
var space, spaceImg;

function preload(){
    rocketImg = loadImage("Images/Rocket.png")
    asteroidImg = loadImage("Images/asteroid1.png")
    spaceImg = loadImage("Images/Spaceimg.jpg")
}

function setup(){
    canvas = createCanvas(850,600)
    
    space = createSprite(200,200,100,100)
    space.addImage(spaceImg)
    space.velocityY = 3

    rocket = createSprite(400,500,10,10)
    rocket.addImage(rocketImg)
    rocket.scale = 0.2

    


    
}

function draw(){
    background("white")
    
    if(space.y > 400){
        space.y = 300
    }
    if(keyIsDown(RIGHT_ARROW)){
        rocket.x += 10
    }

    if(keyIsDown(LEFT_ARROW)){
        rocket.x -= 10
    }

    // if(keyIsDown(32)){
    //     rocket.velocityY -= 1
    // }

    //rocket.velocityY = rocket.velocityY + 0.6


    spawnAsteroids()

   drawSprites(); 
}

function spawnAsteroids(){

    if(frameCount%40 === 0){
        asteroid = createSprite(200,100,10,10);
        asteroid.addImage(asteroidImg);
        asteroid.scale = 0.05
        asteroid.velocityY = 3
        asteroid.x = Math.round(random(50,800));
        asteroid.y = Math.round(random(20,400));
        
        asteroid.lifetime = 300
        asteroid.depth = space.depth+1
    }
}