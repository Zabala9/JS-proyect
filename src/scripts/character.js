import Level from "./level";

export default class Character extends Level{
    constructor({ position, collisionBlocks, imageSrc, subImgs, animations }){
        super({ imageSrc, subImgs });
        this.position = position;
        this.velocity = {
            x: 1,
            y: 1
        }

        // velocity going down
        this.gravity = 0.5;
        this.collisionBlocks = collisionBlocks;

        this.animations = animations;

        //taking the appropiate animation
        for(let key in this.animations){
            const image = new Image();
            image.src = this.animations[key].imageSrc;

            //we are adding an img propertie into the animations hash
            this.animations[key].image = image;
        }

    }

    swapAnimation(key){
        //I only want to call this if this.image is not equals to this.animation[key].image
        if(this.image === this.animations[key].image || !this.loaded){
            return
        }
        this.image = this.animations[key].image; //.image because I want to pass the key-value image
        this.subImgs = this.animations[key].subImgs;
        this.velSubImg = this.animations[key].velSubImg;
    }

    animate(ctx){
        this.draw(ctx);
        this.updatePosition();
    }

    updatePosition(){
        this.changePositionSubImg();
        this.position.x += this.velocity.x;
        this.checkHorizontalCollisions();
        this.gravedad();
        this.checkVerticalCollisions();
    }

    checkHorizontalCollisions(){
        for(let i=0; i < this.collisionBlocks.length; i++){
            const blocks = this.collisionBlocks[i];

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

    gravedad(){
        this.velocity.y += this.gravity; // updating the position
        this.position.y += this.velocity.y; // changing the pos to move the character down
    }

    checkVerticalCollisions(){
        for(let i=0; i < this.collisionBlocks.length; i++){
            const blocks = this.collisionBlocks[i];

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
}

