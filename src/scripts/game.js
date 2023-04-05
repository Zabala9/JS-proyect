import Character from "./character";
import Level from "./level";
import Collision from "./collision";
import { collision } from "../data/collisions1";
import { items } from "../data/items1";
import Item from "./item";

const IMGITEM = "./assets/items/Strawberry.png";

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
            collisionBlocks.push(new Collision({x: x * 12, y: y * 12 }));
        }
    });
});

//----------------------------------------------------------------------------------------------

let itemsMap = [];
for(let i=0; i < items.length; i+= 93){
    itemsMap.push(items.slice(i, 93+i));
}

const itemBlocks = [];
itemsMap.forEach((row, y) => {
    row.forEach((ele, x) => {
        if(ele === 10287){
            itemBlocks.push(new Item({position: {x: x * 12, y: y * 12}, imageSource: IMGITEM, subImgs: 17}));
        }
    });
});

//-----------------------------------------------------------------------

const BACKGROUND = "./assets/fondo2.png";
const STOPPED = "./assets/mainCharacters/ninjaFrog/Idle.png";
const RUN = "./assets/mainCharacters/ninjaFrog/Run.png";
const JUMP = "./assets/mainCharacters/ninjaFrog/Jump.png";
const FALL = "./assets/mainCharacters/ninjaFrog/Fall.png";
const FALLLEFT = "./assets/mainCharacters/ninjaFrog/FallLeft.png";
const RUNLEFT = "./assets/mainCharacters/ninjaFrog/RunLeft.png";
const IDLELEFT = "./assets/mainCharacters/ninjaFrog/IdleLeft.png";
const JUMPLEFT = "./assets/mainCharacters/ninjaFrog/JumpLeft.png";

export default class Game {
    constructor(canvas){
        // initialize canvas
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.positionCharacter = {x:50, y:500};

        this.restart();
        this.events();
    }
    // more methods
    restart(){
        // creating instance of Character
        // animations is a 'library' that has all the animations
        this.character = new Character({position: this.positionCharacter, dimensionsCanvas: this.dimensions, collisionBlocks, collisionItems: itemBlocks, imageSrc: STOPPED, subImgs: 11,
            animations: {
                /*in the for to take the appropiate animation, we're gonna create
                a new key-value (image: new Image()) */
                Idle: { imageSrc: STOPPED, subImgs: 11, velSubImg: 3 },
                IdleLeft: { imageSrc: IDLELEFT, subImgs: 11, velSubImg: 3 },
                Run: { imageSrc: RUN, subImgs: 11, velSubImg: 4 },
                RunLeft: { imageSrc: RUNLEFT, subImgs: 11, velSubImg: 4 },
                Jump: { imageSrc: JUMP, subImgs: 1, velSubImg: 3 },
                JumpLeft: { imageSrc: JUMPLEFT, subImgs: 1, velSubImg: 3 },
                Fall: { imageSrc: FALL, subImgs: 1, velSubImg: 3 },
                FallLeft: { imageSrc: FALLLEFT, subImgs: 1, velSubImg: 3 }
            }
        });
        this.level = new Level({position: {x:0, y:0}, imageSrc: BACKGROUND, subImgs: 1 });
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

        // calling animate from Character class
        this.character.animate(this.ctx, this.dimensions);

        //changing velocity if the key is press or typed
        this.character.velocity.x = 0;
        if(KEYS.d.typed){
            /*when I press an expecific key I want to swap the animation */
            this.character.swapAnimation('Run');
            this.character.velocity.x = 3;
            this.character.lastDirection = 'right';
        } else if(KEYS.a.typed){
            this.character.swapAnimation('RunLeft');
            this.character.velocity.x = -3;
            this.character.lastDirection = 'left';
        } else if(this.character.velocity.y === 0){
            if(this.character.lastDirection === 'right'){
                this.character.swapAnimation('Idle');
            } else {
                this.character.swapAnimation('IdleLeft');
            }
        }

        if(this.character.velocity.y < 0){
            if(this.character.lastDirection === 'right'){
                this.character.swapAnimation('Jump');
            } else {
                this.character.swapAnimation('JumpLeft');
            }
        } else if(this.character.velocity.y > 0){
            if(this.character.lastDirection === 'right'){
                this.character.swapAnimation('Fall');
            } else {
                this.character.swapAnimation('FallLeft');
            }
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
                    if(this.character.velocity.y === 0){
                        this.character.velocity.y = -13;
                    }
                    break;
            }
        });

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
        });
    }
}
