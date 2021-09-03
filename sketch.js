const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var stones = []
var engine, world, base, rightSide, leftSide, bridge, jointLink, jointPoint


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  base = new Base(width/2, height/2 + 300, width, 20)
	rightSide = new Base(width-10, height/2, width-400,100)
	leftSide = new Base(10, height/2, width-400, 100)
  bridge = new Bridge(15, { x: width / 2 - 400, y: height / 2 });
  jointPoint = new Base(width - 400, height / 2 + 10, 40, 20, "#8d6e63", true);
  Matter.Composite.add(bridge.body, jointPoint);
  jointLink = new Link(bridge, jointPoint);
 for(var i = 0; i<=7; i++){
  var x =  random(width/2+180, width/2-50)
  var y = height/2-300
  var stone = new Stone(x, y)
  stones.push(stone)
   
}
}

  



function draw() {
  background(51);
  for(var i = 0; i<=7; i++){
    stones[i].display()
  }
  base.show()
  rightSide.show()
  leftSide.show()
  bridge.show()
 
  Engine.update(engine);

}