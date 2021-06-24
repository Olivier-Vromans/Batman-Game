import { Bullet } from "./bullet.js";
import { Entity } from "./entity.js";
import { Game } from "./game.js";

export class Enemy extends Entity {
    private game : Game

    //sprite
    animFrames = 8
    frame = 0
    frameWidth = 64
    enemyFPS = 0


    public getBoundingRect() : DOMRect {
        return this.div.getBoundingClientRect()
    }

    constructor(tagName: string, g : Game) {
        super(tagName)
        this.x = window.innerWidth + 20 + Math.random() * 400
        this.y = 590 //590 for game / 200 for testing
        this.game = g
        this.shoot()
        // console.log("Enemy was created!")  
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
    }

    private runningSprite(){
        if(this.fps % 5 == 0) this.frame++
        if(this.frame > this.animFrames) this.frame = 0
        let pos = 16 - (this.frame * this.frameWidth)
        this.div.style.backgroundPosition = `${pos}px 0px`
    }

    private shootingSprite(){
        
    }

    private shoot(){
        if(Math.random() < 0.2) {
            this.game.addBullet(new Bullet("bullet", this))
        }

    }


}

