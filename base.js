class Base {
 constructor(x,y,width,heigth){
 var options = {
     isStatic : true

 };
 this.body=Bodies.rectangle(x,y,width,height,options);
 this.width=width;
 this.height=height;


 world.add(world,this.body)
 }

}