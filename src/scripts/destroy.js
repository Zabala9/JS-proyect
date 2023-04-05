export default class Destroy{
    constructor({ position, imageSrc }){
        this.position = position;
        // this.width = 12;
        // this.height = 12;

        this.image = new Image();
        this.image.onload = () => {
            this.width = 12;
            this.height = 12;
        };
        this.image.src = imageSrc;
    }

    animate(ctx){
        this.draw(ctx);
    }

    draw(ctx){
        if(!this.image){
            return
        }
        // ctx.fillStyle = "transparent";
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
}