import { Superhero } from "./superhero.js";
import { Enemy } from "./enemy.js";
import { UI } from "./ui.js";
import { EndScreen } from "./endScreen.js";
export class Game {
    constructor() {
        this._superheroes = [];
        this.enemies = [];
        this.bullets = [];
        console.log("Game was Created!");
        for (let e = 0; e < 2; e++) {
            this.enemies.push(new Enemy("thugs", this));
        }
        this.superheroes.push(new Superhero(this, "batman", ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]));
        this.superheroes.push(new Superhero(this, "catwoman", ["a", "d", "w", "s"]));
        this.ui = new UI(this);
        this.gameLoop();
    }
    get superheroes() {
        return this._superheroes;
    }
    gameLoop() {
        for (let s of this.superheroes) {
            s.update();
        }
        for (let e of this.enemies) {
            e.update();
            if (e.getBoundingRect().left < -100) {
                e.remove();
                this.enemies = this.enemies.filter(enemy => enemy != e);
                this.enemies.push(new Enemy("thugs", this));
            }
        }
        for (let b of this.bullets) {
            b.update();
            if (b.getBoundingRect().left < -100) {
                b.remove();
                this.bullets = this.bullets.filter(bullet => bullet != b);
            }
        }
        for (let s of this.superheroes) {
            if (!s.dead) {
                for (let bullet of this.bullets) {
                    if (this.checkCollision(s.getBoundingRect(), bullet.getBoundingRect())) {
                        bullet.remove();
                        this.bullets = this.bullets.filter(b => b != bullet);
                        s.hit();
                        this.ui.update();
                    }
                }
                for (let e of this.enemies) {
                    if (this.checkCollision(s.getBoundingRect(), e.getBoundingRect())) {
                        this.removeEnemy(e);
                    }
                }
            }
        }
        requestAnimationFrame(() => this.gameLoop());
    }
    removeEnemy(enemy) {
        enemy.remove();
        this.ui.addPoints();
        this.enemies = this.enemies.filter(e => e != enemy);
        this.enemies.push(new Enemy("thugs", this));
    }
    removeSuperhero(s) {
        s.remove();
        this._superheroes = this._superheroes.filter(hero => hero != s);
        if (this._superheroes.length < 1) {
            this.ui.clear();
            for (let enemy of this.enemies) {
                enemy.remove();
            }
            for (let bullet of this.bullets) {
                bullet.remove();
            }
            this.bullets = [];
            this.enemies = [];
            console.log(this._superheroes.length);
            if (!this.endScreen) {
                this.endScreen = new EndScreen(this.ui.score);
            }
        }
    }
    addBullet(b) {
        this.bullets.push(b);
    }
    checkCollision(a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    }
}
new Game();
//# sourceMappingURL=game.js.map