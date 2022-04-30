const jariJari = parseFloat(400);
const tampilData = document.getElementById("data");
let totalTitik = 0;
let titikLingkaran = 0;

function setup() {
  createCanvas(805, 805);
  background(0);
  translate(width / 2, height / 2);
  stroke(255);
  strokeWeight(5);
  noFill();
  ellipse(0, 0, jariJari * 2, jariJari * 2);
  rectMode(CENTER);
  rect(0, 0, jariJari * 2, jariJari * 2);
}

function draw() {
  translate(width / 2, height / 2);
  let x = random(-jariJari, jariJari);
  let y = random(-jariJari, jariJari);
  totalTitik++;
  let d = parseFloat(Math.sqrt(x * x + y * y));

  if (d < jariJari) {
    stroke(0, 0, 244);
    titikLingkaran++;
  } else {
    stroke(255);
  }
  let PI = (4 * titikLingkaran) / totalTitik;

  tampilData.innerHTML = `
  
  TOTAL TITIK = ${totalTitik}<br>
  TITIK DI LINGKARAN = ${titikLingkaran}<br>
  ESTIMASI NILAI PI = ${PI}

  `;

  point(x, y);
}
