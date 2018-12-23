let n =1;
let angle=0;
let scl=7;
function setup() {
  createCanvas(800, 700);
}

function draw() {
  background(0,0,0);
  translate(400,350);
  stroke(255);
  noFill();
  let prevx=0;
  let prevy=0;
  let t = atan(1/sqrt(n));
  for(let i = 0;i<n;i++){
  	line(0,0,cos(angle)*scl*sqrt(i),sin(angle)*scl*sqrt(i))
    line(prevx,prevy,cos(angle)*scl*sqrt(i),sin(angle)*scl*sqrt(i))
    prevx = cos(angle)*scl*sqrt(i);
    prevy = sin(angle)*scl*sqrt(i);
    angle-=t;
    if(n<1000){
  	n+=1;
  }
  }
  
  
  	angle=0;
  
  
}