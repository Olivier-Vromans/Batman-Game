import { Entity } from "./entity.js";
export class Superhero extends Entity {
    constructor(g, tagName, key) {
        super(tagName);
        this.verticalSpeed = 0;
        this.horizontalSpeed = 0;
        this.lives = 4;
        this.frame = 0;
        this.frameWidth = 64;
        this.enemyFPS = 0;
        window.addEventListener("keydown", (e) => this.onKeyDown(e));
        window.addEventListener("keyup", (e) => this.onKeyUp(e));
        this.tagName = tagName;
        this.game = g;
        this.x = 100;
        this.y = 400;
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
        super.update();
    }
    hit() {
        this.lives--;
        this.deadSprite();
        if (this.lives < 1) {
            this.game.removeSuperhero(this);
        }
    }
    onKeyDown(e) {
        switch (e.key) {
            case this.keys[0]:
                this.horizontalSpeed = -3;
                this.scale = -1;
                this.runningSprite();
                break;
            case this.keys[1]:
                this.horizontalSpeed = 3;
                this.scale = 1;
                this.runningSprite();
                break;
            case this.keys[2]:
                this.verticalSpeed = -5;
                this.jumpingSprite();
                break;
            case this.keys[3]:
                this.verticalSpeed = 5;
                this.jumpingSprite();
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
            if (this.fps % 1 == 0)
                this.frame++;
            if (this.frame > this.animFrames)
                this.frame = 0;
            let pos = 0 - (this.frame * this.frameWidth);
            this.div.style.width = "80px";
            this.div.style.height = "64px";
            this.div.style.backgroundPosition = `${pos}px ${0 - this.row * 77}px`;
        }
        if (this.tagName === "catwoman")
            console.log("Catwoman Running");
    }
    stadingSprite() {
        if (this.tagName === "batman") {
            this.div.style.backgroundPosition = `0px 0px`;
            this.div.style.width = "58px";
            this.div.style.height = "77px";
        }
        if (this.tagName === "catwoman")
            this.div.style.backgroundPosition = `0px 0px`;
    }
    jumpingSprite() {
    }
    deadSprite() {
        if (this.tagName === "batman") {
            console.log("Batman Running");
            this.row = 2;
            this.animFrames = 3;
            this.frameWidth = 87;
            if (this.fps % 1 == 0)
                this.frame++;
            if (this.frame > this.animFrames)
                this.frame = 0;
            let pos = 20 - (this.frame * this.frameWidth);
            this.div.style.width = "87px";
            this.div.style.height = "107px";
            this.div.style.backgroundPosition = `${pos}px ${0 - this.row * 77}px`;
        }
        if (this.tagName === "catwoman")
            console.log("Catwoman Running");
    }
    onKeyUp(e) {
        if (e.key == this.keys[0] || e.key == this.keys[1]) {
            this.horizontalSpeed = 0;
            this.stadingSprite();
        }
        if (e.key == this.keys[2] || e.key == this.keys[3]) {
            this.verticalSpeed = 0;
            this.stadingSprite();
        }
    }
}
//# sourceMappingURL=superhero.js.map