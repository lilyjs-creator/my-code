var dog,master,ground;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    dog = createSprite(100,380,30,70);
    ground = createSprite(600,390,1200,20);
}

function draw(){
    if(keyDown("space")){
        console.log("space is clicked");
        dog.velocityY = -12;
    }
    //dog.velocityY = dog.velocityY + 0.8;
    //dog.collide(ground);
    drawSprites();   
}