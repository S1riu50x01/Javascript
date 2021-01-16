class createCanvas{
    constructor(width, height){
        this.canvas = document.getElementById("canvas");
        this.canvas.width = width;
        this.canvas.height = height;
        this.width = width;
        this.height = height;
        this.context = this.canvas.getContext('2d');
    }
    ellipse(x,y, radius, fill=null, edge=null){
        this.context.beginPath();
        this.context.arc(x,y,radius, 0, 2*Math.PI);
        if(edge != null){
            this.context.strokeStyle = edge;
        }
        if(fill != null){
            this.context.fillStyle = fill;
            this.context.fill();
        }
    }

    point(x,y, size){
        this.context.arc(x,y,size, 0, 2*Math.PI);
        this.context.fillStyle = "white";
        this.context.fill();
    }

    line(x1,y1,x2,y2){
        this.context.moveTo(x1,y1);
        this.context.lineTo(x2,y2);
        this.context.strokeStyle = "white";
    }

    beginDraw(){
        this.context.beginPath();
    }

    show(){
        this.context.stroke();
    }
    clear(){
        this.context.clearRect(0,0,canvas.width, canvas.height);
    }
    background(color){
        this.context.fillStyle = color;
        this.context.fillRect(0, 0, canvas.width, canvas.height);
    }
}