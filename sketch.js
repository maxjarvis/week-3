var a = 50;
var b = 50;
var x = 50;

function setup() {
  // put setup code here
createCanvas(600, 250);
background(210);
strokeWeight(5);


}

function draw() {
fill(55);
rect(x, x, a, b);
fill(155);
rect(x*4, x, a*2, b*2)
fill(255);
rect(x*8, x, a*3, b*3)

}
