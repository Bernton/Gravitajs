const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');



let drawWidth;
let drawHeight;
let screenX;
let screenY;
let screenWidth;
let screenHeight;

const screenRatio = worldWidth / worldHeight;

let canvasRatio;

scaleCanvas();

function draw() {
    scaleCanvas();
    scaleScreen();
    drawScreen();
    drawWorld();
}

function scaleCanvas() {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    canvasRatio = canvas.width / canvas.height;
}

function scaleScreen() {
    if (screenRatio > canvasRatio) {
        screenWidth = canvas.width;
        screenHeight = screenWidth / screenRatio;
        screenX = 0;
        screenY = (canvas.height - screenHeight) * 0.5;
    } else {
        screenHeight = canvas.height;
        screenWidth = screenHeight * screenRatio;
        screenY = 0;
        screenX = (canvas.width - screenWidth) * 0.5;
    }
}

function drawScreen() {
    drawCanvasRectangle(screenX - 1, screenY - 1, screenWidth + 2, screenHeight + 2, 1, "black");
}

function drawWorld() {
    drawBall(ball1);
    drawBall(ball2);   
    drawRect(rect);
}

function drawBall(ball) {
    drawCircle(ball.x, ball.y, ball.radius, 1, ball.color);
}

function drawCircle(x, y, radius, lineWidth, color) {
    context.beginPath();
    context.lineWidth = lineWidth;
    context.strokeStyle = color;
    context.arc(screenX + scale(x + radius), screenY + scale(y + radius), scale(radius), 0, 2 * Math.PI);
    context.stroke();
}

function drawRect(rect) {
    drawCanvasRectangle(screenX + scale(rect.x), screenY + scale(rect.y), scale(rect.width), scale(rect.height), 1, rect.color);
}

function scale(length) {
    return screenWidth / worldWidth * length;
}

function drawCanvasRectangle(x, y, width, height, lineWidth, color) {
    context.beginPath();
    context.lineWidth = lineWidth;
    context.strokeStyle = color;
    context.rect(x, y, width, height); 
    context.stroke();
}