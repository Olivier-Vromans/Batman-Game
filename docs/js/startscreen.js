import { Entity } from "./entity.js";
export class StartScreen extends Entity {
    constructor(screens) {
        super("startscreen");
        this.screen = screens;
        const text = document.createElement("div");
        const btn = document.createElement("button");
        document.body.appendChild(text);
        document.body.appendChild(btn);
        text.innerText = "Batman & Catwoman";
        btn.innerText = "START GAME";
        btn.addEventListener("click", () => this.gotoGameScreen());
    }
    gotoGameScreen() {
        this.remove();
        this.screen.showGameScreen();
    }
}
//# sourceMappingURL=startscreen.js.map