export default class Level {
    constructor(position, imageSrc){
        this.position = position;
        this.image = new Image();
        this.image.src = imageSrc;
    }

    animate(ctx){
        this.draw(ctx);
    }

    draw(ctx){
        if(!this.image){
            return ctx.drawImage(this.image, this.position.x, this.position.y);
        }
    }

    
}
