export class UI {
    constructor(s) {
        console.log(s);
        const game = document.querySelector('game');
        this.scoreField = document.createElement("ui");
        game.appendChild(this.scoreField);
        this.score = s;
    }
    update(s) {
        this.score = s;
        this.scoreField.innerHTML = `Score: ${this.score}`;
    }
}
//# sourceMappingURL=score.js.map