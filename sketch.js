var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	star2 = createSprite(640,30);
	star2.addImage(starImg);
	star2.scale = 0.2;

	star3 = createSprite(630,30);
	star3.addImage(starImg);
	star3.scale = 0.2;

	star4 = createSprite(620,30);
	star4.addImage(starImg);
	star4.scale = 0.2;

	star5 = createSprite(610,30);
	star5.addImage(starImg);
	star5.scale = 0.2;

	star6 = createSprite(600,30);
	star6.addImage(starImg);
	star6.scale = 0.2;

    star7 = createSprite(590,30);
	star7.addImage(starImg);
	star7.scale = 0.2;

	star8 = createSprite(580,30);
	star8.addImage(starImg);
	star8.scale = 0.2;

	star9 = createSprite(570,30);
	star9.addImage(starImg);
	star9.scale = 0.2;

	star10 = createSprite(560,30);
	star10.addImage(starImg);
	star10.scale = 0.2;

	star11 = createSprite(550,30);
	star11.addImage(starImg);
	star11.scale = 0.2;

	star12 = createSprite(540,30);
	star12.addImage(starImg);
	star12.scale = 0.2;

    star13 = createSprite(530,30);
	star13.addImage(starImg);
	star13.scale = 0.2;

	star14 = createSprite(520,30);
	star14.addImage(starImg);
	star14.scale = 0.2;

	star15 = createSprite(510,30);
	star15.addImage(starImg);
	star15.scale = 0.2;

	star16 = createSprite(500,30);
	star16.addImage(starImg);
	star16.scale = 0.2;

	star17 = createSprite(490,30);
	star17.addImage(starImg);
	star17.scale = 0.2;

	star18 = createSprite(480,30);
	star18.addImage(starImg);
	star18.scale = 0.2;

    star19 = createSprite(470,30);
	star19.addImage(starImg);
	star19.scale = 0.2;

	star20= createSprite(460,30);
	star20.addImage(starImg);
	star20.scale = 0.2;

	star21 = createSprite(450,30);
	star21.addImage(starImg);
	star21.scale = 0.2;

	star22 = createSprite(440,30);
	star22.addImage(starImg);
	star22.scale = 0.2;

	star23 = createSprite(430,30);
	star23.addImage(starImg);
	star23.scale = 0.2;

	star24 = createSprite(420,30);
	star24.addImage(starImg);
	star24.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  drawSprites();

  if(keyDown("left_arrow")){
    fairy.x=fairy.x-5;
  }
  
   if(keyDown("right_arrow")){
    fairy.x=fairy.x+5;
  }
  
  if(keyDown("space")){
    fairy.velocityY=-10;
  }

  if(keyDown("s")){
  star.velocityY=10
  }

  if(keyDown("k")){
  star2.velocityY=10
	}

  if(keyDown("w")){
  star3.velocityY=10
  }

  if(keyDown("s")){
  star4.velocityY=10
  }

  if(keyDown("b")){
  star5.velocityY=10
	}

  if(keyDown("w")){
  star6.velocityY=10
  }

  if(keyDown("q")){
	star7.velocityY=10
	}
  
	if(keyDown("v")){
	star8.velocityY=10
	  }
  
	if(keyDown("z")){
	star9.velocityY=10
	}
  
	if(keyDown("t")){
	star10.velocityY=10
	}
  
	if(keyDown("p")){
	star11.velocityY=10
	  }
  
	if(keyDown("a")){
	star12.velocityY=10
	}

    if(keyDown("s")){
		star13.velocityY=10
		}
	  
		if(keyDown("d")){
		star14.velocityY=10
		  }
	  
		if(keyDown("f")){
		star15.velocityY=10
		}
	  
		if(keyDown("g")){
		star16.velocityY=10
		}
	  
		if(keyDown("h")){
		star17.velocityY=10
		  }
	  
		if(keyDown("j")){
		star18.velocityY=10
		}
	  
		if(keyDown("k")){
		  star19.velocityY=10
		  }
		
		  if(keyDown("l")){
		  star20.velocityY=10
			}
		
		  if(keyDown("z")){
		  star21.velocityY=10
		  }
		
		  if(keyDown("x")){
		  star22.velocityY=10
		  }
		
		  if(keyDown("c")){
		  star23.velocityY=10
			}
		
		  if(keyDown("v")){
		  star24.velocityY=10
		  }

}


