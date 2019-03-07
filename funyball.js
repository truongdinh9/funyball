 function Ball(x,y,radius) {
    this.x =x
    this.y=y
    this.radius=radius
     this.colorr=["Red","Blue","Green","Violet"][Math.floor(Math.random()*3)]
 }
var canava = document.getElementById("ballcanvas");
var ctx = canava.getContext("2d");
function CreatCircle(a) {
    ctx.beginPath();
    ctx.arc(a.x, a.y, a.radius, 0, 2 * Math.PI, true);
    ctx.fillStyle = a.colorr;
    ctx.fill();
    ctx.stroke();
}
let Ball1=new Ball(50,50,50)
CreatCircle(Ball1);
 let Ball2=new Ball(500,100,100)
 CreatCircle(Ball2);