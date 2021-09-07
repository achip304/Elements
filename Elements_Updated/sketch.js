  var dots = 188;                // dots = atomic radius
  var leftstripes = 9;           // lines = atomic number
  var rightstripes = 8;         // (atomic # - 1)/2 
  var state = 'gas';

function setup() {
  createCanvas(400, 400);
   
  background(255);
  
  textSize(16);
  textFont('Courier New');
  textStyle(BOLD);
  textAlign(RIGHT);
  text('Argon', 400, 16);
  text('18', 400, 32)
}

function draw() {
  
   line(0, 0, 400, 400);    // middle line (constant)
  for (var i =1; i <= leftstripes; i ++){
    line(0, 5*i, 400, 400-(5*i));
  }
  
  for (var j =1; j <= rightstripes; j ++){
    line(5*j, 0, 400-(5*j), 400);
  }

 /* line(0, 0, 400, 400);                       // LINES = ATOMIC NUMBER
  line(0, 5, 395, 400);
  line(5, 0, 400, 395);
  line(0, 10, 390, 400);
  line(10, 0, 400, 390); */
  
  //noFill();                                // DOTS
  for (var k = 0; k < dots; k++){
    var y = random(0, height);
    var x = random(0, width);
  noFill(); 
   ellipse(x, y, 1, 1);
  } 
   
  
  if (state == 'gas') {               //STATE
    noStroke();
    fill(128,245,155);
  // ellipse(25, 375, 25, 25);
    ellipse(25, 375, 15, 15);
    ellipse(20, 385, 15, 15);
    ellipse(30, 385, 15, 15);
  }
    
   else if (state == 'liquid') { 
    noStroke();
    fill(83,254,238);
    ellipse(25, 380, 15, 30);
    ellipse(25, 385, 17, 15);
  }
  
  else {
    noStroke();
    fill(118,131,123);
    rectMode(CENTER);
    rect(25, 375, 25, 25)
    
  }
  
drawingContext.save();
  drawingContext.shadowOffsetX = -2;
  drawingContext.shadowOffsetY = 3;
  drawingContext.shadowBlur = 1;
  drawingContext.shadowColor = 'black'; 

  let c = color(130, 130, 0);              //COLOR = ATOMIC MASS
  fill(c);
  noStroke();
  ellipse(200, 200, 150, 150);
  
 drawingContext.restore();
  
  
 /* beginShape();
  strokeWeight(2);
  stroke(1);
 noFill();
    curveVertex(125,200);
  curveVertex(125,200);
    curveVertex(200,220);
    curveVertex(275,200);
   curveVertex(275,200); 
  endShape(); */
  
}
