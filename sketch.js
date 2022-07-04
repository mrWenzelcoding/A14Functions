let x=[];
let y=[];
let size=[];
let r=[];
let g=[];
let b=[];
let a=[];

function setup() {
  createCanvas(600, 600);
  display();
}

function draw() {
  background(0);
  lifeSpan();
}

function display(){
    for(let i = 0; i<30;i++){
      x[i] = random(20, 580)
      y[i] = random(20, 580)
      size[i] = random(20,80)
      noStroke()
      r[i] = random(0,50);
      g[i] = random(100,150); 
      b[i] = random(200,255);
      a[i] = random(10,255);
      fill(r[i],g[i],b[i],a[i])
      ellipse(x[i],y[i],size[i]);
    }
  }
  

function move(){
  for(let i = 0; i<30;i++){
    let xSpeed=[];
    let ySpeed=[];
    xSpeed[i] = random(-2,2);
    ySpeed[i] = random(-2,2);
    x[i] = constrain(x[i] + xSpeed[i],0,600)
    y[i] = constrain(y[i] + ySpeed[i],0,600)
  }
}

function lifeSpan(){
  for(let i=0; i<30; i++){
    a[i]-=5
    fill(r[i],g[i],b[i],a[i]);
    ellipse(x[i],y[i],size[i])
    move();
    if(a[i]<0){
      x[i] = random(0,600);
      y[i] = random(0,600);
      a[i] = 255
      size[i] = random(20,80)
      r[i] = random(0,50);
      g[i] = random(100,150); 
      b[i] = random(200,255);
    } 
  }
}

