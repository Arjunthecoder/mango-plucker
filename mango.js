class Mango{
    constructor(x,y,r){
        var options = {
            isStatic : true,
            restitution : 0.8,
            friction : 1,
        }
        this.body = Bodies.circle(x,y,r,options);
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("mango.png");
        World.add(world, this.body)
    }
    display(){
        var mangopos = this.body.position;
        push();
        translate(mangopos.x,mangopos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}