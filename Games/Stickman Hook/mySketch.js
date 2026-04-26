function preload() {
  // Replace 'path/to/your/image.jpg' with the actual path to your image
  myImage = loadImage('https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/ae/ed/22/aeed22b9-6b86-34ef-7464-af1657d2d5f7/AppIcon-1x_U007emarketing-0-7-0-85-220-0.png/1200x630wa.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
}

function draw() {
  background(100); // Clear the canvas on each frame

  // Calculate the center of the canvas
  let centerX = width / 2;
  let centerY = height / 2;

  // Calculate the position to center the image
  let imageX = centerX - myImage.width / 2;
  let imageY = centerY - myImage.height / 2;

  // Draw the image at the calculated position
  image(myImage, imageX, imageY);

  // You can add the circle here if you want it on top of the image, otherwise remove
  // from draw()
  //circle(mouseX, mouseY, 20);
}
