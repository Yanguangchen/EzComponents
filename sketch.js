/* eslint-disable */

// module aliases
let Engine = Matter.Engine;
let Render = Matter.Render;
let World = Matter.World;
let Bodies = Matter.Bodies;
let Mouse = Matter.Mouse;
let MouseConstraint = Matter.MouseConstraint;
let Constraint = Matter.Constraint;
let engine;

//---------GROUND--------//
let ground2;
let ground3;

//-----CONSTRAINTS------//
let constraint1;
let constraint2;
let constraint3;

//------POLYGON--------//
let poly1A;
let poly1B;
let poly2;
let poly3;

//---------BOXES--------//
let box1;

//---------BALLS--------//
let ball1;
let ball2;
let ball3;
let ball4;
let ball5;
let ball6;

//---BOXES ARRAY---//
let boxes = []; //this array keep tracks all the boxes on the screen

//---PROPERLLER SETTINGS---//
let propeller;
let angle = 0;
let angleSpeed = 0.1; //angular velocity

///////////////////////////////////////////////////////////////////
function setup() {
  canvas = createCanvas(windowWidth - 20, windowHeight / 2);

  //ENGINE-----------------//
  engine = Engine.create();

  //-----CREATE PROPELLER BODIES-----//
  propeller = Bodies.rectangle(width / 2, height / 2, 300, 15, {
    isStatic: true, //static body
    angle: angle, //angle of the propeller
  });

  //---------BALLS BODIES----------//
  ball1 = Bodies.circle(300, 0, 20, { restitution: 0.4, friction: 0.0001 });
  ball2 = Bodies.circle(400, 0, 10, { restitution: 0.3, friction: 0.0001 });
  ball3 = Bodies.circle(500, 0, 30, { restitution: 0.5, friction: 0.0001 });
  ball4 = Bodies.circle(600, 0, 10, { restitution: 0.2, friction: 0.0001 });
  ball5 = Bodies.circle(700, 0, 30, { restitution: 0, friction: 0.0001 });
  ball6 = Bodies.circle(800, 0, 10, { restitution: 0.3, friction: 0.0001 });

  //---------POLYGON BODIES----------//
  poly1A = Bodies.polygon(700, 100, 6, 20);
  poly1B = Bodies.polygon(700, 250, 1, 50);
  //CREATE CONSTRAINTS TO CONNECT THE POLYGONS
  constraint1 = Constraint.create({
    bodyA: poly1A,
    pointA: { x: 0, y: 0 },
    bodyB: poly1B,
    pointB: { x: -10, y: -10 },
    stiffness: 0.01,
  });

  // add constraints to the world
  World.add(engine.world, [poly1A, poly1B, constraint1]);

  // add constraints to the world
  poly2 = Bodies.polygon(300, 100, 5, 40);
  constraint2 = Constraint.create({
    pointA: { x: 600, y: 50 },
    bodyB: poly2,
    pointB: { x: -10, y: -20 },
  });
  World.add(engine.world, [poly2, constraint2]);

  // add constraints to the world
  poly3 = Bodies.polygon(400, 100, 4, 30);
  constraint3 = Constraint.create({
    pointA: { x: 500, y: 120 },
    bodyB: poly3,
    pointB: { x: 10, y: 0 },
    stiffness: 0.001,
    damping: 0.05,
  });
  World.add(engine.world, [poly3, constraint3]);

  //-----CREATE GROUND BODIES-----//
  ground2 = Bodies.rectangle(width / 2, 400, 400, 10, { isStatic: true });
  ground3 = Bodies.rectangle(width / 2, height, 900, 10, { isStatic: true });

  //-----ADD GROUND BODIES TO THE WORLD-----//
  World.add(engine.world, [
    ground2,
    ground3,
    ball1,
    ball2,
    ball3,
    ball4,
    ball5,
    ball6,
    propeller,
  ]);

  //-----MOUSE CONSTRAINT-----//
  let mouse = Mouse.create(canvas.elt);
  let mouseParams = {
    mouse: mouse,
    constraint: { stiffness: 0.05 },
  };
  // add mouse control
  mouseConstraint = MouseConstraint.create(engine, mouseParams);
  mouseConstraint.mouse.pixelRatio = pixelDensity();

  // add mouse constraint to the world
  World.add(engine.world, mouseConstraint);
}
//////////////////////////////////////////////////////////////
function draw() {
  background(255);

  //UPDATE ENGINE
  Engine.update(engine);

  //Generate Boxes
  function generateObject(x, y) {
    let b = Bodies.rectangle(x, y, random(5, 10), random(5, 10), {
      restitution: 0.8, //bounciness
      friction: 0.5, //friction
    });
    World.add(engine.world, [b]); // Add the box to the world
    // Store the box
    boxes.push(b);
  }

  // function to check if the box is off the screen
  function isOffScreen(body) {
    let pos = body.position;
    return pos.y > height || pos.x < 0 || pos.x > width;
  }

  //-----------------DRAW BOXES-----------------//
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i] && boxes[i].vertices) {
      //set color
      fill("#77B0AA");
      //set stroke
      stroke("#135D66");
      //draw the vertices
      drawVertices(boxes[i].vertices);
      //reset stroke to default black
      stroke(0);

      //if the box is off the screen, remove it from the world
      if (isOffScreen(boxes[i])) {
        World.remove(engine.world, boxes[i]);
        boxes.splice(i, 1); //remove the box from the array
        i--;
      }
    }
  }

  //generate boxes at a custom speed
  if (random(1) < 2) {
    generateObject(width / 2, 0); //speed of the boxes generation
  }

  //DRAW THE BODIES

  //POLYGONS
  fill("#00343b");
  drawVertices(poly2.vertices);
  drawVertices(poly3.vertices);
  drawVertices(poly1A.vertices);
  drawVertices(poly1B.vertices);
  //---------------------------//

  //DRAW CONSTRAINTS
  fill(0);
  drawConstraint(constraint2);
  drawConstraint(constraint3);
  drawConstraint(constraint1);
  //---------------------------//

  //DRAW GROUND
  fill(0);
  drawVertices(ground3.vertices);
  drawVertices(ground2.vertices);
  //---------------------------//

  //DRAW BALLS
  fill("#135D66");
  drawVertices(ball1.vertices);
  drawVertices(ball2.vertices);
  drawVertices(ball3.vertices);
  drawVertices(ball4.vertices);
  drawVertices(ball5.vertices);
  drawVertices(ball6.vertices);
  //---------------------------//

  // PROPELLER SETTINGS
  angle += 0.1; //set initial angle
  Matter.Body.setAngle(propeller, angle); //set the angle of the propeller
  Matter.Body.setAngularVelocity(propeller, angleSpeed); //set the angular velocity
  //---------------------------//

  //DRAW THE PROPELLER
  fill(0);
  drawVertices(propeller.vertices);

  // TEXT ANNOTATION
  //TEXT BACKGROUND
  fill(0);
  rect(width / 2 - 105, 30, 230, 35);
  fill(255);
  textSize(20);
  text("Click and Drag to interact", width / 2 - 103, 50);
}
///////////////////////////////////////////////////////////////
// ********** HELPER FUNCTIONS *************
function drawConstraint(constraint) {
  let offsetA = constraint.pointA;
  let posA = { x: 0, y: 0 };
  if (constraint.bodyA) {
    posA = constraint.bodyA.position;
  }
  let offsetB = constraint.pointB;
  let posB = { x: 0, y: 0 };
  if (constraint.bodyB) {
    posB = constraint.bodyB.position;
  }
  line(
    posA.x + offsetA.x,
    posA.y + offsetA.y,
    posB.x + offsetB.x,
    posB.y + offsetB.y
  );
}
////////////////////////////////////////////////////////////////
function drawVertices(vertices) {
  beginShape();
  for (let i = 0; i < vertices.length; i++) {
    vertex(vertices[i].x, vertices[i].y);
  }
  endShape(CLOSE);
}
