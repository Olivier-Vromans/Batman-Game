import { Entity } from "./entity.js";
import { Game } from "./game.js";
import { UI } from "./ui.js";

export class EndScreen extends Entity{
    private scoreField : HTMLElement 
    private nextGameButton : HTMLElement
    private ui : UI
    private game : Game
    
    constructor(s : number){
        super("endscreen")
        const gameElement = document.querySelector('endscreen') as HTMLElement
        this.scoreField = document.createElement("div")
        gameElement.appendChild(this.scoreField)
        let str = `Your total Score: ${s}`
        this.scoreField.innerHTML = str

        this.nextGameButton = document.createElement("button")
        this.nextGameButton.innerText = "Start Next Game"
        gameElement.appendChild(this.nextGameButton)
        this.nextGameButton.addEventListener("click", () => this.nextGame())
    }

    private nextGame(){
        this.scoreField.remove()
        this.nextGameButton.remove()
        this.game = new Game()
    }
}