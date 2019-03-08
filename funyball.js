function Ball(x, y, radius) {
    this.x = x
    this.y = y
    this.radius = radius
    this.colorr = ["Red", "Blue", "Green", "Violet", "Orange", "Yellow"][Math.floor(Math.random() * 6)]
    this.vx = 2;
    this.vy = 2;
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

let a = [];
let N = parseInt(prompt("Nhập số quả bóng"));

for (let i = 0; i < N; i++) {
    a[i] = new Ball(Math.floor(Math.random() * 10 + 1) * 110, Math.floor(Math.random() * 10 + 1) * 45, 10);
}

// let a=new Ball(Math.floor(Math.random()*10+1)*110,Math.floor(Math.random()*10+1)*45,10);
function chay(a) {

    setTimeout(function () {
        ctx.clearRect(0, 0, 1200, 500);
        for (let i=0;i<N;i++){
            CreatCircle(a[i]);
            if (a[i].x < a[i].radius || a[i].x > 1200 - a[i].radius) {
            a[i].vx = -a[i].vx
        }
        if (a[i].y < a[i].radius || a[i].y > 500 - a[i].radius) {
            a[i].vy = -a[i].vy
        }
        a[i].x += a[i].vx;
        a[i].y += a[i].vy;
        }
        chay(a);
    }, 10)
}
chay(a);