import Character from "./character";
import Level from "./level";

const KEYS = {
    d: {
        typed: false,
    },
    a: {
        typed: false
    }
}

// const IMG = "./im";

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
        this.character = new Character({x:0, y:0});
        this.level = new Level({x:0, y:0}, );
        this.animate();
    }

    animate(){
        window.requestAnimationFrame(this.animate.bind(this));
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
        
        // calling animate from Character class
        this.character.animate(this.ctx, this.dimensions);

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
                    this.character.velocity.y = -14;
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