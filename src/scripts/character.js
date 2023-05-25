import Level, { collisionBlocks, itemBlocks } from "./level";
import Item from "./item";

const desappearingItem = './assets/items/desappearing.png';

const KEYS = {
    d: {
        typed: false,
    },
    a: {
        typed: false
    },
    c: {
        typed: false
    }
}

let lives1 = 3;
let currentLevel = 1;

export default class Character extends Level{
    constructor({ position, dimensionsCanvas, imageSrc, subImgs, animations }){
        super({ imageSrc, subImgs });
        this.position = position;
        this.dimensionsCanvas = dimensionsCanvas;
        this.velocity = {
            x: 1,
            y: 1
        }

        // velocity going down
        this.gravity = 0.5;

        this.animations = animations;
        this.lastDirection = 'right';

        //taking the appropiate animation
        for(let key in this.animations){
            const image = new Image();
            image.src = this.animations[key].imageSrc;

            //we are adding an img propertie into the animations hash
            this.animations[key].image = image;
        }

        this.widthItem = 10;
        this.heightItem = 10;
        this.widthBlock = 12;
        this.heightBlock = 12;

        this.events();

        let footer = document.createElement('FOOTER');
        footer.setAttribute('id', 'footer1');
        document.body.appendChild(footer);

        let p1 = document.createElement('P');
        let p1Text = document.createTextNode(`Items to collect: ${itemBlocks.length} `);
        p1.setAttribute('id', 'p-footer');
        p1.appendChild(p1Text);

        let p2 = document.createElement('P');
        let p2Text = document.createTextNode(`Lives: ${lives1}`);
        p2.setAttribute('id', 'p-footer');
        p2.appendChild(p2Text);

        let p3 = document.createElement('P');
        let p3Text = document.createTextNode(`Level: ${currentLevel}`);
        p3.setAttribute('id', 'p-footer');
        p3.appendChild(p3Text);

        footer.appendChild(p1);
        footer.appendChild(p2);
        footer.appendChild(p3);
    }

    swapAnimation(key){
        //I only want to call this if this.image is not equals to this.animation[key].image
        if(this.image === this.animations[key].image || !this.loaded){
            return
        }
        
        this.positionSubImg = 0;
        this.image = this.animations[key].image; //.image because I want to pass the key-value image
        this.subImgs = this.animations[key].subImgs;
        this.velSubImg = this.animations[key].velSubImg;
    }

    animate(ctx){

        this.draw(ctx);
        this.updatePosition();

        //changing velocity if the key is press or typed
        this.velocity.x = 0;
        if(KEYS.d.typed){
            /*when I press an expecific key I want to swap the animation */
            this.swapAnimation('Run');
            this.velocity.x = 3;
            this.lastDirection = 'right';
        } else if(KEYS.a.typed){
            this.swapAnimation('RunLeft');
            this.velocity.x = -3;
            this.lastDirection = 'left';
        } else if(this.velocity.y === 0){
            if(this.lastDirection === 'right'){
                this.swapAnimation('Idle');
                if(KEYS.c.typed){
                    this.swapAnimation('WallJump');
                }
            } else {
                this.swapAnimation('IdleLeft');
                if(KEYS.c.typed){
                    this.swapAnimation('WallJumpLeft');
                }
            }
        }

        if(this.velocity.y < 0){
            if(this.lastDirection === 'right'){
                this.swapAnimation('Jump');
            } else {
                this.swapAnimation('JumpLeft');
            }
        } else if(this.velocity.y > 0){
            if(this.lastDirection === 'right'){
                this.swapAnimation('Fall');
            } else {
                this.swapAnimation('FallLeft');
            }
        }

        this.checkCharacterOutOfBounds();
    }
    
    updatePosition(){
        this.changePositionSubImg();
        this.position.x += this.velocity.x;
        this.checkHorizontalCollisions();
        this.checkCollisionItems();
        this.gravedad();
        this.checkVerticalCollisions();
    }

    checkHorizontalCollisions(){
        for(let i=0; i < collisionBlocks.length; i++){
            const blocks = collisionBlocks[i];

            if(this.position.y + this.height >= blocks.position.y &&
                this.position.y <= blocks.position.y + blocks.height &&
                this.position.x <= blocks.position.x + blocks.width &&
                this.position.x + this.width >= blocks.position.x){
                    if(this.velocity.x > 0){
                        this.velocity.x = 0;
                        this.position.x = blocks.position.x - this.width - 0.01;
                        break;
                    }
                    if(this.velocity.x < 0){
                        this.velocity.x = 0;
                        this.position.x = blocks.position.x + blocks.width + 0.01;
                        break;
                    }
            }
        }
    }

    checkCollisionItems(){
        for(let i =0; i < itemBlocks.length; i++){
            const item = itemBlocks[i];

            if(this.position.y + this.height >= item.position.y &&
                this.position.y <= item.position.y + this.heightItem &&
                this.position.x <= item.position.x + this.widthItem &&
                this.position.x + this.width >= item.position.x){
                    //deleting item when the collision happens
                    itemBlocks.splice(i, 1);

                    // const pos = itemBlocks.length;

                    // console.log(itemBlocks);

                    // let counter = 1;
                    // while (counter === 1){
                    //     itemBlocks.push(new Item({position: {x: item.position.x, y: item.position.y}, imageSource: desappearingItem, subImgs: 5 }));
                    //     counter += 1;
                    // }

                    // setTimeout(() => {
                    //     itemBlocks.splice(pos, 1);
                    // }, 1000)

                    const footerDel = document.getElementById('footer1');
                    footerDel.remove();
    
                    let footer = document.createElement('FOOTER');
                        footer.setAttribute('id', 'footer1');
                        document.body.appendChild(footer);

                        let p1 = document.createElement('P');
                        let p1Text = document.createTextNode(`Items to collect: ${itemBlocks.length} `);
                        p1.setAttribute('id', 'p-footer');
                        p1.appendChild(p1Text);

                        let p2 = document.createElement('P');
                        let p2Text = document.createTextNode(`Lives: ${lives1}`);
                        p2.setAttribute('id', 'p-footer');
                        p2.appendChild(p2Text);

                        let p3 = document.createElement('P');
                        let p3Text = document.createTextNode(`Level: ${currentLevel}`);
                        p3.setAttribute('id', 'p-footer');
                        p3.appendChild(p3Text);

                        footer.appendChild(p1);
                        footer.appendChild(p2);
                        footer.appendChild(p3);
                    break;
            }
        }
    }

    gravedad(){
        this.velocity.y += this.gravity; // updating the position
        this.position.y += this.velocity.y; // changing the pos to move the character down
    }

    checkCharacterOutOfBounds(){
        if(this.position.y + this.width > this.dimensionsCanvas.height){
            lives1 = lives1-1;

            const footerDel = document.getElementById('footer1');
            footerDel.remove();

            let footer = document.createElement('FOOTER');
                footer.setAttribute('id', 'footer1');
                document.body.appendChild(footer);

                let p1 = document.createElement('P');
                let p1Text = document.createTextNode(`Items to collect: ${itemBlocks.length} `);
                p1.setAttribute('id', 'p-footer');
                p1.appendChild(p1Text);

                let p2 = document.createElement('P');
                let p2Text = document.createTextNode(`Lives: ${lives1}`);
                p2.setAttribute('id', 'p-footer');
                p2.appendChild(p2Text);

                let p3 = document.createElement('P');
                let p3Text = document.createTextNode(`Level: ${currentLevel}`);
                p3.setAttribute('id', 'p-footer');
                p3.appendChild(p3Text);

                footer.appendChild(p1);
                footer.appendChild(p2);
                footer.appendChild(p3);

            this.position.x = 20;
            this.position.y = 500;
        }
    }

    checkVerticalCollisions(){
        for(let i=0; i < collisionBlocks.length; i++){
            const blocks = collisionBlocks[i];

            /*first statement: check if the bottom of our player intersect with the top
                            of the collision block
            second statement: check if the top of the player is touching the bottom
                            of the collision block
            third statement:  if the player is moving to the left, check if the left side
                            of the player is less or igual to the rigth side of the collision block
            fourth statement: the same from the third statement but the oposite */
            if(this.position.y + this.height >= blocks.position.y &&
                this.position.y <= blocks.position.y + blocks.height &&
                this.position.x <= blocks.position.x + blocks.width &&
                this.position.x + this.width >= blocks.position.x){
                    if(this.velocity.y > 0){
                        this.velocity.y = 0;
                        this.position.y = blocks.position.y - this.height - 0.01;
                        break;
                    }
                    if(this.velocity.y < 0){
                        this.velocity.y = 0;
                        this.position.y = blocks.position.y + blocks.height + 0.01;
                        break;
                    }
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
                    if(this.velocity.y === 0){
                        this.velocity.y = -13;
                    }
                    break;
                case 'c':
                    KEYS.c.typed = true;
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
                case 'c':
                    KEYS.c.typed = false;
            }
        });
    }
}

export {itemBlocks, lives1, currentLevel};