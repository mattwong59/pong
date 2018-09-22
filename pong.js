class Vec {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}

class Rect {
    constructor(w, h) {
        this.pos = new Vec;
        this.size = new Vec(w, h);
    }
}

class Ball extends Rect {
    constructor() {
        super(20, 20);
        this.vel = new Vec
    }

}

const canvas = document.getElementById('pong');
const context = canvas.getContext('2d');
const ball = new Ball;
console.log(ball);
ball.pos.x = 100;
ball.pos.y = 50;


ball.vel.x = 100;
ball.vel.y = 100;

let lastTime;
function callback(millis) {                                             
    if(lastTime) {
        update((millis - lastTime) / 1000);
    }
    lastTime = millis;
    requestAnimationFrame(callback);                                          //animation function
}


function update(dt) {                                                       //dt = deltatime
    ball.pos.x += ball.vel.x * dt;                                          //the movement of the ball is relative to the time difference of the update method
    ball.pos.y += ball.vel.y * dt;

    context.fillStyle = '#000';
    context.fillRect(0, 0, canvas.width, canvas.height);                    //draws the game board

    context.fillStyle = '#FFF';
    context.fillRect(ball.pos.x, ball.pos.y, ball.size.x, ball.size.y);     //draws the ball

}

callback();
