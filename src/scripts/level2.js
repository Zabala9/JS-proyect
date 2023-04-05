import Collision from "./collision";
import Item from "./item";
import { collision2, items2, destroy2 } from "../data/secondLevel";
import Destroy from "./destroy";

const IMGITEM = "./assets/items/Strawberry.png";
const BLOCKSDESTROY = "./assets/items/destroy.png";

//creating 2D array for the collisions
let collisionsMap2 = [];
for(let i=0; i < collision2.length; i += 93){
    collisionsMap2.push(collision2.slice(i, 93+i));
}
//creating the instance for the collisions
const collisionBlocks2 = [];
collisionsMap2.forEach((row, y) => {
    row.forEach((ele, x) => {
        if(ele === 5153){
            collisionBlocks2.push(new Collision({x: x * 12, y: y * 12 }));
        }
    });
});

let itemsMap2 = [];
for(let i=0; i < items2.length; i+= 93){
    itemsMap2.push(items2.slice(i, 93+i));
}

const itemBlocks2 = [];
itemsMap2.forEach((row, y) => {
    row.forEach((ele, x) => {
        if(ele === 5153){
            itemBlocks2.push(new Item({position: {x: x * 12, y: y * 12}, imageSource: IMGITEM, subImgs: 17}));
        }
    });
});

let destroyMap2 = [];
for(let i=0; i< destroy2.length; i+= 93){
    destroyMap2.push(destroy2.slice(i, 93+i));
}

const destroyBlocks2 = [];
destroyMap2.forEach((row, y) => {
    row.forEach((ele, x) => {
        if(ele === 5153){
            destroyBlocks2.push(new Destroy({position: {x: x * 12, y: y * 12}, imageSrc: BLOCKSDESTROY}));
        }
    });
});

//-----------------------------------------------------------------------------------

export default class Level2 {
    constructor({ position, imageSrc, subImgs = 1 }){
        this.position = position;
        this.loaded = false;
        this.image = new Image();

        //when the img load we are defined the size
        this.image.onload = () => {
            //taking one 'img' inside the subImgs
            this.width = this.image.width / subImgs;
            this.height = this.image.height;
            this.loaded = true;
        };
        this.image.src = imageSrc;

        //in case the img has more 'img' inside (see ninjaFrog/idle.png)
        this.subImgs = subImgs;

        //position inside the subImgs
        this.positionSubImg = 0;

        //velocity for change pos subImg
        this.velSubImg = 3;

        //how many subImg has a lapse since the creation of this animation
        this.lapseSubImg = 0;
    }

    draw(ctx){
        /* if the image is not loaded/exists I want to return all together
        becasue if we try to call c.drawImage, the this.image will be undefined 
        and this will be an error */
        if(!this.image){
            return
        }

        // one position in the img
        //the 'x' is moving through the img to change the animation
        const boxCharacter = { position: {x: this.positionSubImg * (this.image.width / this.subImgs), y: 0}, width: this.image.width / this.subImgs, height: this.image.height };
        //img, the box pos and box width and height, position of creation, size of img
        ctx.drawImage(this.image, boxCharacter.position.x, boxCharacter.position.y, boxCharacter.width, boxCharacter.height, this.position.x, this.position.y, this.width, this.height);
    }

    animate(ctx){
        this.draw(ctx);
        this.changePositionSubImg();

        //creating collision blocks
        collisionBlocks2.forEach(el => {
            el.animate(ctx);
        });

        itemBlocks2.forEach(el => {
            el.animate(ctx);
        });

        destroyBlocks2.forEach(el => {
            el.animate(ctx);
        });
    }

    changePositionSubImg(){
        this.lapseSubImg++;

        /* we are using % to divide 0 by 3 and see if we have any reminder
            if there is not reminder we are going to run the if inside and
            add 1 to positionSubImg */
        if(this.lapseSubImg % this.velSubImg === 0){
            /* -1 because my backgroud has a subImgs of 1 and my positionSubImg is equals to 0 
            so we don't want to increase the positionSubImg */
            if(this.positionSubImg < (this.subImgs-1)){
                this.positionSubImg++;
            } else {
                this.positionSubImg = 0;
            }
        }
    }

}

export {itemBlocks2, collisionBlocks2, destroyBlocks2};