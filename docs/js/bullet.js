import { Entity } from "./entity.js";
export class Bullet extends Entity {
    constructor(tagName, e) {
        super(tagName);
        this.x = e.valueX - 20;
        this.y = e.valueY + 20 + (Math.random() * 20);
        this.scale = -1;
        this.update();
    }
    getBoundingRect() {
        return this.div.getBoundingClientRect();
    }
    update() {
        this.y += 0;
        this.x += -5;
        super.update();
    }
}
//# sourceMappingURL=bullet.js.map