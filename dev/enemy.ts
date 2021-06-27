import { Bullet } from "./bullet.js";
import { Entity } from "./entity.js";
import { Game } from "./game.js";

export class Enemy extends Entity {
    private game : Game

    public getBoundingRect() : DOMRect {
        return this.div.getBoundingClientRect()
    }

    constructor(tagName: string, g : Game) {
        super(tagName)
        this.x = window.innerWidth + 20 + Math.random() * 400
        this.y = 590 //590 for game / 200 for testing
        this.game = g
        this.shoot()
        this.update() 
    }

    get valueX() : number {
        return this.x
    }

    get valueY() : number {
        return this.y
    }

    update(){
        // Add the vertical speed to the y-value
        this.x += -2       
        super.update()

        //sprite
        this.runningSprite()

        // Let enemy shoot
        if(this.fps % 60 == 0) this.shoot()

        if(this.fps % 10 == 0) this.frame++
        if(this.frame > this.animFrames) this.frame = 0
        this.pos = this.startpos - (this.frame * this.frameWidth)
        this.div.style.backgroundPosition = `${this.pos}px ${0-this.row*this.frameHeigt}px`     

    }

    private runningSprite(){        
        this.animFrames = 8
        this.frameWidth = 64
        this.frameHeigt = 77
        this.startpos = 16
    }

    private shootingSprite(){
        //TODO EXTRA Make use of the shooting Sprite
    }

    private shoot(){
        if(Math.random() < 0.2) {
            this.game.addBullet(new Bullet("bullet", this))
        }

    }
}

