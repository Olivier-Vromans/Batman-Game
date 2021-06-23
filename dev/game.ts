import { Superhero } from "./superhero.js";
import { Entity } from "./entity.js";
import { Enemy } from "./enemy.js";
import { Bullet } from "./bullet.js";
import { UI } from "./ui.js";
import { EndScreen } from "./endScreen.js";


export class Game{
    private _superheroes: Superhero[] = [];
    private enemies: Enemy[] = [];
    private bullets : Bullet[] = []
    private ui : UI
    private endScreen : EndScreen

    constructor(){
        console.log("Game was Created!")

        //Ceate Enemies
        for (let e = 0; e < 2; e++) {
            this.enemies.push(new Enemy("thugs", this))
        }

        //Create Superhero
        this.superheroes.push(new Superhero(this, "batman", ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]))
        this.superheroes.push(new Superhero(this, "catwoman", ["a", "d", "w", "s"]))

        this.ui = new UI(this)
        this.gameLoop()
    }

    public get superheroes(): Superhero[] {
        return this._superheroes;
    }

    private gameLoop(){
        // update Superhero
        for(let s of this.superheroes){
            s.update()
        }

        //update Enemy
        for(let e of this.enemies){
            e.update()
            if(e.getBoundingRect().left < -100){
                e.remove()
                this.enemies = this.enemies.filter(enemy => enemy != e)
                this.enemies.push(new Enemy("thugs", this))
            }
        }
        // this.enemies.update()

        //Update Bullets
        for(let b of this.bullets){
            b.update()
            if(b.getBoundingRect().left < -100){
                b.remove()
                this.bullets = this.bullets.filter(bullet => bullet != b)
            }
        }

        for(let s of this.superheroes){
            for(let bullet of this.bullets){
                if(this.checkCollision(s.getBoundingRect(), bullet.getBoundingRect())){
                    console.log("bullet hit superhero");
                    bullet.remove()
                    this.bullets = this.bullets.filter(b => b != bullet)    
                    s.hit()
                    this.ui.update()
                }
            }
            for(let e of this.enemies){
                if(this.checkCollision(s.getBoundingRect(), e.getBoundingRect())){
                    // console.log("Superhero hit enemy");
                    this.removeEnemy(e)                   
                }
            }
        }        
        //Update ui
        
        requestAnimationFrame(() => this.gameLoop())
    }

    public removeEnemy(enemy : Enemy){
        enemy.remove()
        this.ui.addPoints()
        this.enemies = this.enemies.filter(e => e != enemy)
        this.enemies.push(new Enemy("thugs", this))
    }

    public removeSuperhero(s : Superhero){
        s.remove()
        this._superheroes = this._superheroes.filter(hero => hero != s)
        if(this._superheroes.length < 1){
            this.ui.clear()            
            for(let enemy of this.enemies){
                enemy.remove()
            }            
            for(let bullet of this.bullets){
                bullet.remove()
            }
            this.bullets = []
            this.enemies = []
            this.endScreen = new EndScreen(this.ui.score)
        }
    }

    public addBullet(b:Bullet) {
        this.bullets.push(b)
    }

    private checkCollision(a: ClientRect, b: ClientRect) : boolean {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
     }
}
new Game()