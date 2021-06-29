var dog;


function preload()
{
dog = loadImage("dogimg.png/images");
}

function setup() {
	createCanvas(800, 700);
  
}


function draw() {  

  drawSprites();
   dog.display();
  
}



