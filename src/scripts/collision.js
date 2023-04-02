export default class CollisionTest{
    constructor(position){
        this.position = position;
        this.width = 12;
        this.height = 12;
    }

    animate(ctx){
        this.draw(ctx);
    }

    draw(ctx){
        ctx.fillStyle = "transparent";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}