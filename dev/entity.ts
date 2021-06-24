export class Entity {
    protected x : number = 0
    protected y : number = 0 
    protected scale : number = 1
    protected div: HTMLElement
    protected animFrames : number = 0
    protected frame : number = 0
    protected frameWidth : number = 0
    protected frameHeigt : number = 0
    protected startpos : number = 0
    protected fps : number = 0
    protected row : number = 0
    protected pos : number = 0


    constructor(tagName : string) {
        this.create(tagName)
    }

    private create(tagName:string){
        this.div = document.createElement(tagName)
        this.div.id =`${tagName}`
        document.body.appendChild(this.div) 

    }

    public update(){
        // Draw Superheo on the right coordinate (x, y)
        this.div.style.transform = `translate(${this.x}px, ${this.y}px) scaleX(${this.scale})`
        this.fps++
    }

    public remove(){
        this.div.remove()
    }
}