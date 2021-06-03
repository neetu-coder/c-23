const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1 , box2;
var ground2
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);

    box2 = new Box (230,200,40,50)

    ground2 = new Ground (200,380,width,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    push ()
    fill("pink") 
    box1.display();
    box2.display();
    console.log(box2.body.angle)
   pop()
   ground2.display()
}