import { Entity } from "./entity.js";
export class Superhero extends Entity {
    constructor(g, tagName, key) {
        super(tagName);
        this.verticalSpeed = 0;
        this.horizontalSpeed = 0;
        this.lives = 4;
        this.state = "idle";
        this.dead = false;
        window.addEventListener("keydown", (e) => this.onKeyDown(e));
        window.addEventListener("keyup", (e) => this.onKeyUp(e));
        this.tagName = tagName;
        this.game = g;
        this.x = 100;
        this.y = 565;
        this.keys = key;
        this.update();
    }
    getBoundingRect() {
        return this.div.getBoundingClientRect();
    }
    update() {
        let newx = this.x + this.horizontalSpeed;
        let newy = this.y + this.verticalSpeed;
        if (newx > 0 && newx + this.getBoundingRect().width - 20 < window.innerWidth) {
            this.x = newx;
        }
        if (newy > 0 && newy + this.getBoundingRect().height < window.innerHeight) {
            this.y = newy;
        }
        if (this.fps % 10 == 0)
            this.frame++;
        if (this.frame > this.animFrames)
            this.frame = 0;
        this.pos = this.startpos - (this.frame * this.frameWidth);
        this.div.style.backgroundPosition = `${this.pos}px ${0 - this.row * this.frameHeigt}px`;
        super.update();
    }
    hit() {
        this.lives--;
        if (this.lives < 1) {
            this.game.removeSuperhero(this);
        }
    }
    onKeyDown(e) {
        switch (e.key) {
            case this.keys[0]:
                this.horizontalSpeed = -3;
                this.scale = -1;
                if (this.state != "running") {
                    this.state = "running";
                    this.runningSprite();
                }
                break;
            case this.keys[1]:
                this.horizontalSpeed = 3;
                this.scale = 1;
                if (this.state != "running") {
                    this.state = "running";
                    this.runningSprite();
                }
                break;
            case this.keys[2]:
                this.verticalSpeed = -6;
                if (this.state != "jumping") {
                    this.state = "jumping";
                    this.jumpingSprite();
                }
                break;
            case this.keys[3]:
                this.verticalSpeed = 6;
                if (this.state != "jumping") {
                    this.state = "jumping";
                    this.jumpingSprite();
                }
                break;
            default:
                break;
        }
    }
    runningSprite() {
        if (this.tagName === "batman") {
            console.log("Batman Running");
            this.row = 1;
            this.animFrames = 6;
            this.frameWidth = 80;
            this.frameHeigt = 77;
            this.div.style.width = "80px";
            this.div.style.height = "70px";
        }
        if (this.tagName === "catwoman") {
            this.row = 1;
            this.animFrames = 4;
            this.frameWidth = 55;
            this.frameHeigt = 66;
            this.div.style.width = "50px";
            this.div.style.height = "55px";
        }
    }
    changeBackground() {
    }
    stadingSprite() {
        if (this.tagName === "batman") {
            this.row = 0;
            this.animFrames = 0;
            this.frameWidth = 58;
            this.frameHeigt = 77;
            this.startpos = 0;
            this.div.style.width = "58px";
            this.div.style.height = "77px";
        }
        if (this.tagName === "catwoman") {
            this.row = 0;
            this.animFrames = 0;
            this.frameWidth = 29;
            this.frameHeigt = 57;
            this.div.style.width = "29px";
            this.div.style.height = "57px";
        }
    }
    jumpingSprite() {
    }
    deadSprite() {
        if (this.tagName === "batman") {
            console.log("Batman Running");
            this.row = 2;
            this.animFrames = 3;
            this.frameWidth = 87;
            this.frameHeigt = 77;
            this.startpos = 20;
            this.pos = 0;
            this.div.style.width = "87px";
            this.div.style.height = "107px";
        }
        if (this.tagName === "catwoman")
            console.log("Catwoman Running");
    }
    onKeyUp(e) {
        if (e.key == this.keys[0] || e.key == this.keys[1]) {
            this.horizontalSpeed = 0;
            if (this.state != "idle") {
                this.state = "idle";
                console.log("I am standing");
                this.stadingSprite();
            }
        }
        if (e.key == this.keys[2] || e.key == this.keys[3]) {
            this.verticalSpeed = 0;
            if (this.state != "idle") {
                this.state = "idle";
                this.stadingSprite();
            }
        }
    }
}
function adjustAnimation() {
    throw new Error("Function not implemented.");
}
//# sourceMappingURL=superhero.js.map