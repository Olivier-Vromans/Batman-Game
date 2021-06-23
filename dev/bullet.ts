import { Enemy } from "./enemy.js";
import { Entity } from "./entity.js";

export class Bullet extends Entity {

    constructor(tagName: string, e: Enemy) {
        super(tagName) 
        this.x = e.valueX - 20
        this.y = e.valueY + 20 + (Math.random() * 20)
        this.scale = -1
        this.update()
    }

    public getBoundingRect() : DOMRect {
        return this.div.getBoundingClientRect()
    }

    update(){
        // Add the vertical speed to the y-value
        this.y += 0
        this.x += -5
        // Draw it in
        super.update()
    }



}