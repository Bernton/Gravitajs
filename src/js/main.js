let lastTimestamp = 0;
window.requestAnimationFrame(loop);

let timeScaleFactor = 1;

function loop(timestamp) {
  const timeDeltaMilliseconds = timestamp - lastTimestamp;
  const timeDeltaSeconds = timeDeltaMilliseconds / 1000;

  update(timeDeltaSeconds * timeScaleFactor);
  draw();

  lastTimestamp = timestamp;
  window.requestAnimationFrame(loop);
}

document.addEventListener('keydown', onKeyDown);

document.addEventListener('wheel', onWheel);

function onKeyDown(eventd) {
    // loop(lastTimestamp + 100);
}

function onWheel(event) {
    let scaleFactor;

    if (event.deltaY < 0) {
        scaleFactor = 1 / (1 + -event.deltaY / 100)
    } else {
        scaleFactor = 1 + event.deltaY / 100;
    }

    timeScaleFactor *= scaleFactor;
}