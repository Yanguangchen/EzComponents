//////////////////////////////////////////////////
// COURSERA GRAPHICS PROGRAMMING
//////////////////////////////////////////////////
// Example is based on examples from:
// http://brm.io/matter-js/
// https://github.com/shiffman/p5-matter
// https://github.com/b-g/p5-matter-examples

// module aliases
var Engine = Matter.Engine;
var Render = Matter.Render;
var World = Matter.World;
var Bodies = Matter.Bodies;
var Mouse = Matter.Mouse;
var MouseConstraint = Matter.MouseConstraint;
var Constraint = Matter.Constraint;

var engine;
var ground;
var ground2;
var ground3;

var constraint1;
var poly1A;
var poly1B;

var poly2;
var constraint2;

var poly3;
var constraint3;

//boxes
var box1;

//balls
var ball1;
var ball2;
var ball3;
var ball4;
var ball5;
var ball6;

var boxes = [];
var canvas;
///////////////////////////////////////////////////////////////////
function setup() {
  canvas = createCanvas(windowWidth - 20, windowHeight / 2);

  const render = Matter.Render.create({
    element: document.body,
    engine: engine,
    options: {

        wireframes: true,

        showAngleIndicator: true
    }
});

  // create an engine
  engine = Engine.create();

  ball1 = Bodies.circle(300, 0, 20, { restitution: 0.4, friction: 0.0001 });
  ball2 = Bodies.circle(400, 0, 10, { restitution: 0.3, friction: 0.0001 });
  ball3 = Bodies.circle(500, 0, 30, { restitution: 0.5, friction: 0.0001 });
  ball4 = Bodies.circle(600, 0, 10, { restitution: 0.2, friction: 0.0001 });
  ball5 = Bodies.circle(700, 0, 30, { restitution: 0, friction: 0.0001 });
  ball6 = Bodies.circle(800, 0, 10, { restitution: 0.3, friction: 0.0001 });

  // add stiff multi-body constraint
  poly1A = Bodies.polygon(700, 100, 6, 20);
  poly1B = Bodies.polygon(700, 250, 1, 50);
  constraint1 = Constraint.create({
    bodyA: poly1A,
    pointA: { x: 0, y: 0 },
    bodyB: poly1B,
    pointB: { x: -10, y: -10 },
    stiffness: 0.01,
  });
  World.add(engine.world, [poly1A, poly1B, constraint1]);

  // add stiff global constraint
  poly2 = Bodies.polygon(300, 100, 5, 40);
  constraint2 = Constraint.create({
    pointA: { x: 600, y: 50 },
    bodyB: poly2,
    pointB: { x: -10, y: -20 },
  });
  World.add(engine.world, [poly2, constraint2]);

  // add damped soft global constraint
  poly3 = Bodies.polygon(400, 100, 4, 30);
  constraint3 = Constraint.create({
    pointA: { x: 500, y: 120 },
    bodyB: poly3,
    pointB: { x: 10, y: 0 },
    stiffness: 0.001,
    damping: 0.05,
  });
  World.add(engine.world, [poly3, constraint3]);

  // ground
  ground = Bodies.rectangle(width / 2, 200, 500, 10, { isStatic: true });
  ground2 = Bodies.rectangle(width / 2, 400, 400, 10, { isStatic: true });
  ground3 = Bodies.rectangle(width / 2, height, 900, 10, { isStatic: true });

  World.add(engine.world, [
    ground,
    ground2,
    ground3,
    ball1,
    ball2,
    ball3,
    ball4,
    ball5,
    ball6,
  ]);

  // setup mouse
  var mouse = Mouse.create(canvas.elt);
  var mouseParams = {
    mouse: mouse,
    constraint: { stiffness: 0.05 },
  };
  mouseConstraint = MouseConstraint.create(engine, mouseParams);
  mouseConstraint.mouse.pixelRatio = pixelDensity();
  World.add(engine.world, mouseConstraint);
}
//////////////////////////////////////////////////////////////
function draw() {
  background(255);

  Engine.update(engine);

  if (box1 && box1.vertices) {
    drawVertices(box1.vertices);
  }

  function generateObject(x, y) {
    var b = Bodies.rectangle(x, y, random(5, 10), random(5, 10), {
      restitution: 0.8,
      friction: 0.5,
    });
    World.add(engine.world, [b]);
    // Store the box
    boxes.push(b);
  }

  if (box1 && box1.vertices) {
    drawVertices(box1.vertices);
  }

  fill(255);

  if (box1 && box1.vertices) {
    drawVertices(box1.vertices);
  }

  for (var i = 0; i < boxes.length; i++) {
    if (boxes[i] && boxes[i].vertices) {
      fill("#77B0AA");
      stroke("#135D66");
      drawVertices(boxes[i].vertices);
      stroke(0);

      if (isOffScreen(boxes[i])) {
        World.remove(engine.world, boxes[i]);
        boxes.splice(i, 1);
        i--;
      }
    }
  }

  function isOffScreen(body) {
    var pos = body.position;
    return pos.y > height || pos.x < 0 || pos.x > width;
  }

  generateObject(width / 2, 0);

  fill("#00343b");
  drawVertices(poly2.vertices);
  fill("#00343b");
  drawVertices(poly3.vertices);
  fill("#00343b");
  drawVertices(poly1A.vertices);
  fill(0);
  drawVertices(poly1B.vertices);
  drawConstraint(constraint2);
  drawConstraint(constraint3);
  drawConstraint(constraint1);

  drawVertices(ground.vertices);
  drawVertices(ground2.vertices);

  fill("#135D66");
  drawVertices(ball1.vertices);

  fill("#135D66");
  drawVertices(ball2.vertices);

  fill("#135D66");
  drawVertices(ball3.vertices);

  fill("#135D66");
  drawVertices(ball4.vertices);

  fill("#135D66");
  drawVertices(ball5.vertices);

  fill("#135D66");
  drawVertices(ball6.vertices);

  fill(0);

  rect(width / 2 - 105, 30, 230, 35);

  fill(255);
  textSize(20);
  text("Click and Drag to interact", width / 2 - 103, 50);
}
///////////////////////////////////////////////////////////////
// ********** HELPER FUNCTIONS *************
function drawConstraint(constraint) {
  var offsetA = constraint.pointA;
  var posA = { x: 0, y: 0 };
  if (constraint.bodyA) {
    posA = constraint.bodyA.position;
  }
  var offsetB = constraint.pointB;
  var posB = { x: 0, y: 0 };
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
  for (var i = 0; i < vertices.length; i++) {
    vertex(vertices[i].x, vertices[i].y);
  }
  endShape(CLOSE);
}
