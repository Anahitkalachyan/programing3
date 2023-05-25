var side = 8;
var socket = io();
var n = 60;
var m = 60;

function setup() {
    frameRate(20);
    noStroke()
    createCanvas(n * side, m * side);
    stroke(255);
    background('#e8e8e8');
}
  socket.on("matrix", drawMatrix);
  
function drawMatrix(data) {
    matrix = data.matrix;
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("#42FF33");
            }
            else if (matrix[y][x] == 0) {
                fill("#e8e8e8");
            } else if (matrix[y][x] == 2) {
                fill("#B533FF");
            } else if (matrix[y][x] == 3) {
                fill("#3352FF")
            } else if (matrix[y][x] == 4) {
                fill("#FF0CFB")
            } else if (matrix[y][x] == 5) {
                fill("grey")
            } else if (matrix[y][x] == 10) {
                fill("#C9C9C9")
            }
            rect(x * side, y * side, side, side, side);
        }
    }
}