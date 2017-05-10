//good parts of this code all created by daniel shiffman


var s;
var s2;
var scl = 20;


var buttonUp;
var buttonDown;
var buttonLeft;
var buttonRight;

var food;

function setup() {
  createCanvas(600, 600);
  s = new Snake();
  s2 = new Snake2();
  frameRate(10);
  pickLocation();

  buttonUp = createButton('UP');
  buttonUp.position(900, 20);
  buttonUp.mousePressed(goup);
  buttonDown = createButton('DOWN');
  buttonDown.position(900, 40);
  buttonDown.mousePressed(godown);
  buttonLeft = createButton('LEFT');
  buttonLeft.position(860, 40);
  buttonLeft.mousePressed(goleft);
  buttonRight = createButton('RIGHT');
  buttonRight.position(940, 40);
  buttonRight.mousePressed(goright);

}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function draw() {
  background(51);

  if (s.eat(food)) {
    pickLocation();
  }
  s.death();
  s.update();
  s.show();

  if (s2.eat(food)) {
    pickLocation();
  }
  s2.death();
  s2.update();
  s2.show();

  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);

//if (s.totalo != s.total || s.deathso != s.deaths || s2.totalo != s2.total || s2.deathso != s2.deaths) {
//
//  p2 = createP("Snake 2: " + s2.total + "    Deaths: " + s2.deaths);
//  p1 = createP("Snake 1: " + s.total + "    Deaths: " + s.deaths);
//  if (s.total > s2.total) {
//    p1.style("background-color", "purple");
//  } else {
//    p2.style("background-color", "purple");
//  }
//}

  s.totalo = s.total;
  s.deathso = s.deaths;
  s2.totalo = s2.total;
  s2.deathso = s2.deaths;
}





function goup() {
    s2.dir(0, -1);  }
    function godown() {
        s2.dir(0, 1);  }
        function goleft() {
            s2.dir(-1, 0);  }
            function goright() {
                s2.dir(1, 0);  }

function keyPressed() {
  if (keyCode === UP_ARROW && s.yspeed != 1) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW && s.yspeed != -1) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW && s.xspeed != -1) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW && s.xspeed != 1) {
    s.dir(-1, 0);
  }
}
