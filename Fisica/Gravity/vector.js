class createVector{
    constructor(x=0,y=0){
        this.x = x;
        this.y = y;
    }
    add(vector){
        if(typeof(vector) == "object"){
            this.x += vector.x;
            this.y += vector.y;
        } else {
            this.x += vector;
            this.y += vector;
        }
        return this;
    }
    sub(vector){
        if(typeof(vector) == "object"){
            this.x -= vector.x;
            this.y -= vector.y;
        } else {
            this.x -= vector;
            this.y -= vector;
        }
            
        return this;
    }
    mult(vector){
        if(typeof(vector) == "object"){
            this.x *= vector.x;
            this.y *= vector.y;
        } else {
            this.x *= vector;
            this.y *= vector;
        }
        return this;
    }
    div(vector){
        if(typeof(vector) == "object"){
            this.x /= vector.x;
            this.y /= vector.y;
        } else {
            this.x /= vector;
            this.y /= vector;
        }
        return this;
    }
    mag(){
        return Math.sqrt(this.x*this.x + this.y*this.y)
    }
    magSq(){
        return this.x*this.x + this.y*this.y
    }
    normalize(){
        let len = this.mag();
        if(len != 0) this.div(len);
        return this;
    }
    setMag(n){
        return this.normalize().mult(n);
    }
    random(){
        this.x = random(-1,1);
        this.y = random(-1,1);
        return this;
    }
    limit(n){
        let len = this.mag();
        if(len > n){
            this.setMag(n);
        }
        return this;
    }
    set(x,y){
        this.x = x;
        this.y = y;
    }
}

function random(min, max){
    let list = [];
    for(let i = min; i<=max; i++){
        list.push(i);
    }
    let len = list.length;
    return list[Math.floor(Math.random()*len)];
}

function add(vector1,vector2){
    if(typeof(vector2) == "object"){
        return new createVector(vector1.x+vector2.x,vector1.y+vector2.y);
    }
    return new createVector(vector1.x+vector2,vector1.y+vector2);
}
function sub(vector1,vector2){
    if(typeof(vector2) == "object"){
        return new createVector(vector1.x-vector2.x,vector1.y-vector2.y);
    }
    return new createVector(vector1.x-vector2,vector1.y-vector2);
}
function mult(vector1,vector2){
    if(typeof(vector2) == "object"){
        return new createVector(vector1.x*vector2.x,vector1.y*vector2.y);
    }
    return new createVector(vector1.x*vector2,vector1.y*vector2);
}
function div(vector1,vector2){
    if(typeof(vector2) == "object"){
        return new createVector(vector1.x/vector2.x,vector1.y/vector2.y);
    }
    return new createVector(vector1.x/vector2,vector1.y/vector2)
}

function constrain(n, low, high){
    return Math.max(Math.min(n, high), low);
}