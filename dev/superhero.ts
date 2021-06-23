import { Entity } from "./entity.js"
import { Game } from "./game.js"

export class Superhero extends Entity{
    entity : Entity

    private verticalSpeed : number = 0
    private horizontalSpeed: number = 0
    private keys: string[]
    public tagName : string
    public lives : number = 1
    private game : Game


    public getBoundingRect() : DOMRect {
        return this.div.getBoundingClientRect()
    }

    constructor(g : Game, tagName: string, key: string[]){
        super(tagName)
        // Add the event listeners to the window for the keyboard events
        window.addEventListener("keydown",  (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup",    (e: KeyboardEvent) => this.onKeyUp(e))
        this.tagName = tagName
        this.game = g
        // generate x and y values
        this.x = 100
        this.y = 400
        // console.log("SuperHero was created!")
        this.keys = key
        this.update()
    }


    public update() : void {
        // Add the vertical speed to the y-value
        let newx = this.x + this.horizontalSpeed
        let newy = this.y + this.verticalSpeed
        if(newx > 0 && newx + this.getBoundingRect().width < window.innerWidth){
            this.x = newx
        }
        if(newy > 0 && newy + this.getBoundingRect().height < window.innerHeight){
            this.y = newy
        }
        super.update()

    }

    public hit(){
        this.lives--
        this.x = 100
        this.y = 400
        if(this.lives < 1){
            this.game.removeSuperhero(this)
        }
    }

    onKeyDown(e: KeyboardEvent): void {
        // log the keyboard
        // console.log(e.key)

        // Check if the key in the event (e.key) matches the desired input
        switch (e.key) {
            // When the "Left" key is pressed
            case this.keys[0]:
                // Give the vertical speed a negative value
                this.horizontalSpeed = -5
                this.scale = -1
                break;
            // When the "Right" key is pressed
            case this.keys[1]:
                // Give the vertical speed a positive value
                this.horizontalSpeed = 5
                this.scale = 1
                break;
            // When the "Up" key is pressed
            case this.keys[2]:     
                // Give the vertical speed a negative value
                this.verticalSpeed = -5
                console.log(this.verticalSpeed);
                break;
            // When the "Down" key is pressed
             case this.keys[3]:
                // Give the vertical speed a positive value
                this.verticalSpeed = 5
                break;
            default:
                break;
        }
    }
    onKeyUp(e: KeyboardEvent): void {
        // Check if ArrowUp or ArrowDown key has been released
        if(e.key == this.keys[0] || e.key == this.keys[1]){
            // Make the horizontal speed 0
            this.horizontalSpeed = 0
        }
        if (e.key == this.keys[2] || e.key == this.keys[3]) {
            // Make the vertical speed 0
            this.verticalSpeed = 0
        }
    }
}