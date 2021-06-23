export class UI {
    constructor(g) {
        this._score = 0;
        const gameElement = document.querySelector('game');
        this.scoreField = document.createElement("ui");
        gameElement.appendChild(this.scoreField);
        this.game = g;
        this.update();
    }
    get score() {
        return this._score;
    }
    update() {
        let str = `Score: ${this._score}`;
        for (let s of this.game.superheroes) {
            str += `<br> ${s.tagName}: ${s.lives}`;
        }
        this.scoreField.innerHTML = str;
    }
    addPoints() {
        this._score++;
        this.update();
    }
    clear() {
        this.scoreField.remove();
    }
}
//# sourceMappingURL=ui.js.map