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
    get left() {
        return this.pos.x - this.size.x / 2;
    }
    get right() {
        return this.pos.x + this.size.x / 2;
    }
    get top() {
        return this.pos.y - this.size.y / 2;
    }
    get bottom() {
        return this.pos.y + this.size.y / 2;
    }    
}

class Ball extends Rect {
    constructor() {
        super(20, 20);
        this.vel = new Vec
    }
}

class Pong {
    constructor(canvas) {
        this._canvas = canvas;
        this._context = canvas.getContext('2d');

        this.ball = new Ball;
        this.ball.pos.x = 100;
        this.ball.pos.y = 50;

        this.ball.vel.x = 200;
        this.ball.vel.y = 200;

        let lastTime;
        const callback = (millis) => {       
            if(lastTime) {
                this.update((millis - lastTime) / 1000);
            }
            lastTime = millis;
            requestAnimationFrame(callback);    //animation function
        };
        callback();
    }

    drawRect(rect) {
        this._context.fillStyle = '#FFF';
        this._context.fillRect(rect.pos.x, rect.pos.y, 
                               rect.size.x, rect.size.y);     //draws the ball
    }

    update(dt) {    //dt = deltatime
        this.ball.pos.x += this.ball.vel.x * dt;      //the movement of the ball is relative to the time difference of the update method
        this.ball.pos.y += this.ball.vel.y * dt;
    
        if(this.ball.left < 0 || this.ball.right > this._canvas.width) {      //handles bouncing of canvas edges
            this.ball.vel.x = -this.ball.vel.x;
        }                                 
        
        if(this.ball.top < 0 || this.ball.bottom > this._canvas.height) {
            this.ball.vel.y = -this.ball.vel.y;
        }                                 
    
        this._context.fillStyle = '#000';
        this._context.fillRect(0, 0, 
        this._canvas.width, this._canvas.height);       //draws the game board
    
        this.drawRect(this.ball);
    
    }
}

const canvas = document.getElementById('pong');
const pong = new Pong(canvas);
