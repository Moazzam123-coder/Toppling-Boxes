const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var Ground1;
var box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,350,50,50);
    box2 = new Box(240,100,50,50);
    Ground1 = new Ground(200,height,400,10);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    Ground.display();
   
}