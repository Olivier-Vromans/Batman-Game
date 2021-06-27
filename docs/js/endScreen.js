import { Entity } from "./entity.js";
import { Game } from "./game.js";
export class EndScreen extends Entity {
    constructor(s) {
        super("endscreen");
        const gameElement = document.querySelector('endscreen');
        this.scoreField = document.createElement("div");
        gameElement.appendChild(this.scoreField);
        let str = `Your total Score: ${s}`;
        this.scoreField.innerHTML = str;
        this.nextGameButton = document.createElement("button");
        this.nextGameButton.innerText = "Start Next Game";
        gameElement.appendChild(this.nextGameButton);
        this.nextGameButton.addEventListener("click", () => this.nextGame());
    }
    nextGame() {
        this.scoreField.remove();
        this.nextGameButton.remove();
        let game = new Game();
    }
}
//# sourceMappingURL=endScreen.js.map