class Object{
    constructor(x,y,m){
        /*
        x: posição da bola no eixo X
        y: posição da bola no eixo Y
        m: massa da bola
        */
        
        this.pos = new createVector(x, y);
        this.vel = new createVector();
        this.pos.y = this.pos.y;
        this.vel.random();
        this.vel.mult(0.001);
        this.acc = new createVector();
        this.mass = m;
        this.e = 0.7;
        this.r = Math.sqrt(this.mass) * 2;
    }
    //calcula a aceleração e aplica
    applyForce(force){
        let f = div(force, this.mass);
        this.acc.add(f);
    }
    //verifica se a bola colidiu com as bordas
    edge(){
        if(this.pos.x >= canvas.width-this.r){
            this.pos.x = canvas.width-this.r;
            this.vel.x *= -this.e;
        } else if(this.pos.x <= this.r){
            this.pos.x = this.r;
            this.vel.x *= -this.e;
        } else if(this.pos.y >= canvas.height-this.r){
            this.pos.y = canvas.height-this.r;
            this.vel.y *= -this.e;
        } else if(this.pos.y <= this.r){
            this.pos.y = this.r;
            this.vel.y *= -this.e;
        }
    }

    //atualiza os vetores
    update(){
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.set(0,0);
    }
    //mostra o objeto
    show(color="white"){
        context.beginPath();
        ellipse(this.pos.x, this.pos.y,this.r, color);
        context.strokeStyle = "blue";
        context.stroke();
    }

    //mostra os vetores
    showVector(){
        context.beginPath();
        context.moveTo(this.pos.x, this.pos.y);
        context.lineTo(this.acc.x*1000000+this.pos.x, this.acc.y*1000000+this.pos.y);
        context.strokeStyle = "red";
        context.stroke();
        
        context.beginPath();
        context.moveTo(this.pos.x, this.pos.y);
        context.lineTo(this.vel.x*1000+this.pos.x, this.vel.y*1000+this.pos.y);
        context.strokeStyle = "blue";
        context.stroke();
    }
}