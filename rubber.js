class Rubber{
    constructor(x,y,radius){
        var options={
            restitution:0.8,
            friction:1,
            density:1
        }
        this.body=Bodies.circle(x,y,20,options);
        this.radius=20;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(4);
        stroke("orange");
        fill("green");
        ellipseMode(RADIUS);
        ellipse(0,0,20);
        pop();
    
    }
    
    }