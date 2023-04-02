export default class Character{
    constructor(position, collisionBlocks){
        this.position = position;
        this.velocity = {
            x: 1,
            y: 1
        }
        this.height = 70;
        this.width = 70;

        // velocity going down
        this.gravity = 0.5;
        this.collisionBlocks = collisionBlocks;
    }

    animate(ctx, dimensions){
        this.draw(ctx);
        this.updatePosition();
        // this.checkVerticalCollisions();
        
    }

    draw(ctx){
        // drawing square red(character)
        ctx.fillStyle = "red";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    updatePosition(){
        this.position.x += this.velocity.x;
        this.checkHorizontalCollisions();
        this.gravedad();
        this.checkVerticalCollisions();
    }

    checkHorizontalCollisions(){
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
        this.position.y += this.velocity.y; // changing the pos to move the character down
        this.velocity.y += this.gravity; // updating the position
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

