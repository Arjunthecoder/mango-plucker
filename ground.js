class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic : true,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var groundpos = this.body.position;
        push();
        translate(groundpos.x,groundpos.y);
        rectMode(CENTER);
        rect(this.body,0,0,width,height);
        pop();
    }
}