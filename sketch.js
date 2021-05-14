var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var gameState = PLAY 


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,783,width,20);

  //create division objects
  for (var k = 0; k <=880; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/1.7, 9, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 30; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 45; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 30; j <=width; j=j+50){
    plinkos.push(new Plinko(j,275));
  }
  
  //create 4th row of plinko objects
  for (var j = 45; j <=width; j=j+50){
    plinkos.push(new Plinko(j,375));
  }

}


 function draw() {
  background(0);
  
 Engine.update(engine);
  
  

  
  //create particle objects
  if(frameCount%20===0){
    particles.push(new Particle(random(30,720), 10, 8));
  }
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
    
  //display the paricles 
  for (var p = 0; p < particles.length; p++){
    particles[p].display();
  }

  ground.display();

}

  
