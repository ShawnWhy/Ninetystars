/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/audio/arnold.mp3":
/*!******************************!*\
  !*** ./src/audio/arnold.mp3 ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "arnold.mp3";

/***/ }),

/***/ "./src/audio/pop.mp3":
/*!***************************!*\
  !*** ./src/audio/pop.mp3 ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pop.mp3";

/***/ }),

/***/ "./src/audio/reeves.mp3":
/*!******************************!*\
  !*** ./src/audio/reeves.mp3 ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "reeves.mp3";

/***/ }),

/***/ "./src/audio/reno.mp3":
/*!****************************!*\
  !*** ./src/audio/reno.mp3 ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "reno.mp3";

/***/ }),

/***/ "./src/audio/robin.mp3":
/*!*****************************!*\
  !*** ./src/audio/robin.mp3 ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "robin.mp3";

/***/ }),

/***/ "./src/audio/willis.mp3":
/*!******************************!*\
  !*** ./src/audio/willis.mp3 ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "willis.mp3";

/***/ }),

/***/ "./src/images/arnold.jpg":
/*!*******************************!*\
  !*** ./src/images/arnold.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/arnold.3951d61d.jpg";

/***/ }),

/***/ "./src/images/oscarpixlated.png":
/*!**************************************!*\
  !*** ./src/images/oscarpixlated.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/oscarpixlated.5e762ee8.png";

/***/ }),

/***/ "./src/images/reeves.webp":
/*!********************************!*\
  !*** ./src/images/reeves.webp ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "reeves.webp";

/***/ }),

/***/ "./src/images/reno.jpg":
/*!*****************************!*\
  !*** ./src/images/reno.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/reno.b0f70753.jpg";

/***/ }),

/***/ "./src/images/robin.webp":
/*!*******************************!*\
  !*** ./src/images/robin.webp ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "robin.webp";

/***/ }),

/***/ "./src/images/willis.jpg":
/*!*******************************!*\
  !*** ./src/images/willis.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/willis.5ab7fd25.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_arnold_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/arnold.jpg */ "./src/images/arnold.jpg");
/* harmony import */ var _images_willis_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/willis.jpg */ "./src/images/willis.jpg");
/* harmony import */ var _images_robin_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/robin.webp */ "./src/images/robin.webp");
/* harmony import */ var _images_reno_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/reno.jpg */ "./src/images/reno.jpg");
/* harmony import */ var _images_reeves_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/reeves.webp */ "./src/images/reeves.webp");
/* harmony import */ var _images_oscarpixlated_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/oscarpixlated.png */ "./src/images/oscarpixlated.png");
/* harmony import */ var _audio_arnold_mp3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./audio/arnold.mp3 */ "./src/audio/arnold.mp3");
/* harmony import */ var _audio_willis_mp3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./audio/willis.mp3 */ "./src/audio/willis.mp3");
/* harmony import */ var _audio_robin_mp3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./audio/robin.mp3 */ "./src/audio/robin.mp3");
/* harmony import */ var _audio_reno_mp3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./audio/reno.mp3 */ "./src/audio/reno.mp3");
/* harmony import */ var _audio_reeves_mp3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./audio/reeves.mp3 */ "./src/audio/reeves.mp3");
/* harmony import */ var _audio_pop_mp3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./audio/pop.mp3 */ "./src/audio/pop.mp3");
//import the images





// import oscar from "./images/oscar.png";

//import audio files







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
  document.body.style.backgroundImage = `url(${_images_oscarpixlated_png__WEBPACK_IMPORTED_MODULE_5__})`;
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
  const images = [_images_arnold_jpg__WEBPACK_IMPORTED_MODULE_0__, _images_willis_jpg__WEBPACK_IMPORTED_MODULE_1__, _images_robin_webp__WEBPACK_IMPORTED_MODULE_2__, _images_reno_jpg__WEBPACK_IMPORTED_MODULE_3__, _images_reeves_webp__WEBPACK_IMPORTED_MODULE_4__];
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
    const popAudio = new Audio(_audio_pop_mp3__WEBPACK_IMPORTED_MODULE_11__);
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
      const popAudio = new Audio(_audio_pop_mp3__WEBPACK_IMPORTED_MODULE_11__);
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
  if(chosenImage===_images_arnold_jpg__WEBPACK_IMPORTED_MODULE_0__){
    if(choice.toLowerCase()==="arnold"||choice.toLowerCase()==="arnold schwarzenegger"||choice.toLowerCase()==="schwarzenegger"){
      // const audio = new Audio(arnoldSound);
      // audio.play();
      Win(choice);
    }
  }
  if(chosenImage===_images_willis_jpg__WEBPACK_IMPORTED_MODULE_1__){
    if(choice.toLowerCase()==="willis"||choice.toLowerCase()==="bruce willis"){
      // const audio = new Audio(willisSound);
      // audio.play();
      Win(choice);
    }
  }
  if(chosenImage===_images_robin_webp__WEBPACK_IMPORTED_MODULE_2__){
    if(choice.toLowerCase()==="robin"||choice.toLowerCase()==="robin williams"||choice.toLowerCase()==="williams"){
      // const audio = new Audio(robinSound);
      // audio.play();
      Win(choice);
    }
  }
  if(chosenImage===_images_reno_jpg__WEBPACK_IMPORTED_MODULE_3__){
    if(choice.toLowerCase()==="reno"||choice.toLowerCase()==="jean reno"||choice.toLowerCase()==="rene"){
      // const audio = new Audio(renoSound);
      // audio.play();
      Win(choice);
    }
}
if(chosenImage===_images_reeves_webp__WEBPACK_IMPORTED_MODULE_4__){
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
      case _images_arnold_jpg__WEBPACK_IMPORTED_MODULE_0__:
        const audio1 = new Audio(_audio_arnold_mp3__WEBPACK_IMPORTED_MODULE_6__);
        audio1.play();
        break;
      case _images_willis_jpg__WEBPACK_IMPORTED_MODULE_1__:
        const audio2 = new Audio(_audio_willis_mp3__WEBPACK_IMPORTED_MODULE_7__);
        audio2.play();
        break;
      case _images_robin_webp__WEBPACK_IMPORTED_MODULE_2__:
        const audio3 = new Audio(_audio_robin_mp3__WEBPACK_IMPORTED_MODULE_8__);
        audio3.play();
        break;
      case _images_reno_jpg__WEBPACK_IMPORTED_MODULE_3__:
        const audio4 = new Audio(_audio_reno_mp3__WEBPACK_IMPORTED_MODULE_9__);
        audio4.play();
        break;
      case _images_reeves_webp__WEBPACK_IMPORTED_MODULE_4__:
        const audio5 = new Audio(_audio_reeves_mp3__WEBPACK_IMPORTED_MODULE_10__);
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44OTA4YmY4ZGMzNGFmNzEyMjM1Mi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDeUM7QUFDQTtBQUNEO0FBQ0g7QUFDSztBQUMxQztBQUN1RDtBQUN2RDtBQUM2QztBQUNBO0FBQ0Y7QUFDRjtBQUNJO0FBQ047QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLHNEQUFhLENBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLCtDQUFNLEVBQUUsK0NBQU0sRUFBRSwrQ0FBSyxFQUFFLDZDQUFJLEVBQUUsZ0RBQU07QUFD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VTtBQUMzQztBQUNBO0FBQ0EsV0FBVyw2Q0FBSTtBQUNmLGlDQUFpQyw0Q0FBUztBQUMxQztBQUNBO0FBQ0EsV0FBVyxnREFBTTtBQUNqQixpQ0FBaUMsK0NBQVc7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix1QkFBdUI7QUFDekM7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLDRDQUE0QyxjQUFjLElBQUksY0FBYyxJQUFJLGNBQWM7QUFDOUY7QUFDQSx1Q0FBdUMsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2twcmFjdGljZTIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFja3ByYWN0aWNlMi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYnBhY2twcmFjdGljZTIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrcHJhY3RpY2UyL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYnBhY2twcmFjdGljZTIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvL2ltcG9ydCB0aGUgaW1hZ2VzXHJcbmltcG9ydCBhcm5vbGQgZnJvbSBcIi4vaW1hZ2VzL2Fybm9sZC5qcGdcIjtcclxuaW1wb3J0IHdpbGxpcyBmcm9tIFwiLi9pbWFnZXMvd2lsbGlzLmpwZ1wiO1xyXG5pbXBvcnQgcm9iaW4gZnJvbSBcIi4vaW1hZ2VzL3JvYmluLndlYnBcIjtcclxuaW1wb3J0IHJlbm8gZnJvbSBcIi4vaW1hZ2VzL3Jlbm8uanBnXCI7XHJcbmltcG9ydCByZWV2ZXMgZnJvbSBcIi4vaW1hZ2VzL3JlZXZlcy53ZWJwXCI7XHJcbi8vIGltcG9ydCBvc2NhciBmcm9tIFwiLi9pbWFnZXMvb3NjYXIucG5nXCI7XHJcbmltcG9ydCBvc2NhclBpeGxhdGVkIGZyb20gXCIuL2ltYWdlcy9vc2NhcnBpeGxhdGVkLnBuZ1wiO1xyXG4vL2ltcG9ydCBhdWRpbyBmaWxlc1xyXG5pbXBvcnQgYXJub2xkU291bmQgZnJvbSBcIi4vYXVkaW8vYXJub2xkLm1wM1wiO1xyXG5pbXBvcnQgd2lsbGlzU291bmQgZnJvbSBcIi4vYXVkaW8vd2lsbGlzLm1wM1wiO1xyXG5pbXBvcnQgcm9iaW5Tb3VuZCBmcm9tIFwiLi9hdWRpby9yb2Jpbi5tcDNcIjtcclxuaW1wb3J0IHJlbm9Tb3VuZCBmcm9tIFwiLi9hdWRpby9yZW5vLm1wM1wiO1xyXG5pbXBvcnQgcmVldmVzU291bmQgZnJvbSBcIi4vYXVkaW8vcmVldmVzLm1wM1wiO1xyXG5pbXBvcnQgcG9wU291bmQgZnJvbSBcIi4vYXVkaW8vcG9wLm1wM1wiO1xyXG5cclxuLy8gbGV0IGFybm9sZCA9IFwiLi9pbWFnZXMvYXJub2xkLmpwZ1wiXHJcbi8vIGxldCB3aWxsaXMgPSBcIi4vaW1hZ2VzL3dpbGxpcy5qcGdcIlxyXG4vLyBsZXQgcm9iaW4gPSBcIi4vaW1hZ2VzL3JvYmluLndlYnBcIlxyXG4vLyBsZXQgcmVubyA9IFwiLi9pbWFnZXMvcmVuby5qcGdcIlxyXG4vLyBsZXQgcmVldmVzID0gXCIuL2ltYWdlcy9yZWV2ZXMud2VicFwiXHJcblxyXG5sZXQgY2FudmFzc1R3byA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzMlwiKTtcclxubGV0IGNhbnZhc3NPbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhczFcIik7XHJcbmxldCBjb250ZXh0T25lO1xyXG5sZXQgaW1nMTtcclxubGV0IHR5cGVDYW52YXM7XHJcbmxldCBjaG9zZW5JbWFnZTtcclxuXHJcbi8vIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7IFxyXG4gIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke29zY2FyUGl4bGF0ZWR9KWA7XHJcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0ID0gXCJyZXBlYXRcIjtcclxuICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRTaXplID0gXCIxNTBweCAxNTBweFwiO1xyXG4gIFxyXG4vLyAgIGNvbnNvbGUubG9nKFwiYmFja2dyb3VuZCBzZXRcIilcclxuLy8gfTtcclxuXHJcbmZ1bmN0aW9uIHJhbmRvbVBpY2soYXJyKSB7XHJcbiAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnIubGVuZ3RoKTtcclxuICByZXR1cm4gYXJyW2luZGV4XTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheU1lc3NhZ2UobWVzc2FnZSkge1xyXG4gIGxldCBtZXNzYWdlRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXNzYWdlXCIpO1xyXG4gIG1lc3NhZ2VEaXYudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xyXG59XHJcbmZ1bmN0aW9uIGNoYW5nZVNjb3JlKGFtb3VudCkge1xyXG4gIGxldCBzY29yZWJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY29yZWJvYXJkXCIpO1xyXG4gIGNvbnNvbGUubG9nKHNjb3JlYm9hcmQudGV4dENvbnRlbnQpO1xyXG4gIGxldCBjdXJyZW50U2NvcmUgPSBwYXJzZUludChzY29yZWJvYXJkLnRleHRDb250ZW50LnJlcGxhY2UoXCJTY29yZTogXCIsIFwiXCIpKTtcclxuICBjdXJyZW50U2NvcmUgLT0gYW1vdW50O1xyXG4gIHNjb3JlYm9hcmQudGV4dENvbnRlbnQgPSBcIlNjb3JlOiBcIiArIGN1cnJlbnRTY29yZTtcclxufVxyXG5cclxuLy8gZ2x5cGhzLnB1c2goXCJVa3JhaW5cIilcclxuLy9yYW5kb21seSBwaWNrIGEgaW1hZ2UgdG8gYXBwbHkgdG8gY2FudmFzcyAxXHJcbmZ1bmN0aW9uIHBpY2tpbWFnZSgpIHtcclxuICAvLyBjb25zb2xlLmxvZyhcInBpY2tpbmdcIik7XHJcbiAgY29uc3QgaW1hZ2VzID0gW2Fybm9sZCwgd2lsbGlzLCByb2JpbiwgcmVubywgcmVldmVzXTtcclxuICBjb25zdCByYW5kb21JbWFnZSA9IHJhbmRvbVBpY2soaW1hZ2VzKTtcclxuICByZXR1cm4gcmFuZG9tSW1hZ2U7XHJcbn1cclxuXHJcbi8vc2V0IHRoZSBjaG9zZW4gaW1hZ2UgdG8gZGlzcGxheSBvbiBjYW52YXMgMVxyXG5jaG9zZW5JbWFnZSA9IHBpY2tpbWFnZSgpO1xyXG5mdW5jdGlvbiBzZXRDYW52YXNzT25lKGNob3NlbkltYWdlKSB7XHJcbiAgLy8gY29uc29sZS5sb2coXCJjYW52YXMgb25lXCIpO1xyXG4gIGltZzEgPSBuZXcgSW1hZ2UoKTtcclxuICBpbWcxLnNyYyA9IGNob3NlbkltYWdlO1xyXG4gIC8vc2NhbGUgaW1hZ2UgdG8gZml0IGNhbnZhc1xyXG4gIGNvbnNvbGUubG9nKGltZzEpO1xyXG4gIFxyXG4gIGltZzEub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdHlwZUNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzMVwiKTtcclxuICAgIGNvbnRleHRPbmUgPSB0eXBlQ2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgIFxyXG4gICAgLy8gQ2FsY3VsYXRlIHNjYWxlIGZhY3RvciB0byBmaXQgd2l0aGluIG1heCBkaW1lbnNpb25zXHJcbiAgICBjb25zdCBtYXhXaWR0aCA9IDUwMDtcclxuICAgIGNvbnN0IG1heEhlaWdodCA9IDkwMDsgLy8gYWRqdXN0IGFzIG5lZWRlZFxyXG4gICAgbGV0IHNjYWxlRmFjdG9yID0gMTtcclxuICAgIFxyXG4gICAgaWYgKGltZzEud2lkdGggPiBtYXhXaWR0aCkge1xyXG4gICAgICBzY2FsZUZhY3RvciA9IG1heFdpZHRoIC8gaW1nMS53aWR0aDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3Qgc2NhbGVkV2lkdGggPSBpbWcxLndpZHRoICogc2NhbGVGYWN0b3I7XHJcbiAgICBjb25zdCBzY2FsZWRIZWlnaHQgPSBpbWcxLmhlaWdodCAqIHNjYWxlRmFjdG9yO1xyXG4gICAgXHJcbiAgICAvLyBTZXQgY2FudmFzIGRpbWVuc2lvbnMgdG8gc2NhbGVkIHNpemVcclxuICAgIHR5cGVDYW52YXMud2lkdGggPSBzY2FsZWRXaWR0aDtcclxuICAgIHR5cGVDYW52YXMuaGVpZ2h0ID0gc2NhbGVkSGVpZ2h0O1xyXG4gICAgY2FudmFzc1R3by53aWR0aCA9IHNjYWxlZFdpZHRoO1xyXG4gICAgY2FudmFzc1R3by5oZWlnaHQgPSBzY2FsZWRIZWlnaHQ7XHJcbiAgICAvLyBEcmF3IHRoZSBzY2FsZWQgaW1hZ2VcclxuICAgIGNvbnRleHRPbmUuZHJhd0ltYWdlKGltZzEsIDAsIDAsIHNjYWxlZFdpZHRoLCBzY2FsZWRIZWlnaHQpO1xyXG4gICAgLy8gdHlwZUNhbnZhcy53aWR0aCA9IGltZzEud2lkdGg7XHJcbiAgICAvLyB0eXBlQ2FudmFzLmhlaWdodCA9IGltZzEuaGVpZ2h0O1xyXG4gICAgLy8gY29udGV4dE9uZS5kcmF3SW1hZ2UoaW1nMSwgMCwgMCk7XHJcbiAgICAvLyBjcmVhdGUgdGhlIHNlY29uZCBjYW52YXNcclxuICAgIHNldENhbnZhc3NUd28oY2hvc2VuSW1hZ2UsIDE1LCBcIm1vc2FpYy1zcXVhcmVcIik7XHJcbiAgICBzZXRDYW52YXNzVHdvKGNob3NlbkltYWdlLCA1MCwgXCJtb3NhaWMtc3F1YXJlMlwiKTtcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBleHBsb2RlMihlbGVtZW50LCBudW1iZXIgPSA2KSB7XHJcbiAgY29uc3QgY29sb3IgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcInN0eWxlXCIpO1xyXG4gIGxldCBjb3VudD1udW1iZXI7XHJcbiAgICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgaWYocmVjdC53aWR0aD09PTAgfHwgcmVjdC5oZWlnaHQ9PT0wKXtcclxuICAgICAgY29uc29sZS5sb2coXCJlbGVtZW50IGFscmVhZHkgcmVtb3ZlZFwiKTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBpZihyZWN0LmxlZnQ9PT0wICYmIHJlY3QudG9wPT09MCl7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZWxlbWVudCBhbHJlYWR5IHJlbW92ZWRcIik7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgY29uc3QgcG9wQXVkaW8gPSBuZXcgQXVkaW8ocG9wU291bmQpO1xyXG4gICAgcG9wQXVkaW8uY3VycmVudFRpbWUgPSAwO1xyXG4gICAgcG9wQXVkaW8ucGxheSgpO1xyXG4gIC8vICAgY29uc29sZS5sb2coY29sb3IpXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXI7IGkrKykge1xyXG4gICAgbGV0IHNtYWxsU3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHNtYWxsU3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzbWFsbEV4cGxvZGVcIik7XHJcbiAgICBsZXQgcmFuZG9tUm90YXRpb24gPSBNYXRoLnJhbmRvbSgpICogMzYwO1xyXG4gICAgbGV0IHNtYWxsc3F1YXJlU2l6ZSA9XHJcbiAgICAgIGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwic3R5bGVcIikubWF0Y2goL3dpZHRoOlxccyooXFxkKylweC8pWzFdIC8gNDtcclxuICAgIHNtYWxsU3F1YXJlLnN0eWxlLndpZHRoID0gc21hbGxzcXVhcmVTaXplICsgXCJweFwiO1xyXG4gICAgc21hbGxTcXVhcmUuc3R5bGUuaGVpZ2h0ID0gc21hbGxzcXVhcmVTaXplICsgXCJweFwiO1xyXG4gICAgLy9nZXQgYWJzb2x1dGUgcG9zaXRpb24gb2YgdGhlIGVsZW1lbnRcclxuXHJcblxyXG4gICAgbGV0IGVsZW1lbnRMZWZ0ID0gcmVjdC5sZWZ0ICsgKHJlY3Qud2lkdGggLSBzbWFsbHNxdWFyZVNpemUpIC8gMiArIFwicHhcIjtcclxuICAgIGxldCBlbGVtZW50VG9wID0gcmVjdC50b3AgKyAocmVjdC5oZWlnaHQgLSBzbWFsbHNxdWFyZVNpemUpIC8gMiArIFwicHhcIjtcclxuICAgIHNtYWxsU3F1YXJlLnN0eWxlLmxlZnQgPSBlbGVtZW50TGVmdDtcclxuICAgIHNtYWxsU3F1YXJlLnN0eWxlLnRvcCA9IGVsZW1lbnRUb3A7XHJcblxyXG4gICAgbGV0IGV4cGxvZGVMZW5ndGggPSBlbGVtZW50XHJcbiAgICAgIC5nZXRBdHRyaWJ1dGUoXCJzdHlsZVwiKVxyXG4gICAgICAubWF0Y2goL3dpZHRoOlxccyooXFxkKylweC8pWzFdO1xyXG4gICAgZXhwbG9kZUxlbmd0aCA9IHBhcnNlSW50KGV4cGxvZGVMZW5ndGgpICogTWF0aC5yYW5kb20oKSAqIDIgKyAxO1xyXG4gICAgc21hbGxTcXVhcmUuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgke3JhbmRvbVJvdGF0aW9ufWRlZykgdHJhbnNsYXRlKCR7XHJcbiAgICAgIE1hdGgucmFuZG9tKCkgKiAxMCArIGV4cGxvZGVMZW5ndGhcclxuICAgIH1weClgO1xyXG4gICAgbGV0IHNtYWxsc3F1YXJlUmVkID0gY29sb3JcclxuICAgICAgLm1hdGNoKC9yZ2JcXChcXGQrLFxccypcXGQrLFxccypcXGQrXFwpLylbMF1cclxuICAgICAgLm1hdGNoKC9cXGQrL2cpWzBdO1xyXG4gICAgbGV0IHNtYWxsc3F1YXJlR3JlZW4gPSBjb2xvclxyXG4gICAgICAubWF0Y2goL3JnYlxcKFxcZCssXFxzKlxcZCssXFxzKlxcZCtcXCkvKVswXVxyXG4gICAgICAubWF0Y2goL1xcZCsvZylbMV07XHJcbiAgICBsZXQgc21hbGxzcXVhcmVCbHVlID0gY29sb3JcclxuICAgICAgLm1hdGNoKC9yZ2JcXChcXGQrLFxccypcXGQrLFxccypcXGQrXFwpLylbMF1cclxuICAgICAgLm1hdGNoKC9cXGQrL2cpWzJdO1xyXG4gICAgbGV0IG1vZGlmaWVkUmVkID0gcGFyc2VJbnQoc21hbGxzcXVhcmVSZWQpIC0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgbGV0IG1vZGlmaWVkR3JlZW4gPVxyXG4gICAgICBwYXJzZUludChzbWFsbHNxdWFyZUdyZWVuKSAtIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgIGxldCBtb2RpZmllZEJsdWUgPVxyXG4gICAgICBwYXJzZUludChzbWFsbHNxdWFyZUJsdWUpIC0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgbGV0IGZhZGVDb2xvciA9IGByZ2JhKCR7bW9kaWZpZWRSZWR9LCAke21vZGlmaWVkR3JlZW59LCAke21vZGlmaWVkQmx1ZX0gKWA7XHJcbiAgICBzbWFsbFNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBmYWRlQ29sb3I7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNtYWxsU3F1YXJlKTtcclxuXHJcblxyXG4gICAgY291bnQtLTtcclxuICAgIGlmKGNvdW50PD0wKXtcclxuICAgICAgZWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbi8vZGlzcGxheSBhbiBleHBsb3Npb24gZWZmZWN0XHJcbmZ1bmN0aW9uIGV4cGxvZGUoZXZlbnQsIGVsZW1lbnQsIG51bWJlcikge1xyXG4gIGNvbnN0IGNvbG9yID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJzdHlsZVwiKTtcclxuICAgICAgY29uc3QgcG9wQXVkaW8gPSBuZXcgQXVkaW8ocG9wU291bmQpO1xyXG4gICAgcG9wQXVkaW8uY3VycmVudFRpbWUgPSAwO1xyXG4gICAgcG9wQXVkaW8ucGxheSgpO1xyXG4gIC8vICAgY29uc29sZS5sb2coY29sb3IpXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXI7IGkrKykge1xyXG4gICAgbGV0IHNtYWxsU3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHNtYWxsU3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzbWFsbEV4cGxvZGVcIik7XHJcbiAgICBsZXQgcmFuZG9tUm90YXRpb24gPSBNYXRoLnJhbmRvbSgpICogMzYwO1xyXG4gICAgbGV0IHNtYWxsc3F1YXJlU2l6ZSA9XHJcbiAgICAgIGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwic3R5bGVcIikubWF0Y2goL3dpZHRoOlxccyooXFxkKylweC8pWzFdIC8gNDtcclxuICAgIHNtYWxsU3F1YXJlLnN0eWxlLndpZHRoID0gc21hbGxzcXVhcmVTaXplICsgXCJweFwiO1xyXG4gICAgc21hbGxTcXVhcmUuc3R5bGUuaGVpZ2h0ID0gc21hbGxzcXVhcmVTaXplICsgXCJweFwiO1xyXG4gICAgc21hbGxTcXVhcmUuc3R5bGUubGVmdCA9IGV2ZW50LmNsaWVudFggKyBcInB4XCI7XHJcbiAgICBzbWFsbFNxdWFyZS5zdHlsZS50b3AgPSBldmVudC5jbGllbnRZICsgXCJweFwiO1xyXG4gICAgbGV0IGV4cGxvZGVMZW5ndGggPSBlbGVtZW50XHJcbiAgICAgIC5nZXRBdHRyaWJ1dGUoXCJzdHlsZVwiKVxyXG4gICAgICAubWF0Y2goL3dpZHRoOlxccyooXFxkKylweC8pWzFdO1xyXG4gICAgZXhwbG9kZUxlbmd0aCA9IHBhcnNlSW50KGV4cGxvZGVMZW5ndGgpICogTWF0aC5yYW5kb20oKSAqIDIgKyAxO1xyXG4gICAgc21hbGxTcXVhcmUuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgke3JhbmRvbVJvdGF0aW9ufWRlZykgdHJhbnNsYXRlKCR7XHJcbiAgICAgIE1hdGgucmFuZG9tKCkgKiAxMCArIGV4cGxvZGVMZW5ndGhcclxuICAgIH1weClgO1xyXG4gICAgbGV0IHNtYWxsc3F1YXJlUmVkID0gY29sb3JcclxuICAgICAgLm1hdGNoKC9yZ2JcXChcXGQrLFxccypcXGQrLFxccypcXGQrXFwpLylbMF1cclxuICAgICAgLm1hdGNoKC9cXGQrL2cpWzBdO1xyXG4gICAgbGV0IHNtYWxsc3F1YXJlR3JlZW4gPSBjb2xvclxyXG4gICAgICAubWF0Y2goL3JnYlxcKFxcZCssXFxzKlxcZCssXFxzKlxcZCtcXCkvKVswXVxyXG4gICAgICAubWF0Y2goL1xcZCsvZylbMV07XHJcbiAgICBsZXQgc21hbGxzcXVhcmVCbHVlID0gY29sb3JcclxuICAgICAgLm1hdGNoKC9yZ2JcXChcXGQrLFxccypcXGQrLFxccypcXGQrXFwpLylbMF1cclxuICAgICAgLm1hdGNoKC9cXGQrL2cpWzJdO1xyXG4gICAgbGV0IG1vZGlmaWVkUmVkID0gcGFyc2VJbnQoc21hbGxzcXVhcmVSZWQpIC0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgbGV0IG1vZGlmaWVkR3JlZW4gPVxyXG4gICAgICBwYXJzZUludChzbWFsbHNxdWFyZUdyZWVuKSAtIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgIGxldCBtb2RpZmllZEJsdWUgPVxyXG4gICAgICBwYXJzZUludChzbWFsbHNxdWFyZUJsdWUpIC0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgbGV0IGZhZGVDb2xvciA9IGByZ2JhKCR7bW9kaWZpZWRSZWR9LCAke21vZGlmaWVkR3JlZW59LCAke21vZGlmaWVkQmx1ZX0gKWA7XHJcbiAgICBzbWFsbFNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBmYWRlQ29sb3I7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNtYWxsU3F1YXJlKTtcclxuXHJcbiAgfVxyXG4gIGVsZW1lbnQucmVtb3ZlKCk7XHJcbn1cclxuZnVuY3Rpb24gcmVtb3ZlRXhwbG9zaW9ucygpIHtcclxuICBjb25zdCBleHBsb3Npb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbWFsbEV4cGxvZGVcIik7XHJcbiAgZXhwbG9zaW9ucy5mb3JFYWNoKChleHBsb3Npb24pID0+IHtcclxuICAgIGV4cGxvc2lvbi5yZW1vdmUoKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZXhwbG9kZVNldmVuUmFuZG9tbHkobnVtYmVyID0gNykge1xyXG4gIGNvbnN0IHNtYWxsU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW9zYWljLXNxdWFyZVwiKTtcclxuICBjb25zdCBsYXJnZVNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vc2FpYy1zcXVhcmUyXCIpO1xyXG5cclxuICByZW1vdmVFeHBsb3Npb25zKCk7XHJcbiAgbGV0IHNxdWFyZXM7XHJcbiAgaWYgKGxhcmdlU3F1YXJlcy5sZW5ndGggPCBudW1iZXIpIHtcclxuICAgIHNxdWFyZXMgPSBbLi4uc21hbGxTcXVhcmVzLCAuLi5sYXJnZVNxdWFyZXNdO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzcXVhcmVzID0gbGFyZ2VTcXVhcmVzO1xyXG4gIH1cclxuICAvLyBjb25zb2xlLmxvZyhsYXJnZVNxdWFyZXMpO1xyXG4gIGxldCBzcXVhcmVzQXJyYXkgPSBBcnJheS5mcm9tKHNxdWFyZXMpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyOyBpKyspIHtcclxuICAgIGxldCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNxdWFyZXNBcnJheS5sZW5ndGgpO1xyXG4gICAgbGV0IHNxdWFyZVRvRXhwbG9kZSA9IHNxdWFyZXNBcnJheVtyYW5kb21JbmRleF07XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgZXhwbG9kZTIoc3F1YXJlVG9FeHBsb2RlKTtcclxuICAgIH0sIGkgKiA2MCk7XHJcbiAgfVxyXG59XHJcbmNvbnN0IGV4cGxvZGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4cGxvZGVCdXR0b25cIik7XHJcbmV4cGxvZGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBjaGFuZ2VTY29yZSg1KTtcclxuICBleHBsb2RlU2V2ZW5SYW5kb21seSgpO1xyXG59KTtcclxuXHJcbmNvbnN0IGNob2lzZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hvaWNlRm9ybScpO1xyXG5jaG9pc2VGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnNvbGUubG9nKFwiZm9ybSBzdWJtaXR0ZWRcIik7XHJcblx0Y29uc3QgY2hvaWNlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hvaWNlSW5wdXQnKTtcclxuXHRjb25zdCB1c2VySW5wdXQgPSBjaG9pY2VJbnB1dC52YWx1ZS50cmltKCk7XHJcblx0aWYgKHVzZXJJbnB1dCkge1xyXG5cdFx0c3VibWl0Q2hvaXNlKHVzZXJJbnB1dCk7XHJcblx0fVxyXG59KTtcclxuXHJcbmNvbnN0IGluZm9CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc3RydWN0aW9uc0J1dHRvblwiKTtcclxuY29uc3QgaW5mb1dpZGdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5mb1dpZGdldFwiKTtcclxuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcclxuY29uc3QgY2xvc2VJbmZvQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvV2lkZ2V0Q2xvc2VcIik7XHJcbmNsb3NlSW5mb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGluZm9XaWRnZXQuY2xhc3NMaXN0LnJlbW92ZShcImluZm9XaWRnZXRPcGVuXCIpO1xyXG4gIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG59KTtcclxuXHJcbmNvbnN0IHZpY3RvcnlSZWZyZXNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aWN0b3J5V2lkZ2V0ICNyZWZyZXNoXCIpO1xyXG52aWN0b3J5UmVmcmVzaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxufSk7XHJcbmNvbnN0IHZpY3RvcnlXaWRnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZpY3RvcnlXaWRnZXRcIik7XHJcblxyXG5pbmZvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgaW5mb1dpZGdldC5jbGFzc0xpc3QuYWRkKFwiaW5mb1dpZGdldE9wZW5cIik7XHJcbiAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG59KTtcclxuZnVuY3Rpb24gc3VibWl0Q2hvaXNlKGNob2ljZSl7XHJcbiAgaWYoY2hvc2VuSW1hZ2U9PT1hcm5vbGQpe1xyXG4gICAgaWYoY2hvaWNlLnRvTG93ZXJDYXNlKCk9PT1cImFybm9sZFwifHxjaG9pY2UudG9Mb3dlckNhc2UoKT09PVwiYXJub2xkIHNjaHdhcnplbmVnZ2VyXCJ8fGNob2ljZS50b0xvd2VyQ2FzZSgpPT09XCJzY2h3YXJ6ZW5lZ2dlclwiKXtcclxuICAgICAgLy8gY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oYXJub2xkU291bmQpO1xyXG4gICAgICAvLyBhdWRpby5wbGF5KCk7XHJcbiAgICAgIFdpbihjaG9pY2UpO1xyXG4gICAgfVxyXG4gIH1cclxuICBpZihjaG9zZW5JbWFnZT09PXdpbGxpcyl7XHJcbiAgICBpZihjaG9pY2UudG9Mb3dlckNhc2UoKT09PVwid2lsbGlzXCJ8fGNob2ljZS50b0xvd2VyQ2FzZSgpPT09XCJicnVjZSB3aWxsaXNcIil7XHJcbiAgICAgIC8vIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKHdpbGxpc1NvdW5kKTtcclxuICAgICAgLy8gYXVkaW8ucGxheSgpO1xyXG4gICAgICBXaW4oY2hvaWNlKTtcclxuICAgIH1cclxuICB9XHJcbiAgaWYoY2hvc2VuSW1hZ2U9PT1yb2Jpbil7XHJcbiAgICBpZihjaG9pY2UudG9Mb3dlckNhc2UoKT09PVwicm9iaW5cInx8Y2hvaWNlLnRvTG93ZXJDYXNlKCk9PT1cInJvYmluIHdpbGxpYW1zXCJ8fGNob2ljZS50b0xvd2VyQ2FzZSgpPT09XCJ3aWxsaWFtc1wiKXtcclxuICAgICAgLy8gY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8ocm9iaW5Tb3VuZCk7XHJcbiAgICAgIC8vIGF1ZGlvLnBsYXkoKTtcclxuICAgICAgV2luKGNob2ljZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmKGNob3NlbkltYWdlPT09cmVubyl7XHJcbiAgICBpZihjaG9pY2UudG9Mb3dlckNhc2UoKT09PVwicmVub1wifHxjaG9pY2UudG9Mb3dlckNhc2UoKT09PVwiamVhbiByZW5vXCJ8fGNob2ljZS50b0xvd2VyQ2FzZSgpPT09XCJyZW5lXCIpe1xyXG4gICAgICAvLyBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbyhyZW5vU291bmQpO1xyXG4gICAgICAvLyBhdWRpby5wbGF5KCk7XHJcbiAgICAgIFdpbihjaG9pY2UpO1xyXG4gICAgfVxyXG59XHJcbmlmKGNob3NlbkltYWdlPT09cmVldmVzKXtcclxuICBpZihjaG9pY2UudG9Mb3dlckNhc2UoKT09PVwicmVldmVzXCJ8fGNob2ljZS50b0xvd2VyQ2FzZSgpPT09XCJrZWFudSByZWV2ZXNcInx8Y2hvaWNlLnRvTG93ZXJDYXNlKCk9PT1cImtlYW51XCIpe1xyXG4gICAgLy8gY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8ocmVldmVzU291bmQpO1xyXG4gICAgLy8gYXVkaW8ucGxheSgpO1xyXG4gICAgV2luKGNob2ljZSk7XHJcbiAgfVxyXG59XHJcbn1cclxuZnVuY3Rpb24gV2luKCl7XHJcbiAgZXhwbG9kZVNldmVuUmFuZG9tbHkoMjApO1xyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgZXhwbG9kZVNldmVuUmFuZG9tbHkoMzApO1xyXG4gIH0sIDEwMDApO1xyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGxldCBzcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tb3NhaWMtc3F1YXJlLCAubW9zYWljLXNxdWFyZTJcIik7XHJcbiAgICBzcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xyXG4gICAgICBzcXVhcmUucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuICB9LCAyMDAwKTtcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIHZpY3RvcnlXaWRnZXQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIGxldCBzY29yZWJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY29yZWJvYXJkXCIpO1xyXG4gICAgbGV0IGZpbmFsU2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbmFsU2NvcmVcIik7XHJcbiAgICAvLyBmaW5hbFNjb3JlLnRleHRDb250ZW50ID0gc2NvcmVib2FyZC50ZXh0Q29udGVudDtcclxuICAgIHN3aXRjaCAoY2hvc2VuSW1hZ2UpIHtcclxuICAgICAgY2FzZSBhcm5vbGQ6XHJcbiAgICAgICAgY29uc3QgYXVkaW8xID0gbmV3IEF1ZGlvKGFybm9sZFNvdW5kKTtcclxuICAgICAgICBhdWRpbzEucGxheSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIHdpbGxpczpcclxuICAgICAgICBjb25zdCBhdWRpbzIgPSBuZXcgQXVkaW8od2lsbGlzU291bmQpO1xyXG4gICAgICAgIGF1ZGlvMi5wbGF5KCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2Ugcm9iaW46XHJcbiAgICAgICAgY29uc3QgYXVkaW8zID0gbmV3IEF1ZGlvKHJvYmluU291bmQpO1xyXG4gICAgICAgIGF1ZGlvMy5wbGF5KCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgcmVubzpcclxuICAgICAgICBjb25zdCBhdWRpbzQgPSBuZXcgQXVkaW8ocmVub1NvdW5kKTtcclxuICAgICAgICBhdWRpbzQucGxheSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIHJlZXZlczpcclxuICAgICAgICBjb25zdCBhdWRpbzUgPSBuZXcgQXVkaW8ocmVldmVzU291bmQpO1xyXG4gICAgICAgIGF1ZGlvNS5wbGF5KCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfSwgMzAwMCk7XHJcbn1cclxuLy9vbiBjbGljayBmb3IgdGhlIHNxdWFyZXNcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gIGNvbnN0IHNxdWFyZSA9XHJcbiAgICBldmVudC50YXJnZXQuY2xvc2VzdChcIi5tb3NhaWMtc3F1YXJlXCIpIHx8XHJcbiAgICBldmVudC50YXJnZXQuY2xvc2VzdChcIi5tb3NhaWMtc3F1YXJlMlwiKTtcclxuICBpZiAoc3F1YXJlKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnU3F1YXJlIGNsaWNrZWQ6Jywgc3F1YXJlKTtcclxuICAgIGxldCBzY29yZURlY3JlYXNlID0gMTtcclxuICAgIGNoYW5nZVNjb3JlKHNjb3JlRGVjcmVhc2UpO1xyXG5cclxuICAgIGV4cGxvZGUoZXZlbnQsIHNxdWFyZSwgNCk7XHJcbiAgICAvL3JlbW92ZVxyXG4gIH1cclxufSk7XHJcblxyXG5cclxuXHJcbi8vb24gY2FudmFzIDIgY3JlYXRlIHNxdWFyZXMgb2YgMTAgcHhzIGVhY2ggdG8gYWZzdHJhY3QgdGhlIGltYWdlXHJcbmZ1bmN0aW9uIHNldENhbnZhc3NUd28oY2hvc2VuSW1hZ2UsIGJsb2Nrc2l6ZSA9IDEwLCBjbGFzc05hbWUpIHtcclxuICAvLyBjb25zb2xlLmxvZyhcImNhbnZhcyB0d29cIilcclxuICBjb25zdCBpbWcyID0gbmV3IEltYWdlKCk7XHJcblxyXG4gIGZvciAobGV0IHkgPSAwOyB5IDwgY2FudmFzc1R3by5oZWlnaHQ7IHkgKz0gYmxvY2tzaXplKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIm5ldyByb3dcIilcclxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgY2FudmFzc1R3by53aWR0aDsgeCArPSBibG9ja3NpemUpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJkcmF3aW5nIHNxdWFyZXNcIilcclxuICAgICAgLy8gY3JlYXRlIChvciByZXVzZSkgYW4gb3ZlcmxheSB3cmFwcGVyIHRvIGhvbGQgdGhlIHNxdWFyZSBkaXZzXHJcbiAgICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb3NhaWMtd3JhcHBlclwiKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJ3cmFwcGVyXCIsIHdyYXBwZXIpXHJcbiAgICAgIGlmICghd3JhcHBlcikge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY3JlYXRpbmcgd3JhcHBlclwiKVxyXG4gICAgICAgIGNvbnN0IGNhbnZhc1JlY3QgPSBjYW52YXNzVHdvLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHdyYXBwZXIuaWQgPSBcIm1vc2FpYy13cmFwcGVyXCI7XHJcbiAgICAgICAgd3JhcHBlci5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcclxuXHJcbiAgICAgICAgLy8gcG9zaXRpb24gdGhlIHdyYXBwZXIgb3ZlciB0aGUgY2FudmFzIChhY2NvdW50IGZvciBwYWdlIHNjcm9sbClcclxuICAgICAgICAvLyB3cmFwcGVyLnN0eWxlLmxlZnQgPSAoY2FudmFzUmVjdC5sZWZ0ICsgd2luZG93LnNjcm9sbFgpICsgJ3B4JztcclxuICAgICAgICAvLyB3cmFwcGVyLnN0eWxlLnRvcCA9IChjYW52YXNSZWN0LnRvcCArIHdpbmRvdy5zY3JvbGxZKSArICdweCc7XHJcbiAgICAgICAgd3JhcHBlci5zdHlsZS53aWR0aCA9IGNhbnZhc3NUd28ud2lkdGggKyBcInB4XCI7XHJcbiAgICAgICAgd3JhcHBlci5zdHlsZS5oZWlnaHQgPSBjYW52YXNzVHdvLmhlaWdodCArIFwicHhcIjtcclxuICAgICAgICB3cmFwcGVyLnN0eWxlLnpJbmRleCA9IDI7XHJcbiAgICAgICAgLy8gY2FudmFzc1R3by5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhbnZhcy13cmFwXCIpLnByZXBlbmQod3JhcHBlcik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHBpeGVsID0gY29udGV4dE9uZS5nZXRJbWFnZURhdGEoeCwgeSwgYmxvY2tzaXplLCBibG9ja3NpemUpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcImNoYW5nZXNcIilcclxuICAgICAgLy8gY29uc29sZS5sb2cocGl4ZWwpXHJcbiAgICAgIGNvbnN0IFtyLCBnLCBiXSA9IHBpeGVsLmRhdGE7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHIsIGcsIGIpO1xyXG4gICAgICAvLyBjb25zdCBhdmcgPSAociArIGcgKyBiKSAvIDM7XHJcbiAgICAgIC8vZmlsbCByZWN0cyB3aXRoIHRoZSBhdmVyYWdlIGNvbG9yXHJcbiAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICAgIHNxdWFyZS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgc3F1YXJlLnN0eWxlLmxlZnQgPSB4ICsgXCJweFwiO1xyXG4gICAgICBzcXVhcmUuc3R5bGUudG9wID0geSArIFwicHhcIjtcclxuICAgICAgaWYoeCArIGJsb2Nrc2l6ZSA+IGNhbnZhc3NUd28ud2lkdGgpe1xyXG4gICAgICAgIHNxdWFyZS5zdHlsZS53aWR0aCA9IGNhbnZhc3NUd28ud2lkdGggLSB4ICsgXCJweFwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNxdWFyZS5zdHlsZS53aWR0aCA9IGJsb2Nrc2l6ZSArIFwicHhcIjtcclxuICAgICAgfVxyXG4gICAgICBpZih5ICsgYmxvY2tzaXplID4gY2FudmFzc1R3by5oZWlnaHQpe1xyXG4gICAgICAgIHNxdWFyZS5zdHlsZS5oZWlnaHQgPSBjYW52YXNzVHdvLmhlaWdodCAtIHkgKyBcInB4XCI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3F1YXJlLnN0eWxlLmhlaWdodCA9IGJsb2Nrc2l6ZSArIFwicHhcIjtcclxuICAgICAgfVxyXG4gICAgICBzcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYHJnYigke3BpeGVsLmRhdGFbMF19LCAke3BpeGVsLmRhdGFbMV19LCAke3BpeGVsLmRhdGFbMl19KWA7XHJcbiAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcclxuICAgICAgLy8gY29udGV4dFR3by5maWxsU3R5bGUgPSBgcmdiKCR7YXZnfSwgJHthdmd9LCAke2F2Z30pYDtcclxuICAgICAgLy8gY29udGV4dFR3by5maWxsUmVjdCh4LCB5LCBibG9ja3NpemUsIGJsb2Nrc2l6ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5zZXRDYW52YXNzT25lKGNob3NlbkltYWdlKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9