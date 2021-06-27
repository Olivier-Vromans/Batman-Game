import { Entity } from "./entity.js"
import { Game } from "./game.js"

export class Superhero extends Entity{

    private verticalSpeed : number = 0
    private horizontalSpeed: number = 0
    private keys: string[]
    public tagName : string
    public lives : number = 4
    private game : Game
    private state : string = "idle"
    public dead : boolean = false
    

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
        this.y = 565 //565 for game / 200 for testing

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


        if(this.fps % 10 == 0) this.frame++
        if(this.frame > this.animFrames) this.frame = 0
        this.pos = this.startpos - (this.frame * this.frameWidth)
        this.div.style.backgroundPosition = `${this.pos}px ${0-this.row*this.frameHeigt}px`     

        super.update()
    }
    
    public hit(){
        //TODO Make dead work
        this.lives--
        // this.deadSprite()
        if(this.lives < 1){
            this.game.removeSuperhero(this)
        }
        // this.dead = true
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
                if (this.state != "running") {
                    this.state = "running"
                    this.runningSprite()
                }
                break;
            // When the "Right" key is pressed
            case this.keys[1]:
                // Give the vertical speed a positive value
                this.horizontalSpeed = 3
                this.scale = 1
                if (this.state != "running") {
                    this.state = "running"
                    this.runningSprite()
                }
                break;
            // When the "Up" key is pressed
            case this.keys[2]:     
                // Give the vertical speed a negative value
                this.verticalSpeed = -6
                if (this.state != "jumping") {
                    this.state = "jumping"
                    this.jumpingSprite()
                }
                break;
            // When the "Down" key is pressed
             case this.keys[3]:
                // Give the vertical speed a positive value
                this.verticalSpeed = 6
                if (this.state != "jumping") {
                    this.state = "jumping"
                    this.jumpingSprite()
                }
                break;
            default:
                break;
        }
    }

    private runningSprite() {
        //Batman running Sprite
        if (this.tagName === "batman") {
            console.log("Batman Running")
            this.row = 1
            this.animFrames = 6
            this.frameWidth = 80
            this.frameHeigt = 77
            this.div.style.width = "80px"
            this.div.style.height = "70px"    
        }
        if (this.tagName === "catwoman") {
            // console.log("Catwoman Running")
            this.row = 1
            this.animFrames = 4
            this.frameWidth = 55
            this.frameHeigt = 66
            this.div.style.width = "50px"
            this.div.style.height = "55px"
        }    
    }

    private changeBackground(){

    }

    private stadingSprite(){
        //Batman back to Standing
        if (this.tagName === "batman") {
            this.row = 0
            this.animFrames = 0
            this.frameWidth = 58
            this.frameHeigt = 77
            this.startpos = 0
            this.div.style.width = "58px"
            this.div.style.height = "77px"
        }
        //Batman back to Standing
        if (this.tagName === "catwoman") {
            this.row = 0
            this.animFrames = 0
            this.frameWidth = 29
            this.frameHeigt = 57
            this.div.style.width = "29px"
            this.div.style.height = "57px"    
        }    
    }

    private jumpingSprite(){
        // TODO EXTRA Jumping sprite

    }

    private deadSprite() {
        if (this.tagName === "batman") {
            console.log("Batman Running")
            this.row = 2
            this.animFrames = 3
            this.frameWidth = 87
            this.frameHeigt = 77
            this.startpos = 20
            this.pos = 0
            this.div.style.width = "87px"
            this.div.style.height = "107px"
        }
        // TODO EXTRA Catwoman DeadSprite
        if (this.tagName === "catwoman") console.log("Catwoman Running") 


        //TODO EXTRA After animation is done
        // this.dead = false
        // this.x = 100
        // this.y = 200
        // this.stadingSprite()
    }


    onKeyUp(e: KeyboardEvent): void {
        // Check if ArrowUp or ArrowDown key has been released
        if(e.key == this.keys[0] || e.key == this.keys[1]){
            // Make the horizontal speed 0
            this.horizontalSpeed = 0
            if (this.state != "idle") {
                this.state = "idle"
                console.log("I am standing");
                this.stadingSprite()
            }
        }
        if (e.key == this.keys[2] || e.key == this.keys[3]) {
            // Make the vertical speed 0
            this.verticalSpeed = 0
            if (this.state != "idle") {
                this.state = "idle"
                this.stadingSprite()
            }
        }
    }
}

function adjustAnimation() {
    throw new Error("Function not implemented.")
}
