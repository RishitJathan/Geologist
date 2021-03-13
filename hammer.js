class Hammer{
    constructor(x, y){
        var options={
            restitution:0.8,
            friction:1,
            density:1
        }
        this.body=Bodies.rectangle( x, y, 30, 100,options);
        this.width=30;
        this.height=100;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(4);
        stroke('coral')
        fill('yellow')
        rectMode(CENTER)
        rect(0,0,this.width,this.height);
        pop();

    }
    
}