export default class Item{
    constructor(position){
        this.position = position;
        this.width = 10;
        this.height = 10;
    }

    draw(ctx){
        ctx.fillStyle = "red";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}
