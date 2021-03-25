const Engine = Matter.Engine 
const World = Matter.World 
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
var myEngine,myWorld 
var ground
var box1,box2,box3,box4,box5,box6,box7,box8
var ball
var sling
var gameState = "onSling";


function setup() { 
  var canvas = createCanvas(1500,800); 
  myEngine = Engine.create(); 
  myWorld = myEngine.world; 
  ground = new Ground(750,790,1500,50)
  ball = new Ball(250,50,45)
  sling = new Slingshot(ball.body,{x: 350, y: 165})

  box1 = new Box(700, 780, 60, 60)
  box2 = new Box(760, 780, 60, 60)
  box3 = new Box(820, 780, 60, 60)
  box4 = new Box(870, 780, 60, 60)

  box5 = new Box(700, 680, 60, 60)
  box6 = new Box(760, 680, 60, 60)
  box7 = new Box(820, 680, 60, 60)
  box8 = new Box(870, 680, 60, 60)

  box9 = new Box(635, 580, 60, 60)
  box10 = new Box(760, 580, 60, 60)
  box11 = new Box(820, 580, 60, 60)
  box12 = new Box(945, 580, 60, 60)

  box13 = new Box(635, 480, 60, 60)
  box14 = new Box(760, 480, 60, 60)
  box15 = new Box(820, 480, 60, 60)
  box16 = new Box(945, 480, 60, 60)

  box17 = new Box(635, 380, 60, 60)
  box18 = new Box(760, 380, 60, 60)
  box19 = new Box(820, 380, 60, 60)
  box20 = new Box(945, 380, 60, 60)
  
} 
  function draw() {

     background("lightblue"); 
     Engine.update(myEngine) 
     ground.display();
     ball.display();
     sling.display();
     box1.display();
     box2.display();
     box3.display();
     box4.display();
     box5.display();
     box6.display();
     box7.display();
     box8.display();
     box9.display();
     box10.display();
     box11.display();
     box12.display();
     box13.display();
     box14.display();
     box15.display();
     box16.display();
     box17.display();
     box18.display();
     box19.display();
     box20.display();
     
     
  }
  
  

     function mouseDragged(){
     Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY})
     }

    