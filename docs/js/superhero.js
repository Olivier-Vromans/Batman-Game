import { Entity } from "./entity.js";
export class Superhero extends Entity {
    constructor(g, tagName, key) {
        super(tagName);
        this.verticalSpeed = 0;
        this.horizontalSpeed = 0;
        this.lives = 1;
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
        if (newx > 0 && newx + this.getBoundingRect().width < window.innerWidth) {
            this.x = newx;
        }
        if (newy > 0 && newy + this.getBoundingRect().height < window.innerHeight) {
            this.y = newy;
        }
        super.update();
    }
    hit() {
        this.lives--;
        this.x = 100;
        this.y = 400;
        if (this.lives < 1) {
            this.game.removeSuperhero(this);
        }
    }
    onKeyDown(e) {
        switch (e.key) {
            case this.keys[0]:
                this.horizontalSpeed = -5;
                this.scale = -1;
                break;
            case this.keys[1]:
                this.horizontalSpeed = 5;
                this.scale = 1;
                break;
            case this.keys[2]:
                this.verticalSpeed = -5;
                console.log(this.verticalSpeed);
                break;
            case this.keys[3]:
                this.verticalSpeed = 5;
                break;
            default:
                break;
        }
    }
    onKeyUp(e) {
        if (e.key == this.keys[0] || e.key == this.keys[1]) {
            this.horizontalSpeed = 0;
        }
        if (e.key == this.keys[2] || e.key == this.keys[3]) {
            this.verticalSpeed = 0;
        }
    }
}
//# sourceMappingURL=superhero.js.map