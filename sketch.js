const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var box1,pig1,log1,box2,box3,box4,pig2,log2,box5,log3,log4,birds;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,550,70,70);
    box2 = new Box(900,550,70,70);
    pig1=new pig(800,550);
    log1=new log(800,500,300,PI);
    box3 = new Box(700,450,70,70);
    box4 = new Box(900,450,70,70);
    pig2=new pig(800,450);
    log2=new log(800,350,300,PI);
    ground = new Ground(600,height,1200,50)
    box5=new Box(800,300,70,70);
    log3= new log(850,300,150,PI/6);
    log4=new log(755,300,150,PI/-6);
    birds=new bird(200,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    ground.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    birds.display();
}