export class Character {
    name : string;
    x    : number;
    y    : number;
    type : string;

    constructor(name,x,y,type){
        this.name = name;
        this.x    = x;
        this.y    = y;
        this.type = type;
    }

    triangle(){
        return (this.x-24)+','+(this.y+24)+' '+(this.x+24)+','+(this.y+24)+' '+(this.x)+','+(this.y-24);
    }
}