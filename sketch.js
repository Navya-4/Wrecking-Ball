const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var block1,block2,block3;
var ground;
var ball;
var rope;

function setup() {
  createCanvas(800,400);
 
engine = Engine.create()
world = engine.world

block1 = new Block (500,100,100,100)
block2 = new Block (500,50,70,70)
block3 = new Block (500,10,40,40)
ground = new Ground (400,380,800,10)
ball = new Ball (50,50,50,50)
rope = new Rope (ball.body, {x: 300, y: 50})


}

function draw() {
  Engine.update(engine)
  background(0); 
  
  block1.display();
  block2.display();
  block3.display();
  ground.display();
  ball.display();
  rope.display();

}