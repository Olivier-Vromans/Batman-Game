import { Game } from "./game.js";
import { StartScreen } from "./startscreen.js";
export class Screens {
    constructor() {
        this.screen = new StartScreen(this);
        console.log("Screens");
        this.gameLoop();
    }
    showGameScreen() {
        this.game = new Game();
    }
    showEndScreen() {
    }
    gameLoop() {
        this.screen.update();
        requestAnimationFrame(() => this.gameLoop());
    }
}
new Screens();
//# sourceMappingURL=screens.js.map