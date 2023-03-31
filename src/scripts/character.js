export default class Character{
    constructor(position){
        this.position = position;
        this.velocity = {
            x: 0,
            y: 1
        }

        // velocity going down
        this.height = 100;
        this.gravity = 0.5;
    }

    animate(ctx, dimensions){
        this.draw(ctx);
        this.updatePosition();
        // console.log(dimensions);

        /* if the bottom of the character is passing the botton
        of the canvas, we know that we don't want to use updatePosition
        */
        if(this.position.y + this.height + this.velocity.y < dimensions.height){
            this.velocity.y += this.gravity; // updating the position
        } else {
            this.velocity.y = 0; //velocity is 0, so the character will not keep moving
        }
        
    }

    draw(ctx){
        // drawing square red(character)
        ctx.fillStyle = "red";
        ctx.fillRect(this.position.x, this.position.y, 100, this.height);
    }

    updatePosition(){
        // changing the pos to move the character down
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
}

