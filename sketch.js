let done = false;

function setup() {

  createCanvasFx(800, 800, 'mysketch');

  // ... setup code
}

function draw() {

  // ... draw code
 
  if (done) {
    noLoop();
    previewFx(); // capture preview
  }
}