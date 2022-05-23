const worldWidth = 160;
const worldHeight = 90;

const globalAccelerationY = 30;

const rect = {
    x: 0,
    y: 9,
    color: 'green',
    width: worldWidth,
    height: 1
}

const ball1 = {
    x: 10,
    y: 10,
    color: 'black',
    radius: 10,
    velocityX: 0,
    velocityY: 0,

    skips: 0,
    skip: 0,
    totalDelta: 0
}

const ball2 = {
    x: 10,
    y: 10,
    color: 'red',
    radius: 10,
    velocityX: 0,
    velocityY: 0,

    skips: 20,
    skip: 0,
    totalDelta: 0
}

const balls = [ball1, ball2];

function updateBall(ball, timeDelta) {
    ball.totalDelta += timeDelta;

    if (ball.skip >= ball.skips) {
        ball.skip = 0;

        ball.velocityY += globalAccelerationY * ball.totalDelta;

        const deltaX = ball.velocityX * ball.totalDelta;
        const deltaY = ball.velocityY * ball.totalDelta;

        ball.x += deltaX;
        ball.y += deltaY;

        const distanceToGround = worldHeight - (ball.y + ball.radius * 2);

        if (distanceToGround < 0) {
            ball.y = worldHeight + distanceToGround - ball.radius * 2;
            ball.velocityY = -ball.velocityY;
        }

        const distanceToRight = worldWidth - (ball.x + ball.radius * 2);

        if (distanceToRight < 0) {
            ball.x = worldWidth + distanceToRight - ball.radius * 2;
            ball.velocityX = -ball.velocityX;
        }

        const distanceToLeft = ball.x;

        if (distanceToLeft < 0) {
            ball.x = -distanceToLeft
            ball.velocityX = -ball.velocityX;
        }


        ball.totalDelta = 0;
    } else {
        ball.skip += 1;
    }
}

function update(timeDelta) {
    balls.forEach(ball => updateBall(ball, timeDelta));
}
