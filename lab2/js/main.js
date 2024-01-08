let redRange = document.getElementById("red");
let greenRange = document.getElementById("green");
let blueRange = document.getElementById("blue");
let paragraph = document.getElementById("paragraph");

function updateColor() {
  let redValue = redRange.value;
  let greenValue = greenRange.value;
  let blueValue = blueRange.value;
  let color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
  paragraph.style.color = color;
}

redRange.addEventListener("input", function () {
  updateColor();
});
greenRange.addEventListener("input", function () {
  updateColor();
});
blueRange.addEventListener("input", function () {
  updateColor();
});
