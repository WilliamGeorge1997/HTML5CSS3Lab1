let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  let width = 500;
  let height = 500;
  canvas.width = width;
  canvas.height = height;
  let x = 0;
  let y = 0;
  let dx = 1;
  let dy = 1;

  function drawLine() {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(x, y);
    ctx.lineWidth = 10;
    ctx.strokeStyle = "red";
    ctx.stroke();

    x += dx;
    y += dy;

    if (x > width || y > height) {
      alert("Animation End");
    } else {
      requestAnimationFrame(drawLine);
    }
  }

  drawLine();