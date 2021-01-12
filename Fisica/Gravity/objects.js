class Object{
    constructor(x,y,m){
        this.pos = new createVector(x, y);
        this.vel = new createVector();
        this.vel.random();
        this.vel.mult(6);
        this.acc = new createVector();
        this.mass = m;
        this.r = Math.sqrt(this.mass) * 2;
    }
    applyForce(force){
        let f = div(force, this.mass);
        this.acc.add(f);
    }

    update(){
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.set(0,0);
    }
    show(color="white"){
        ellipse(this.pos.x, this.pos.y,this.r, color);
        context.stroke();
    }
}