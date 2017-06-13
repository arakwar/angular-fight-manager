export class Character {
    name : string;
    x    : number;
    y    : number;
    type : string;
    src  : string;

    constructor(name=null,x=null,y=null,type=null,src=null){
        return this.init(name,x,y,type,src);
    }

    init(name,x,y,type,src){
        this.name = name;
        this.x    = x;
        this.y    = y;
        this.type = type;
        this.src  = src;
        return this;
    }

    clone(char: Character){
        this.name = char.name;
        this.x    = char.x;
        this.y    = char.y;
        this.type = char.type;
        this.src  = char.src;
    }

    triangle(){
        return (this.x-24)+','+(this.y+24)+' '+(this.x+24)+','+(this.y+24)+' '+(this.x)+','+(this.y-24);
    }
}