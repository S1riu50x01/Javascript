//Simulação da gravidade;
//autor: S1riu5;    data: 12/01/2021;

function main(){
    createCanvas(600,360);
    objects = [];
    let max = 1;
    for(let i=0; i<max; i++){
        let rand = random(10, 40);
        object = new Object(canvas.width/4, canvas.height/4, rand);
        objects.push(object);
    }
    attractor = new Attractor(canvas.width/2, canvas.height/2, 100);
    setInterval(draw, 60);
}

function draw(){
    clear();
    background("black");

    for(object of objects){
        object.update();
        object.show();

        attractor.attract(object);
        attractor.show();
    }

}
main();
