const Engine = Matter.Engine;
const World = Matter.World; //name spacing nick names
const Bodies = Matter.Bodies;


var myengine,myworld;

function setup() {
createCanvas(1000,600)

myengine=Engine.create();
myworld = myengine.world;



//console.log(box.position);
/*
var options_ball={
restitution:1,
friction:0.04,
}
ball= Bodies.circle(200,00,30,options_ball)

World.add(myworld,ball);
var options_ball2={
    restitution:1,
    friction:0.04
    }
ball2 = Bodies.circle(400,300,50,options_ball2)
World.add(myworld,ball2);

var option_box = {
friction:0
}
box = Bodies.rectangle(600,0,100,50,option_box);
World.add(myworld,box);
*/
box= new Box(350,20,100,60);
box1 = new Box(300,200,50,60);
box2= new Box(300,200,100,60);
ground= new Ground();
}


function draw() { 
    Engine.update(myengine);
    background(0);
 
 box.display();
 box1.display();
 box2.display();
 ground.display();
/*
  rectMode(CENTER);
  fill("red")
  rect(box.position.x,box.position.y,100,50);


  ellipseMode(RADIUS);
  fill("pink")
  ellipse(ball.position.x,ball.position.y,30,30);

  ellipseMode(RADIUS);
  fill("yellow");
ellipse(ball2.position.x,ball2.position.y,50,50)  
*/

}

