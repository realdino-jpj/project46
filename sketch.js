var tree ;
var treeImg;
var swordImg;
var charaterImg;
var backgroundImg;
var sword;
var berserk_emy;
var berserk_emyImg;
hungerNum = 9;
var hunger ;
var a;
var b;
var ground;
var PC;
var edges;
var leftEdges;
var rightEdges;
function preload(){
 treeImg = loadImage("Tree.png");
swordImg = loadImage("sword.png");
charaterImg = loadImage("character.png");
backgroundImg = loadImage("background2.png");
berserk_emyImg = loadImage("berserker.png");
}
function setup(){
    createCanvas(500,500);
    createEdgeSprites();
    b = createSprite(100,100,10,10);
    b.velocityX = 6;

     leftEdges = createSprite(0,250,10,600);
     rightEdges = createSprite(500,250,10,600);
ground = createSprite(250,480,1000,20);
ground.visible = false;
tree = createSprite(250,400,20,20);
tree.addImage("tree", treeImg)
tree.scale = 0.2;
PC = createSprite(20,380,20,30);

PC.setCollider("rectangle",0,0,200,30);
PC.debug = true;
berserk_emy = createSprite(400,450,20,30);
berserk_emy.addImage("a",berserk_emyImg );
berserk_emy.scale = 0.3
berserk_emy.collide(ground);

berserk_emy.setCollider("rectangle", 0,0,20,30);
berserk_emy.debug = true;

 hunger = createSprite(400,100,90,30);
 a = createSprite(100,100,10,10);
a.velocityX = 5;
a.visible = false;

tree.collide(ground);


}
function draw(){
background(backgroundImg);
PC.collide(ground);
fill("red");
text ("hunger:"+ hungerNum,400,50);


if(a.isTouching(hunger)&& hungerNum > 0){
    hunger.width -= 10;
    a.destroy();
    a = createSprite(100,100,10,10);
    a.velocityX = 5;
    a.visible = false;
    hungerNum = hungerNum-1;
}
PC.velocityX = 0;
PC.velocityY = 0;
PC.collide(ground);
if (keyDown(RIGHT_ARROW)){
PC.velocityX = 3;


}
if (keyDown(LEFT_ARROW)){
    PC.velocityX = -3;
    
    
    }
    if(keyDown(UP_ARROW)){
PC.velocityY = -4;
        
    }
    
    PC.velocityY = PC.velocityY + 2

    
if(keyCode === 67){
tree.destroy();
Sword();


}

if ( PC.x > 250){

berserk_emy.velocityX = -3;

}
if ( PC.isTouching(berserk_emy)&& PC.x > 250){
    

    berserk_emy.velocityX = 3;

    
    }

    if (berserk_emy.isTouching(leftEdges)){
berserk_emy.velocityX = 3;

    }
    if (berserk_emy.isTouching(rightEdges)){
        berserk_emy.velocityX = -3;
        
            }
    
    if(b.isTouching(hunger)){
        
        b.destroy();
         b = createSprite(100,100,10,10);
        b.velocityX = 5;
        b.visible = false;
    
        var shot = createSprite(berserk_emy.x,berserk_emy.y,10,10);
        shot.velocityX = berserk_emy.velocityX;
    }

drawSprites();
}

function Sword(){
    sword = createSprite(250,430,20,20);
sword.addImage("sword", swordImg);
sword.scale = 0.08;

if (sword.isTouching(PC)){

    PC.addImage("PC",charaterImg);
    PC.scale = 0.2;
    sword.destroy();
    
    }


}