class Bob{
    constructor(x,y,r,angle){
        var options={
           
    
            frictionAir:0.005,
            density:1
        
            }
            this.x=x
             this.y=y
              this.r=r
              this.body=Bodies.circle(this.x,this.y,this.r,options)
              World.add(world,this.body)

    }
    display(){
        var angle=this.body.angle
push();
translate(this.body.position.x,this.body.position.y)

rotate(angle)
ellipseMode(RADIUS)
ellipse(0,0,this.r,this.r)
pop()
    }
}