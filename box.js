class Box{
    constructor(x, y, width, height) {
        var options = {
            isStatic: false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visiblity = 255;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        if(this.body.speed < 3){
          push();
        rectMode(CENTER);
        fill("gray");
        rect(pos.x, pos.y, this.width, this.height);
        pop();
         }
         else{
           World.remove(world, this.body);
           push();
           this.Visiblity = this.Visiblity - 5;
           tint(255,this.Visiblity);
           pop();
         }
         
       }
       
      }
