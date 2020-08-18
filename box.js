class Box  {
    constructor(x, y, width, height, color){ 
      var options = {
        restitution: 0.4,
        friction: 0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.color = color;
      this.Visiblity = 255;
      World.add(world, this.body);
    }
    display() {
      if(this.body.speed < 6) {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle)
        fill(this.color);
        rectMode(CENTER);
      rect(0, 0 ,this.width, this.height);
      pop();
      }
      else {
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity -5;
        tint(255, this.Visiblity);
        pop();

      }
    }
  }
