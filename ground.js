class Ground {


constructor (x ,y,width,height) {
var ground1 = {
    isStatic : true
}
 this.body = Bodies.rectangle(x, y ,width,height,ground1)   
this.width = width
this.height = height 
World.add(world,this.body)
}

 display(){
push()
fill ("brown")
rectMode (CENTER)
rect (this.body.position.x,this.body.position.y,this.width,this.height)
pop()
}

}
