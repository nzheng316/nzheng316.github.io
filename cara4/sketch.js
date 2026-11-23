function setup() {
  createCanvas(600, 600);//aria de dibuix
}

function draw() {
  let coloraleator=random()
  let x = 100 * noise(0.005 * frameCount);
  let y = 100 * noise(0.005 * frameCount + 10000);
let r1 =random (0,15);
let r2 =random (0,200);
  frameRate(100);
 background(9+r2, 15, 11);//color fondo //fons de la pantalla, gris si te un numero ENTRE 0 i 255 es negre i 255 es blanc i qualsevol nomero entre 0 i 255 sera gris .Si tenim 3 numero el primer numero es vermell o R(red),el segon numeros es la verdor o G de (green)i el tercer numero es la blavo o B de (blue).Si els colors RGB permetan comstruir setze milions de colors diferens (255x255x255)
  fill(245-r2, 227, 201);//color cara
  ellipse(300,300,200,250);//cara
  fill(107-r2, 255, 235);//color cara
  ellipse(260,270,60,30);//ojo1
  fill(227-r2, 70, 95);//color ojo1
  ellipse(260,270,30,30);
  fill(54+r2, 99, 53);//color ojo1
  ellipse(340,270,50,40);//ojo2
  fill(214-r2, 30, 214);//color ojo2
  ellipse(370-r2,300,1,1)
  arc(300,355,58,50,0,PI);//boca
  fill(255-r2, 255, 77);//color boca
  triangle(320,340,300,300,280,340);//nas
  fill(2551+r2, 255, 77);//color nas
  fill(242-r2, 218, 68)
  arc(300,175,180,115,0,PI)
  ellipse(200,230,70,70);
  ellipse(175,280,70,70);
  ellipse(150,330,70,70);
  ellipse(125,380,70,70);
  ellipse(400,230,70,70);
  ellipse(425,280,70,70);
  ellipse(450,330,70,70);
  ellipse(475,380,70,70);
  

  
}
