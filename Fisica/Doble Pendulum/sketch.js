//Simulação do pendulo duplo
//By: S1riu50x01
//Date: 15/01/2021

function main(){
    //cria o canvas;
    canvas = new createCanvas(600,600);

    height = 200;
    
    //Tamanho e massa
    r1 = 120;
    r2 = 120;
    m1 = 7;
    m2 = 7;

    //velocidade dos angulos
    a1_v = 0;
    a2_v = 0;

    //angulos
    a1 = Math.PI/1.5;
    a2 = Math.PI/1.5;

    px2 = 0;
    py2 = 0;

    frames = 0;

    //aceleração da gravidade
    g = 0.9;

    trail = [];

    setInterval(draw, 60);
}

function draw(){
    canvas.background("black");

    //calcula a aceleração do angulo a1
    num1 = -g*(2*m1 + m2)*Math.sin(a1);
    num2 = -m2*g*Math.sin(a1-2*a2);
    num3 = -2*Math.sin(a1-a2)*m2;
    num4 = (a2_v*a2_v*r2 + a1_v*a1_v*r1*Math.cos(a1-a2));
    den = r1*(2*m1 + m2 - m2*Math.cos(2*a1 - 2*a2))
    a1_a = (num1+num2+num3*num4)/den;
    
    //calcula a aceleração do angulo a2
    num1 = 2*Math.sin(a1-a2);
    num2 = a1_v*a1_v*r1*(m1+m2);
    num3 = g*(m1+m2)*Math.cos(a1);
    num4 = a2_v*a2_v*r2*m2*Math.cos(a1-a2);
    den = r2*(2*m1+m2-m2*Math.cos(2*a1-2*a2));
    a2_a = num1*(num2+num3+num4)/den;

    //posição do pendulo 1 e do pendulo 2
    x1 = r1*Math.sin(a1);
    y1 = r1*Math.cos(a1);
    x2 = x1 + r2*Math.sin(a2);
    y2 = y1 + r2*Math.cos(a2);

    //desenha os pendulos;
    canvas.beginDraw();
    canvas.line(canvas.width/2,height,canvas.width/2 + x1, y1+height);
    canvas.show();
    canvas.beginDraw();
    canvas.point(canvas.width/2+x1,y1+height, m1);
    canvas.show();
    canvas.beginDraw();
    canvas.line(canvas.width/2 + x1, y1+height, canvas.width/2 + x2, y2+height);
    canvas.show();
    canvas.beginDraw();
    canvas.point(canvas.width/2+x2,y2+height, m2);
    canvas.show();

    a1_v += a1_a;
    a2_v += a2_a;

    a1 += a1_v;
    a2 += a2_v;

    if(frames > 1){
        trail.push([canvas.width/2+px2, py2+height, canvas.width/2+x2,y2+height]);

        for(p of trail){
            //desenha o rastro do pendulo 2;
            canvas.beginDraw();
            canvas.line(p[0],p[1],p[2],p[3]);
            canvas.show();
        }
    }

    px2 = x2;
    py2 = y2;

    frames+=1;
}

main();