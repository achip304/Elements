  var dots = 188;                // dots = atomic radius
  var leftstripes = 9;           // lines = atomic number
  var rightstripes = 8; 

function setup() {
  createCanvas(400, 400);
  
  background(255);
  //text('Argon', 350, 50);
}


function draw() {
  
   line(0, 0, 400, 400); 
  for (var i =1; i <= leftstripes; i ++){
    line(0, 5*i, 400, 400-(5*i));
  }
  
  for (var i =1; i <= rightstripes; i ++){
    line(5*i, 0, 400-(5*i), 400);
  }
  
  
  
  
 /* line(0, 0, 400, 400);                       // LINES = ATOMIC NUMBER
  line(0, 5, 395, 400);
  line(5, 0, 400, 395);
  line(0, 10, 390, 400);
  line(10, 0, 400, 390); */
  
  noFill();                                  // DOTS
  for (var i = 0; i < dots; i++){
    var y = random(0, height);
    var x = random(0, width);
   ellipse(x, y, 1, 1);
  }
 
   
    
  

  {drawingContext.shadowOffsetX = -2;
  drawingContext.shadowOffsetY = 3;
  drawingContext.shadowBlur = 1;
  drawingContext.shadowColor = 'black'; 

  let c = color(130, 130, 0);                 //COLOR = ATOMIC MASS
  fill(c);
  noStroke();
  ellipse(200, 200, 150, 150);}
  
  
 
}
