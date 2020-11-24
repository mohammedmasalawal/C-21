var wall,thickness;

var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
   
  speed=random(223,320);
  
  weight=random(30,52)

  thickness=random(22,83)

  bullet=createSprite(30,200,50,10)
  bullet.velocityX=speed;
  bullet.shapeColor='white';

  wall=createSprite(1000,200,thickness,height/2);
  wall.shapeColor='grey';

  
}

function draw() {
  background('blue');
 
  if(hasCollided(bullet, wall))
{
  bullet.velocityX=0;
  var damage=0.5 * weight* speed* speed/(thickness * thickness *thickness)

  if (damage>10)
  {
   wall.shapeColor='red';

  }

  if (damage<10)
  {
  wall.shapeColor='yellow';


  }
 

}


  drawSprites();
}


function hasCollided(lbullet, lwall)
{
	bulletRightEdge=lbullet.x +lbullet.width;
	wallLeftEdge=lwall.x;
	if (bulletRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;
}
