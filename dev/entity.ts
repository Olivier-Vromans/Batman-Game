export class Entity {
    protected x : number = 0
    protected y : number = 0 
    protected scale : number = 1
    protected div: HTMLElement

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
    }

    public remove(){
        this.div.remove()
    }
}