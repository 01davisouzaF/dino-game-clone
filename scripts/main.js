const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const gameVelocity = 3;

const groundImg = new Image();
groundImg.src = "sprites/Chão.png";

class groundClass {
    constructor(img, x, y, sx, sy, vx) {
        this.img = img;
        this.x = x;
        this.y = y;
        this.sx = sx;
        this.sy = sy;
        this.vx = vx;
    }

    draw() {
        ctx.drawImage(this.img, this.x, this.y, this.sx, this.sy);
    }

    update() {
        this.x -= this.vx;

        if (this.x + this.sx <= 0) {
            this.x = canvas.width;
        }
    }
}

const ground1 = new groundClass(groundImg, 0, 130, 600, 10, gameVelocity);  
const ground2 = new groundClass(groundImg, 600, 130, 600, 10, gameVelocity);  

function gameloop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    ground1.update();
    ground2.update();
    ground1.draw();
    ground2.draw();
}

setInterval(gameloop, 1000 / 60);

