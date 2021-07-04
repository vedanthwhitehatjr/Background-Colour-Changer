function setup() {
  createCanvas(400,400);
}

var box = createSprite(10,10,200,200);

function draw() 
{
  background(30);
 
 if (keyIsDown(LEFT_ARROW)){
background('red');
 }
   if (keyIsDown(RIGHT_ARROW)){
     background('blue');
   }

if (keyIsDown(UP_ARROW)){
  background('green');
}
if(keyIsDown(DOWN_ARROW)){
background('yellow');
}
}




