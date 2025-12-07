//import the images
import arnold from "./images/arnold.jpg";
import willis from "./images/willis.jpg";
import robin from "./images/robin.webp";
import reno from "./images/reno.jpg";
import reeves from "./images/reeves.webp";
// import oscar from "./images/oscar.png";
import oscarPixlated from "./images/oscarpixlated.png";
//import audio files
import arnoldSound from "./audio/arnold.mp3";
import willisSound from "./audio/willis.mp3";
import robinSound from "./audio/robin.mp3";
import renoSound from "./audio/reno.mp3";
import reevesSound from "./audio/reeves.mp3";
import popSound from "./audio/pop.mp3";

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

// window.onload = function () { 
  document.body.style.backgroundImage = `url(${oscarPixlated})`;
  document.body.style.backgroundRepeat = "repeat";
  document.body.style.backgroundSize = "150px 150px";
  
//   console.log("background set")
// };

function randomPick(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

function displayMessage(message) {
  let messageDiv = document.getElementById("message");
  messageDiv.textContent = message;
}
function changeScore(amount) {
  let scoreboard = document.getElementById("scoreboard");
  console.log(scoreboard.textContent);
  let currentScore = parseInt(scoreboard.textContent.replace("Score: ", ""));
  currentScore -= amount;
  scoreboard.textContent = "Score: " + currentScore;
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
      const rect = element.getBoundingClientRect();
    if(rect.width===0 || rect.height===0){
      console.log("element already removed");
      return
    }
    if(rect.left===0 && rect.top===0){
      console.log("element already removed");
      return
    }
    const popAudio = new Audio(popSound);
    popAudio.currentTime = 0;
    popAudio.play();
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
      const popAudio = new Audio(popSound);
    popAudio.currentTime = 0;
    popAudio.play();
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

function explodeSevenRandomly(number = 7) {
  const smallSquares = document.querySelectorAll(".mosaic-square");
  const largeSquares = document.querySelectorAll(".mosaic-square2");

  removeExplosions();
  let squares;
  if (largeSquares.length < number) {
    squares = [...smallSquares, ...largeSquares];
  } else {
    squares = largeSquares;
  }
  // console.log(largeSquares);
  let squaresArray = Array.from(squares);
  for (let i = 0; i < number; i++) {
    let randomIndex = Math.floor(Math.random() * squaresArray.length);
    let squareToExplode = squaresArray[randomIndex];
    setTimeout(() => {
      explode2(squareToExplode);
    }, i * 60);
  }
}
const explodeButton = document.getElementById("explodeButton");
explodeButton.addEventListener("click", () => {
  changeScore(5);
  explodeSevenRandomly();
});

const choiseForm = document.getElementById('choiceForm');
choiseForm.addEventListener('submit', (e) => {
	e.preventDefault();
  console.log("form submitted");
	const choiceInput = document.getElementById('choiceInput');
	const userInput = choiceInput.value.trim();
	if (userInput) {
		submitChoise(userInput);
	}
});

const infoButton = document.getElementById("instructionsButton");
const infoWidget = document.querySelector(".infoWidget");
const overlay = document.querySelector(".overlay");
const closeInfoButton = document.getElementById("infoWidgetClose");
closeInfoButton.addEventListener("click", () => {
  infoWidget.classList.remove("infoWidgetOpen");
  overlay.style.display = "none";
});

const victoryRefresh = document.querySelector(".victoryWidget #refresh");
victoryRefresh.addEventListener("click", () => {
  window.location.reload();
});
const victoryWidget = document.querySelector(".victoryWidget");

infoButton.addEventListener("click", () => {
  infoWidget.classList.add("infoWidgetOpen");
  overlay.style.display = "block";
});
function submitChoise(choice){
  if(chosenImage===arnold){
    if(choice.toLowerCase()==="arnold"||choice.toLowerCase()==="arnold schwarzenegger"||choice.toLowerCase()==="schwarzenegger"){
      // const audio = new Audio(arnoldSound);
      // audio.play();
      Win(choice);
    }
  }
  if(chosenImage===willis){
    if(choice.toLowerCase()==="willis"||choice.toLowerCase()==="bruce willis"){
      // const audio = new Audio(willisSound);
      // audio.play();
      Win(choice);
    }
  }
  if(chosenImage===robin){
    if(choice.toLowerCase()==="robin"||choice.toLowerCase()==="robin williams"||choice.toLowerCase()==="williams"){
      // const audio = new Audio(robinSound);
      // audio.play();
      Win(choice);
    }
  }
  if(chosenImage===reno){
    if(choice.toLowerCase()==="reno"||choice.toLowerCase()==="jean reno"||choice.toLowerCase()==="rene"){
      // const audio = new Audio(renoSound);
      // audio.play();
      Win(choice);
    }
}
if(chosenImage===reeves){
  if(choice.toLowerCase()==="reeves"||choice.toLowerCase()==="keanu reeves"||choice.toLowerCase()==="keanu"){
    // const audio = new Audio(reevesSound);
    // audio.play();
    Win(choice);
  }
}
}
function Win(){
  explodeSevenRandomly(20);
  setTimeout(() => {
    explodeSevenRandomly(30);
  }, 1000);
  setTimeout(() => {
        let squares = document.querySelectorAll(".mosaic-square, .mosaic-square2");
    squares.forEach((square) => {
      square.remove();
    });
  }, 2000);
  setTimeout(() => {
    victoryWidget.style.display = "block";
    let scoreboard = document.getElementById("scoreboard");
    let finalScore = document.getElementById("finalScore");
    // finalScore.textContent = scoreboard.textContent;
    switch (chosenImage) {
      case arnold:
        const audio1 = new Audio(arnoldSound);
        audio1.play();
        break;
      case willis:
        const audio2 = new Audio(willisSound);
        audio2.play();
        break;
      case robin:
        const audio3 = new Audio(robinSound);
        audio3.play();
        break;
      case reno:
        const audio4 = new Audio(renoSound);
        audio4.play();
        break;
      case reeves:
        const audio5 = new Audio(reevesSound);
        audio5.play();
        break;
    }
  }, 3000);
}
//on click for the squares
document.addEventListener("click", (event) => {
  const square =
    event.target.closest(".mosaic-square") ||
    event.target.closest(".mosaic-square2");
  if (square) {
    // console.log('Square clicked:', square);
    let scoreDecrease = 1;
    changeScore(scoreDecrease);

    explode(event, square, 4);
    //remove
  }
});



//on canvas 2 create squares of 10 pxs each to afstract the image
function setCanvassTwo(chosenImage, blocksize = 10, className) {
  // console.log("canvas two")
  const img2 = new Image();

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
      if(x + blocksize > canvassTwo.width){
        square.style.width = canvassTwo.width - x + "px";
      } else {
        square.style.width = blocksize + "px";
      }
      if(y + blocksize > canvassTwo.height){
        square.style.height = canvassTwo.height - y + "px";
      } else {
        square.style.height = blocksize + "px";
      }
      square.style.backgroundColor = `rgb(${pixel.data[0]}, ${pixel.data[1]}, ${pixel.data[2]})`;
      wrapper.appendChild(square);
      // contextTwo.fillStyle = `rgb(${avg}, ${avg}, ${avg})`;
      // contextTwo.fillRect(x, y, blocksize, blocksize);
    }
  }
}

setCanvassOne(chosenImage);
