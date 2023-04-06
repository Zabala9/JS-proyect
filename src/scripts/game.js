import Character2 from "./character2";
import Level2 from "./level2";
import { itemBlocks2 } from "./level2";
import { currentLevel, lives } from "./character2";

//-----------------------------------------------------------------------

const BACKGROUND = "./assets/fondo1.png";
const STOPPED = "./assets/mainCharacters/ninjaFrog/Idle.png";
const RUN = "./assets/mainCharacters/ninjaFrog/Run.png";
const JUMP = "./assets/mainCharacters/ninjaFrog/Jump.png";
const FALL = "./assets/mainCharacters/ninjaFrog/Fall.png";
const FALLLEFT = "./assets/mainCharacters/ninjaFrog/FallLeft.png";
const RUNLEFT = "./assets/mainCharacters/ninjaFrog/RunLeft.png";
const IDLELEFT = "./assets/mainCharacters/ninjaFrog/IdleLeft.png";
const JUMPLEFT = "./assets/mainCharacters/ninjaFrog/JumpLeft.png";
const WALLJUMP = "./assets/mainCharacters/ninjaFrog/WallJump.png";
const WALLJUMPLEFT = "./assets/mainCharacters/ninjaFrog/WallJumpLeft.png";

// const keys = {
//     p: {
//         status: false
//     }
// }

export default class Game {
    constructor(canvas){
        // initialize canvas
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        //level1: x:50, y:500
        this.positionCharacter = {x:20, y:20};
        this.pause = false;

        this.events();
        this.restart();
        this.currentLevel = 1;
    }
    // more methods
    restart(){
        // creating instance of Character
        // animations is a 'library' that has all the animations
        this.character = new Character2({position: this.positionCharacter, dimensionsCanvas: this.dimensions, imageSrc: STOPPED, subImgs: 11,
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
                FallLeft: { imageSrc: FALLLEFT, subImgs: 1, velSubImg: 3 },
                WallJump: { imageSrc: WALLJUMP, subImgs: 5, velSubImg: 3 },
                WallJumpLeft: { imageSrc: WALLJUMPLEFT, subImgs: 5, velSubImg: 3 }
            }
        });
        this.level = new Level2({position: {x:0, y:0}, imageSrc: BACKGROUND, subImgs: 1 });
        this.animate();
    }

    animate(){
        let gameRun = window.requestAnimationFrame(this.animate.bind(this));

        if(!this.pause){
            // creating background
            this.level.animate(this.ctx, this.dimensions);
            // calling animate from Character class
            this.character.animate(this.ctx, this.dimensions);
        }

        if(itemBlocks2.length === 0){

            const divCover = document.createElement('div');
            const footerDelete = document.getElementById('footer');
            footerDelete.remove();
            divCover.setAttribute('id', 'div-cover');
            const prg = document.createElement('label');
            prg.setAttribute('id', 'won');
            prg.textContent = "Congrats! you won!!";
            const prg2 = document.createElement('label');
            prg2.setAttribute('id', 'won2');
            prg2.textContent = "If you want to play again press 'restart'"
            const buttonRestart = document.createElement('a');
            buttonRestart.setAttribute('id', 'button-restart');
            buttonRestart.setAttribute('href', 'https://zabala9.github.io/Mister-Poong/');
            buttonRestart.textContent = 'Restart';

            divCover.append(prg);
            divCover.append(prg2);
            divCover.append(buttonRestart);
            document.body.append(divCover);
            

            buttonRestart.addEventListener('click', () => {
                this.currentLevel = 1;
                this.restart();
                const divCoverDelete = document.getElementById('div-cover');
                divCoverDelete.remove();
            });

            cancelAnimationFrame(gameRun);

        }

    }

    events(){
        window.addEventListener('keydown', (event) => {
            switch(event.key){
                case 'p':
                    if(this.pause){
                        this.pause = false;
                    } else {
                        this.pause = true;
                    }
            }
        });
    }
}

