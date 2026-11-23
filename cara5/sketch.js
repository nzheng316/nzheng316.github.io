function setup() {
  createCanvas(600, 600);//aria de dibuix

 // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}

function draw() {
 
  let vol = mic.getLevel();
  let h = map(vol, 0.0001, 0.009, 0, 20);
  let x = 100 * noise(0.005 * frameCount);
  let y = 100 * noise(0.005 * frameCount + 10000);
 
  print (h)
  
 background(9, 15, 11);//color fondo //fons de la pantalla, gris si te un numero ENTRE 0 i 255 es negre i 255 es blanc i qualsevol nomero entre 0 i 255 sera gris .Si tenim 3 numero el primer numero es vermell o R(red),el segon numeros es la verdor o G de (green)i el tercer numero es la blavo o B de (blue).Si els colors RGB permetan comstruir setze milions de colors diferens (255x255x255)
  fill(245, 227, 201);//color cara
  ellipse(300,300,200,250);//cara
  fill(107, 255, 235);//color cara
  ellipse(260,270,60,30);//ojo1
  fill(227, 70, 95);//color ojo1
  ellipse(260,270,30,30);
  fill(54, 99, 53);//color ojo1
  ellipse(340,270,50,40);//ojo2
  fill(214, 30, 214);//color ojo2
  ellipse(370,300,1,1)
  arc(300,355,58,50 + h,0,PI);//boca
  fill(255, 255, 77);//color boca
  triangle(320,340,300,300,280,340);//nas
  fill(255, 255, 77);//color nas
  arc(300,175,180,115,0,PI)
  ellipse(200,230,70,70);
  ellipse(175,280,70,70);
  ellipse(150,330,70,70);
  ellipse(125,380,70,70);
  ellipse(400,230,70,70);
  ellipse(425,280,70,70);
  ellipse(450,330,70,70);
  ellipse(475,380,70,70);
  
 fill(255,0,0); fill(255,0,0,127);
  ellipse(x+40,y+50,30,30);
    fill(255,0,0);
ellipse (x+30,y+40,20,20 );
 
}
