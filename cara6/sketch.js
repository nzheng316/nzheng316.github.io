function setup() {
  createCanvas(600, 530);//aria de dibuix

 // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}

function draw(){
 
  let vol = mic.getLevel();
  let h = map(vol, 0.0001, 0.009, 0, 20);
  let x = 100 * noise(0.005 * frameCount);
  let y = 100 * noise(0.005 * frameCount + 10000);
  print (h)

  let canvipetit=sin(frameCount*0.05)*8;
let canvimitja=sin(frameCount*0.05)*15;
let canvigran=sin(frameCount*0.05)*50;
let canvimoltgran=sin(frameCount*0.05)*127;
print(canvipetit)

  let coloraleator=random()
  let X= 100 * noise(0.005 * frameCount);
  let Y = 100 * noise(0.005 * frameCount + 10000);
  let r1 =random (0,15);
  let r2 =random (0,200);
  frameRate(100);

 background(106+r2, 185, 222);   
  fill(110, 76, 168+canvimoltgran)
  textSize(30);
  text("mouseX: "+mouseX,20,20)
  text("mouseY: "+mouseX,20,40)

  fill(0,0,0)
  arc(300, 600, 480, 450, PI, TWO_PI);//cuerpo
  ellipse(300,250,335,305);//cara
  fill(255,255,255);
  ellipse(220,205,100,115);//ojo izquierda
  fill(0,0,0);
  ellipse(233,203,50,60);
  fill(255,255,255);
  ellipse(380,205,100,115);//ojo derecha
  fill(0,0,0)
  ellipse(367,203,50,60);
  fill(222, 48, 24)
  ellipse(300,315,105,150+h);//labio

  fill(0,0,0);
  ellipse(300,315,55,85+h);//boca
  fill(232, 232, 44)
  arc(300, 600, 380, 350-canvipetit, PI, TWO_PI);
  fill(255,255,255-canvigran)
  arc(300, 600, 280, 250-canvimitja, PI, TWO_PI);

   fill(255,0,0); fill(255,0,0,127);
  ellipse(x+40,y+50,30,30);
    fill(255,0,0);
 ellipse (x+30,y+40,20,20 );

  fill(255);
textSize(60);
text("PINGU", mouseX-200, mouseY-100);

  }
