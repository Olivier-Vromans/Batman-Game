import { Bullet } from "./bullet.js";
import { Entity } from "./entity.js";
export class Enemy extends Entity {
    constructor(tagName, g) {
        super(tagName);
        this.animFrames = 8;
        this.frame = 0;
        this.frameWidth = 64;
        this.enemyFPS = 0;
        this.x = window.innerWidth + 20 + Math.random() * 400;
        this.y = 400;
        this.game = g;
        this.update();
    }
    getBoundingRect() {
        return this.div.getBoundingClientRect();
    }
    get valueX() {
        return this.x;
    }
    get valueY() {
        return this.y;
    }
    update() {
        this.y += 0;
        this.x += -2;
        super.update();
        this.enemyFPS++;
        if (this.enemyFPS % 10 == 0)
            this.frame++;
        if (this.enemyFPS % 60 == 0)
            this.shoot();
        if (this.frame > this.animFrames)
            this.frame = 0;
        let pos = 16 - (this.frame * this.frameWidth);
        this.div.style.backgroundPosition = `${pos}px 0px`;
    }
    shoot() {
        if (Math.random() < 0.2) {
            this.game.addBullet(new Bullet("bullet", this));
        }
    }
}
//# sourceMappingURL=enemy.js.map