class log {
    constructor(x, y, length,angle) {
      var options = {
          'restitution':0.8,
          'friction':1.2,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, length,20, options);
      this.width = length;
      this.height = 20;
      Body.setAngle(this.body,angle);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      stroke("maroon");
      strokeWeight(3);
      fill("peru");
      rect(0, 0, this.width, this.height);
      pop();
    }
  }