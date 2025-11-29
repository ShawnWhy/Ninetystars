//import the images
import arnold from "./images/arnold.jpg";
import willis from "./images/willis.jpg";
import robin from "./images/robin.webp";
import reno from "./images/reno.jpg";
import reeves from "./images/reeves.webp";

// let arnold = "./images/arnold.jpg"
// let willis = "./images/willis.jpg"
// let robin = "./images/robin.webp"
// let reno = "./images/reno.jpg"
// let reeves = "./images/reeves.webp"

let canvassTwo = document.getElementById("canvas2");
let canvassOne = document.getElementById("canvas1");
let contextOne;
let img1;
let typeCanvas;
let chosenImage;

function randomPick(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}
// glyphs.push("Ukrain")
//randomly pick a image to apply to canvass 1
function pickimage() {
  // console.log("picking");
  const images = [arnold, willis, robin, reno, reeves];
  const randomImage = randomPick(images);
  return randomImage;
}

//set the chosen image to display on canvas 1
chosenImage = pickimage();
function setCanvassOne(chosenImage) {
  // console.log("canvas one");
  img1 = new Image();
  img1.src = chosenImage;
  //scale image to fit canvas
  console.log(img1);
  
  img1.onload = function () {
    typeCanvas = document.getElementById("canvas1");
    contextOne = typeCanvas.getContext("2d");
    
    // Calculate scale factor to fit within max dimensions
    const maxWidth = 500;
    const maxHeight = 900; // adjust as needed
    let scaleFactor = 1;
    
    if (img1.width > maxWidth) {
      scaleFactor = maxWidth / img1.width;
    }
    
    const scaledWidth = img1.width * scaleFactor;
    const scaledHeight = img1.height * scaleFactor;
    
    // Set canvas dimensions to scaled size
    typeCanvas.width = scaledWidth;
    typeCanvas.height = scaledHeight;
    canvassTwo.width = scaledWidth;
    canvassTwo.height = scaledHeight;
    // Draw the scaled image
    contextOne.drawImage(img1, 0, 0, scaledWidth, scaledHeight);
    // typeCanvas.width = img1.width;
    // typeCanvas.height = img1.height;
    // contextOne.drawImage(img1, 0, 0);
    // create the second canvas
    setCanvassTwo(chosenImage, 15, "mosaic-square");
    setCanvassTwo(chosenImage, 50, "mosaic-square2");
  };
}

function explode2(element, number = 6) {
  const color = element.getAttribute("style");
  let count=number;
  //   console.log(color)
  for (let i = 0; i < number; i++) {
    let smallSquare = document.createElement("div");
    smallSquare.classList.add("smallExplode");
    let randomRotation = Math.random() * 360;
    let smallsquareSize =
      element.getAttribute("style").match(/width:\s*(\d+)px/)[1] / 4;
    smallSquare.style.width = smallsquareSize + "px";
    smallSquare.style.height = smallsquareSize + "px";
    //get absolute position of the element
    const rect = element.getBoundingClientRect();
    if(rect.width===0 || rect.height===0){
      console.log("element already removed");
      continue;
    }
    if(rect.left===0 && rect.top===0){
      console.log("element already removed");
      continue;
    }

    let elementLeft = rect.left + (rect.width - smallsquareSize) / 2 + "px";
    let elementTop = rect.top + (rect.height - smallsquareSize) / 2 + "px";
    smallSquare.style.left = elementLeft;
    smallSquare.style.top = elementTop;

    let explodeLength = element
      .getAttribute("style")
      .match(/width:\s*(\d+)px/)[1];
    explodeLength = parseInt(explodeLength) * Math.random() * 2 + 1;
    smallSquare.style.transform = `rotate(${randomRotation}deg) translate(${
      Math.random() * 10 + explodeLength
    }px)`;
    let smallsquareRed = color
      .match(/rgb\(\d+,\s*\d+,\s*\d+\)/)[0]
      .match(/\d+/g)[0];
    let smallsquareGreen = color
      .match(/rgb\(\d+,\s*\d+,\s*\d+\)/)[0]
      .match(/\d+/g)[1];
    let smallsquareBlue = color
      .match(/rgb\(\d+,\s*\d+,\s*\d+\)/)[0]
      .match(/\d+/g)[2];
    let modifiedRed = parseInt(smallsquareRed) - Math.floor(Math.random() * 10);
    let modifiedGreen =
      parseInt(smallsquareGreen) - Math.floor(Math.random() * 10);
    let modifiedBlue =
      parseInt(smallsquareBlue) - Math.floor(Math.random() * 10);
    let fadeColor = `rgba(${modifiedRed}, ${modifiedGreen}, ${modifiedBlue} )`;
    smallSquare.style.backgroundColor = fadeColor;
    document.body.appendChild(smallSquare);

    count--;
    if(count<=0){
      element.remove();
      return;
    }
  }
}
//display an explosion effect
function explode(event, element, number) {
  const color = element.getAttribute("style");
  //   console.log(color)
  for (let i = 0; i < number; i++) {
    let smallSquare = document.createElement("div");
    smallSquare.classList.add("smallExplode");
    let randomRotation = Math.random() * 360;
    let smallsquareSize =
      element.getAttribute("style").match(/width:\s*(\d+)px/)[1] / 4;
    smallSquare.style.width = smallsquareSize + "px";
    smallSquare.style.height = smallsquareSize + "px";
    smallSquare.style.left = event.clientX + "px";
    smallSquare.style.top = event.clientY + "px";
    let explodeLength = element
      .getAttribute("style")
      .match(/width:\s*(\d+)px/)[1];
    explodeLength = parseInt(explodeLength) * Math.random() * 2 + 1;
    smallSquare.style.transform = `rotate(${randomRotation}deg) translate(${
      Math.random() * 10 + explodeLength
    }px)`;
    let smallsquareRed = color
      .match(/rgb\(\d+,\s*\d+,\s*\d+\)/)[0]
      .match(/\d+/g)[0];
    let smallsquareGreen = color
      .match(/rgb\(\d+,\s*\d+,\s*\d+\)/)[0]
      .match(/\d+/g)[1];
    let smallsquareBlue = color
      .match(/rgb\(\d+,\s*\d+,\s*\d+\)/)[0]
      .match(/\d+/g)[2];
    let modifiedRed = parseInt(smallsquareRed) - Math.floor(Math.random() * 10);
    let modifiedGreen =
      parseInt(smallsquareGreen) - Math.floor(Math.random() * 10);
    let modifiedBlue =
      parseInt(smallsquareBlue) - Math.floor(Math.random() * 10);
    let fadeColor = `rgba(${modifiedRed}, ${modifiedGreen}, ${modifiedBlue} )`;
    smallSquare.style.backgroundColor = fadeColor;
    document.body.appendChild(smallSquare);
  }
  element.remove();
}
function removeExplosions() {
  const explosions = document.querySelectorAll(".smallExplode");
  explosions.forEach((explosion) => {
    explosion.remove();
  });
}

function explodeSevenRandomly() {
  const smallSquares = document.querySelectorAll(".mosaic-square");
  const largeSquares = document.querySelectorAll(".mosaic-square2");

  removeExplosions();
  let squares;
  console.log("largeSquares.length", smallSquares);
  if (largeSquares.length < 7) {
    squares = [...smallSquares, ...largeSquares];
  } else {
    squares = largeSquares;
  }
  // console.log(largeSquares);
  let squaresArray = Array.from(squares);
  for (let i = 0; i < 7; i++) {
    let randomIndex = Math.floor(Math.random() * squaresArray.length);
    let squareToExplode = squaresArray[randomIndex];
    setTimeout(() => {
      explode2(squareToExplode);
    }, i * 60);
  }
}
const explodeButton = document.getElementById("explodeButton");
explodeButton.addEventListener("click", () => {
  explodeSevenRandomly();
});

//on click for the squares
document.addEventListener("click", (event) => {
  const square =
    event.target.closest(".mosaic-square") ||
    event.target.closest(".mosaic-square2");
  if (square) {
    // console.log('Square clicked:', square);
    explode(event, square, 4);
    //remove
  }
});

//on canvas 2 create squares of 10 pxs each to afstract the image
function setCanvassTwo(chosenImage, blocksize = 10, className) {
  // console.log("canvas two")
  const img2 = new Image();

  // console.log("image loaded 2")
  // canvassTwo = document.getElementById("canvas2");
  // console.log("canvassTwo", canvassTwo)
  // canvassTwo.width = canvassOne.width;
  // canvassTwo.height = img1.height;
  // canvassTwo.width = 600;
  // canvassTwo.height = 900;
  // contextTwo = canvassTwo.getContext('2d');
  // contextTwo.drawImage(img2, 0, 0);
  for (let y = 0; y < canvassTwo.height; y += blocksize) {
    // console.log("new row")
    for (let x = 0; x < canvassTwo.width; x += blocksize) {
      // console.log("drawing squares")
      // create (or reuse) an overlay wrapper to hold the square divs
      let wrapper = document.getElementById("mosaic-wrapper");
      // console.log("wrapper", wrapper)
      if (!wrapper) {
        // console.log("creating wrapper")
        const canvasRect = canvassTwo.getBoundingClientRect();
        wrapper = document.createElement("div");
        wrapper.id = "mosaic-wrapper";
        wrapper.style.position = "relative";

        // position the wrapper over the canvas (account for page scroll)
        // wrapper.style.left = (canvasRect.left + window.scrollX) + 'px';
        // wrapper.style.top = (canvasRect.top + window.scrollY) + 'px';
        wrapper.style.width = canvassTwo.width + "px";
        wrapper.style.height = canvassTwo.height + "px";
        wrapper.style.zIndex = 2;
        // canvassTwo.appendChild(wrapper);
        document.querySelector(".canvas-wrap").prepend(wrapper);
      }

      const pixel = contextOne.getImageData(x, y, blocksize, blocksize);
      // console.log("changes")
      // console.log(pixel)
      const [r, g, b] = pixel.data;
      // console.log(r, g, b);
      // const avg = (r + g + b) / 3;
      //fill rects with the average color
      const square = document.createElement("div");
      square.classList.add(className);
      square.style.position = "absolute";
      square.style.left = x + "px";
      square.style.top = y + "px";
      square.style.width = blocksize + "px";
      square.style.height = blocksize + "px";
      square.style.backgroundColor = `rgb(${pixel.data[0]}, ${pixel.data[1]}, ${pixel.data[2]})`;
      wrapper.appendChild(square);
      // contextTwo.fillStyle = `rgb(${avg}, ${avg}, ${avg})`;
      // contextTwo.fillRect(x, y, blocksize, blocksize);
    }
  }
}

setCanvassOne(chosenImage);
