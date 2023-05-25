export default class Item{
    constructor({ position, imageSource, subImgs }){
        this.position = position;
        // this.width = 10;
        // this.height = 10;
        this.image = new Image();

        this.image.onload = () => {
            this.width = 32;
            this.height = 32;
        };
        this.image.src = imageSource;
        this.subImgs = subImgs;
        this.positionSubImg = 0;
        this.velSubImg = 3;
        this.lapseSubImg = 0;

    }

    animate(ctx){
        this.draw(ctx);
        this.changePositionSubImg();
    }

    draw(ctx){
        if(!this.image) {
            return
        }

        const boxItem = { position: { x: this.positionSubImg * (this.image.width/this.subImgs), y: 0 }, width: this.image.width/this.subImgs, height: this.image.height };
        ctx.drawImage(this.image, boxItem.position.x, boxItem.position.y, boxItem.width, boxItem.height, this.position.x, this.position.y, this.width, this.height);
    }

    changePositionSubImg(){
        this.lapseSubImg++;

        if(this.lapseSubImg % this.velSubImg === 0){
            if(this.positionSubImg < (this.subImgs-1)){
                this.positionSubImg++;
            } else {
                this.positionSubImg = 0;
            }
        }
    }

}
