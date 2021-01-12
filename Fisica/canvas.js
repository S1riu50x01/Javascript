
function createCanvas(width, height){
    canvas = document.getElementById('myCanvas');
    canvas.width = width;
    canvas.height = height;
    context = this.canvas.getContext('2d');
}
function ellipse(x,y, radius, fill=null, edge=null){
    context.beginPath();
    context.arc(x,y,radius, 0, 2*Math.PI);
    if(edge != null){
        this.context.strokeStyle = edge;
    }
    if(fill != null){
        this.context.fillStyle = fill;
        this.context.fill();
    }
}
function show(){
    context.stroke();
}
function clear(){
    context.clearRect(0,0,canvas.width, canvas.height);
}
function background(color){
    this.context.fillStyle = color;
    this.context.fillRect(0, 0, canvas.width, canvas.height);
}

let mouseIsPress = false;

function press(){
    mouseIsPress = !mouseIsPress;
}