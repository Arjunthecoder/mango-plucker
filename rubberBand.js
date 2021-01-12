class RubberBand{
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.04,
            length : 10,
        }
	this.bodyA = bodyA;
        this.pointB = pointB;
        this.rubber = Constraint.create(options);
        World.add(world,this.rubber);
    }
  fly(){
	this.rubber.bodyA=null;
    }

    attach(body){
        this.rubber.bodyA = body;
    }
    display(){

	if(this.rubber.bodyA){
        push();
	    var pointA = this.rubber.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        stroke(48,22,8);
	    fill("black");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
	}
    }
  
}