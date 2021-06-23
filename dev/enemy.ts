import { Bullet } from "./bullet.js";
import { Entity } from "./entity.js";
import { Game } from "./game.js";

export class Enemy extends Entity {
    private game : Game

    //sprite
    private animFrames : number = 8
    private frame : number = 0
    private frameWidth : number  = 64
    private enemyFPS : number  = 0


    public getBoundingRect() : DOMRect {
        return this.div.getBoundingClientRect()
    }

    constructor(tagName: string, g : Game) {
        super(tagName)
        this.x = window.innerWidth + 20 + Math.random() * 400
        this.y = 400
        this.game = g
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
        this.y += 0
        this.x += -2
        super.update()

        //sprite
        this.enemyFPS++
        if(this.enemyFPS % 10 == 0) this.frame++
        if(this.enemyFPS % 60 == 0) this.shoot()
        if(this.frame > this.animFrames) this.frame = 0
        let pos = 16 - (this.frame * this.frameWidth)
        this.div.style.backgroundPosition = `${pos}px 0px`
    }

    private shoot(){
        if(Math.random() < 0.2) {
        this.game.addBullet(new Bullet("bullet", this))
        }
    }

}