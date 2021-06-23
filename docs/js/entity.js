export class Entity {
    constructor(tagName) {
        this.x = 0;
        this.y = 0;
        this.scale = 1;
        this.create(tagName);
    }
    create(tagName) {
        this.div = document.createElement(tagName);
        this.div.id = `${tagName}`;
        document.body.appendChild(this.div);
    }
    update() {
        this.div.style.transform = `translate(${this.x}px, ${this.y}px) scaleX(${this.scale})`;
    }
    remove() {
        this.div.remove();
    }
}
//# sourceMappingURL=entity.js.map