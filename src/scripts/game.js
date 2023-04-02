import Character from "./character";
import Level from "./level";
import CollisionTest from "./collision";
import { collision } from "../data/collisions";

const KEYS = {
    d: {
        typed: false,
    },
    a: {
        typed: false
    }
}

//creating 2D array for the collisions
let collisionsMap = [];
for(let i=0; i < collision.length; i += 93){
    collisionsMap.push(collision.slice(i, 93+i));
}

//creating the instance for the collisions
const collisionBlocks = [];
collisionsMap.forEach((row, y) => {
    row.forEach((ele, x) => {
        if(ele === 5156){
            collisionBlocks.push(new CollisionTest({x: x * 12, y: y * 12 }));
        }
    });
});

const IMG = "./assets/fondo2Test.png";

export default class Game {
    constructor(canvas){
        // initialize canvas
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.restart();
        this.events();
    }
    // more methods
    restart(){
        // creating instance of Character
        this.character = new Character({x:50, y:50}, collisionBlocks);
        this.level = new Level({x:0, y:0}, IMG);
        // this.collision = new Collision();
        this.animate();
    }

    animate(){
        window.requestAnimationFrame(this.animate.bind(this));
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
        
        // creating background
        this.level.animate(this.ctx, this.dimensions);

        //creating collision blocks
        collisionBlocks.forEach(el => {
            el.animate(this.ctx);
        });
        // this.collision.animate(this.ctx);

        // calling animate from Character class
        this.character.animate(this.ctx, this.dimensions);



        //changing velocity if the key is press or type
        this.character.velocity.x = 0;
        if(KEYS.d.typed){
            this.character.velocity.x = 4;
        } else if(KEYS.a.typed){
            this.character.velocity.x = -4;
        }
    }

    events(){
        window.addEventListener("keydown", (event)=> {
            
            //changing the typed to true if the key is typed.
            switch(event.key){
                case 'd':
                case 'ArrowRight':
                    KEYS.d.typed = true;
                    break;
                case 'a':
                case 'ArrowLeft':
                    KEYS.a.typed = true;
                    break;
                case ' ':
                    this.character.velocity.y = -13;
                    break;
            }
        })

        // if the key is no typed this will be false again.
        // in that way we can stop the character if the key is not press
        window.addEventListener('keyup', (event)=> {
            switch(event.key){
                case 'd':
                case 'ArrowRight':
                    KEYS.d.typed = false;
                    break;
                case 'a':
                case 'ArrowLeft':
                    KEYS.a.typed = false;
                    break;
            }
        })
    }
}
