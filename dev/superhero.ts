import { Entity } from "./entity.js"
import { Game } from "./game.js"

export class Superhero extends Entity{
    entity : Entity

    private verticalSpeed : number = 0
    private horizontalSpeed: number = 0
    private keys: string[]
    public tagName : string
    public lives : number = 4
    private game : Game

    //sprite
    frame = 0
    frameWidth = 64
    enemyFPS = 0

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
        if(newx > 0 && newx + this.getBoundingRect().width - 20 < window.innerWidth){
            this.x = newx
        }
        if(newy > 0 && newy + this.getBoundingRect().height < window.innerHeight){
            this.y = newy
        }
        super.update()
    }

    public hit(){
        this.lives--
        this.deadSprite()
        if(this.lives < 1){
            this.game.removeSuperhero(this)
        }
    }

    onKeyDown(e: KeyboardEvent): void {
        // log the keyboard inputs
        // Check if the key in the event (e.key) matches the desired input
        switch (e.key) {
            // When the "Left" key is pressed
            case this.keys[0]:
                // Give the vertical speed a negative value
                this.horizontalSpeed = -3
                this.scale = -1
                this.runningSprite()
                break;
            // When the "Right" key is pressed
            case this.keys[1]:
                // Give the vertical speed a positive value
                this.horizontalSpeed = 3
                this.scale = 1
                this.runningSprite()
                break;
            // When the "Up" key is pressed
            case this.keys[2]:     
                // Give the vertical speed a negative value
                this.verticalSpeed = -5
                this.jumpingSprite()
                break;
            // When the "Down" key is pressed
             case this.keys[3]:
                // Give the vertical speed a positive value
                this.verticalSpeed = 5
                this.jumpingSprite()
                break;
            default:
                break;
        }
    }

    private runningSprite() {
        if (this.tagName === "batman") {
            console.log("Batman Running")
            this.row = 1
            this.animFrames = 6
            this.frameWidth = 80
            if(this.fps % 1 == 0) this.frame++
            if(this.frame > this.animFrames) this.frame = 0
            let pos = 0 - (this.frame * this.frameWidth)
            this.div.style.width = "80px"
            this.div.style.height = "64px"
            this.div.style.backgroundPosition = `${pos}px ${0-this.row*77}px`     
        }
        // TODO Catwoman Sprite
        if (this.tagName === "catwoman") console.log("Catwoman Running") 
    }

    private stadingSprite(){
        if (this.tagName === "batman") {
            this.div.style.backgroundPosition = `0px 0px`
            this.div.style.width = "58px"
            this.div.style.height = "77px"
        }
        if (this.tagName === "catwoman") this.div.style.backgroundPosition = `0px 0px`     
    }

    private jumpingSprite(){
        // TODO Jumping sprite

    }

    private deadSprite() {
        if (this.tagName === "batman") {
            console.log("Batman Running")
            this.row = 2
            this.animFrames = 3
            this.frameWidth = 87
            if(this.fps % 1 == 0) this.frame++
            if(this.frame > this.animFrames) this.frame = 0
            let pos = 20 - (this.frame * this.frameWidth)
            this.div.style.width = "87px"
            this.div.style.height = "107px"
            this.div.style.backgroundPosition = `${pos}px ${0-this.row*77}px`     
        }
        // TODO Catwoman DeadSprite
        if (this.tagName === "catwoman") console.log("Catwoman Running") 

        
        // this.x = 100
        // this.y = 400
    }


    onKeyUp(e: KeyboardEvent): void {
        // Check if ArrowUp or ArrowDown key has been released
        if(e.key == this.keys[0] || e.key == this.keys[1]){
            // Make the horizontal speed 0
            this.horizontalSpeed = 0
            this.stadingSprite()
        }
        if (e.key == this.keys[2] || e.key == this.keys[3]) {
            // Make the vertical speed 0
            this.verticalSpeed = 0
            this.stadingSprite()
        }
    }
}