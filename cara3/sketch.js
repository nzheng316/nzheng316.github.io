//Farem moviment repetitiu gràcies als sinus i cosinus que produiran canvis de colors repetitus o moviments repetitius de la boca, els ulls, tota la cara, les pupil·les, etc.
//Crearem unes variables: canvipetit que canbiarà de -8 a +8, canvimitja que canbiarà de -15 a +15, canvigran que canbiarà de -50 a +50, canvimoltgran que canbiarà de -127 a +127
function setup() {
  createCanvas(600, 600);//aria de dibuix
}

function draw() {

let canvipetit=sin(frameCount*0.05)*8;
let canvimitja=sin(frameCount*0.05)*15;
let canvigran=sin(frameCount*0.05)*50;
let canvimoltgran=sin(frameCount*0.05)*127;
print(canvipetit)
  
 background(9, 15, 11+canvimoltgran);//color fondo //fons de la pantalla, gris si te un numero ENTRE 0 i 255 es negre i 255 es blanc i qualsevol nomero entre 0 i 255 sera gris .Si tenim 3 numero el primer numero es vermell o R(red),el segon numeros es la verdor o G de (green)i el tercer numero es la blavo o B de (blue).Si els colors RGB permetan comstruir setze milions de colors diferens (255x255x255)
  fill(245, 227, 201);//color cara
  ellipse(300-canvipetit,300,200,250+canvimitja);//cara
  fill(107, 255, 235);//color cara
  ellipse(260,270,60,30+canvimitja);//ojo1
  fill(227, 70, 95);//color ojo1
  ellipse(260,270-canvipetit,30,30);
  fill(54, 99, 53+canvigran);//color ojo1
  ellipse(340,270,50,40);//ojo2
  fill(214, 30, 214);//color ojo2
  ellipse(370,300,1,1)
  arc(300,355-canvipetit,58,50,0,PI);//boca
  fill(255-canvipetit, 255, 77+canvimoltgran);//color boca
  triangle(320,340,300,300,280,340+canvimoltgran);//nas
  fill(255, 255, 77);//color nas
  fill(240, 220, 98+canvigran)
  arc(300-canvipetit,175,180,115,0,PI)
  ellipse(200-canvipetit,230,70,70);
  ellipse(175+canvipetit,280,70,70);
  ellipse(150-canvipetit,330,70,70);
  ellipse(125+canvipetit,380,70,70);
  ellipse(400-canvipetit,230,70,70);
  ellipse(425+canvipetit,280,70,70);
  ellipse(450-canvipetit,330,70,70);
  ellipse(475+canvipetit,380,70,70);
}
