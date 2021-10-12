/* BLUEBANTO
Antonio Federico Brunetti
2nd Assignment_MarbleExperience*/

let c;
let q = [];
let tz = 0.0;
let d;
let rs = 50;
let palette = ["OrangeRed", "MediumSpringGreen", "Azure", "Violet", "HoneyDew"];
let bgColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  textAlign(CENTER, CENTER);
  strokeJoin(ROUND);

  bgColor = palette[2];

  for (let i = 0; i < width * 0.3; i++) {
    stroke(random(palette));
    strokeWeight(random(1, width * 0.02));
    let x = random(-width * 0.2, width * 1.0);
    line(x, 0, x, height);
  }

  textSize(height * 0.25);
  fill(0);
  stroke(0);
  strokeWeight(2);
  textFont("Trebuchet MS");
  text("BLUEBANTO", width / 2, height / 2);

  c = get();

  for (let j = 0; j < height; j += 1) {
    q.push(c.get(0, j, width, 1));
  }
}

function draw() {
  background(bgColor);

  let ty = 0;

  for (let k = 0; k < q.length; k += 1) {
    d = map(noise(k * 0.01, ty, tz), 0, 1, -width / 2, width / 2);

    image(q[k], d, k);

    ty += 0.01;
  }

  tz += 0.005;

  textSize(height / 30);
  fill(0);
  noStroke();
  textFont("Trebuchet MS");
  text("BLUEBANTO", 90, 30);

  textSize(height / 30);
  fill(0);
  noStroke();
  textFont("Trebuchet MS");
  text("MARBLE___EXPERIENCE", width / 2, 30);

  textSize(height / 30);
  fill(0);
  noStroke();
  textFont("Trebuchet MS");
  text("CC___2021", width - 90, 30);
}
