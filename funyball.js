 function Circle(x,y,radius) {

 }
var canava = document.getElementById("ballcanvas");
var ctx = canava.getContext("2d");
function CreatCircle() {
    ctx.beginPath();
    ctx.arc(50, 50, 50, 0, 2 * Math.PI, true);
    ctx.fillStyle = "Blue";
    ctx.fill();
    ctx.stroke();
}
CreatCircle();