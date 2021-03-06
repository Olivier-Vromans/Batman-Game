export class Entity {
    constructor(tagName) {
        this.x = 0;
        this.y = 0;
        this.scale = 1;
        this.animFrames = 0;
        this.frame = 0;
        this.frameWidth = 0;
        this.frameHeigt = 0;
        this.startpos = 0;
        this.fps = 0;
        this.row = 0;
        this.pos = 0;
        this.create(tagName);
    }
    create(tagName) {
        this.div = document.createElement(tagName);
        this.div.id = `${tagName}`;
        document.body.appendChild(this.div);
    }
    update() {
        this.div.style.transform = `translate(${this.x}px, ${this.y}px) scaleX(${this.scale})`;
        this.fps++;
    }
    remove() {
        this.div.remove();
    }
}
//# sourceMappingURL=entity.js.map