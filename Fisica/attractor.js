class Attractor{
    constructor(x,y,m){
        this.pos = new createVector(x,y);
        this.mass = m;
        this.r = Math.sqrt(this.mass) * 2;
    }
    attract(object){
        let force = sub(this.pos, object.pos);
        let distance = constrain(force.magSq(), 100, 1000);
        let G = 5;
        let strength = G * (this.mass * object.mass)/distance;

        force.setMag(strength);
        object.applyForce(force);
    }

    show(){
        ellipse(this.pos.x, this.pos.y, this.r, "red");
        context.stroke();
    }
}