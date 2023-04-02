export default class Level {
    constructor(position, imageSrc){
        this.position = position;
        this.image = new Image();
        this.image.src = imageSrc;

    }

    animate(ctx, dimensions){
        this.drawBackgroud(ctx, dimensions);
    }

    drawBackgroud(ctx, dimensions){
        // if the image is not loaded I want to return all together
        if(!this.image){
            return
        }
        ctx.drawImage(this.image, this.position.x, this.position.y, dimensions.width, dimensions.height);
    }

}

