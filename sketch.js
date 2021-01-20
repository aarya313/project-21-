
var wall,thickness;
var bullet,speed,weight;

 var damage

function setup() { 
    createCanvas(1600,400);
     
     
    speed=Math.round(random(55,90))
    weight=Math.round(random(400,1500))

   thickness=Math.round(random(22,83))


    bullet=createSprite(50,200,50,5)
    
    bullet.shapeColor=color("pink");

    

    wall=createSprite(1200,200,thickness,height/2)

    wall.shapeColor=color(80,80,80)
   bullet.velocityX=speed;
   damage=0.5 * weight * speed*speed/(thickness *thickness *thickness);
     } 

function draw(){
background("black")

if(wall.x-bullet.x<wall.width/2+bullet.width/2)
{
  bullet.velocityX=0;
 

  if(damage<10)
  {
    wall.shapeColor=color(255,0,0)

  }

  if(damage>10)
  {
    wall.shapeColor=color(0,255,0);
  }
}
drawSprites();
}



       