/*
Simulação de colisão bidimensional
autor: S1riu50x01
data: 13/01/2021
*/
function main(){
    //cria o canvas
    createCanvas(600,360);
    let create;
    objects = [];
    //quantidade de bolinhas
    let max = 20;
    //cria as bolas
    for(let i=0; i<max; i++){
        while(true){
            create = true;
            object = new Object(random(0,canvas.width), random(0,canvas.height), 50);
            for(obj of objects){
                if(colision(object,obj)){
                    create = false;
                    break;
                }
            }
            if(create){
                objects.push(object);
                break;
            }
            
        }
    }
    setInterval(draw, 5);
}

function draw(){
    clear();
    background("black");

    //cria o vetor gravidade
    let gravity = new createVector(0, 0.009);

    for(objectA of objects){
        for(objectB of objects){
            if(objectA == objectB){
                continue;
            }
            objectA.applyForce(gravity);
            colision(objectA, objectB);
            objectA.showVector();
            objectA.update();
            objectA.edge();
            objectA.show();

            objectB.applyForce(gravity);
            objectB.showVector();
            objectB.update();
            objectB.edge();
            objectB.show();
        }
        
    }
}

//verifica se a colisão entre a bola A e a bola B
function colision(A, B){
    let dist = A.r+B.r;
    let diff = sub(A.pos, B.pos).mag();

    if(diff <= dist){
        new_vel(A,B);
    }
}

//calcula a velocidade final da bola A e B
function new_vel(A,B){
    let colisionXY = sub(A.pos,B.pos);
    let colision = colisionXY.magSq();

    let pvx1 = ((A.vel.x*colisionXY.x) + (A.vel.y*colisionXY.y)) * colisionXY.x/colision;
    let pvy1 = ((A.vel.x*colisionXY.x) + (A.vel.y*colisionXY.y)) * colisionXY.y/colision;
    let pvx2 = ((B.vel.x*colisionXY.x) + (B.vel.y*colisionXY.y)) * colisionXY.x/colision;
    let pvy2 = ((B.vel.x*colisionXY.x) + (B.vel.y*colisionXY.y)) * colisionXY.y/colision;

    A.vel.x -= (pvx1-pvx2);
    A.vel.y -= (pvy1-pvy2);

    B.vel.x -= (pvx2-pvx1);
    B.vel.y -= (pvy2-pvy1);

    if((colisionXY.x != 0) && (colisionXY.y != 0)){

        A.pos.x += colisionXY.x / Math.abs(colisionXY.x);
        A.pos.y += colisionXY.y / Math.abs(colisionXY.y);

        B.pos.x -= colisionXY.x / Math.abs(colisionXY.x);
        B.pos.y -= colisionXY.y / Math.abs(colisionXY.y);
    }

}

function norm(x,y){
    return Math.sqrt(x*x + y*y);
}
main();
