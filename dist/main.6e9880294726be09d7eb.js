/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/images/arnold.jpg":
/*!*******************************!*\
  !*** ./src/images/arnold.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "arnold.jpg";

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

module.exports = __webpack_require__.p + "reno.jpg";

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

module.exports = __webpack_require__.p + "willis.jpg";

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

//import the images







// let arnold = "./images/arnold.jpg"
// let willis = "./images/willis.jpg"
// let robin = "./images/robin.webp"
// let reno = "./images/reno.jpg"
// let reeves = "./images/reeves.webp"

let canvassTwo = document.getElementById('canvas2');
let CanvassOne = document.getElementById('canvas1');
let contextOne
let img1

// const { ContextReplacementPlugin } = require('webpack');
let fpsInterval;
let then;
let startTime;
let now
let elapsed;
let agents = [];
let dotsmove = 'off'
let canvas
let movieInterval
let context
let typeContext
let typeCanvas

let video
let cell = 5
let generateFilter
let shape='circles'
let mousePos
let inputStrings = []
let glyphs = '_= /'.split('');
let videoWidth;
let videoHeight;
let videoChoice = "pedler"
let chosenImage

function randomPick(arr) {
	const index = Math.floor(Math.random() * arr.length);
	return arr[index];
}
// glyphs.push("Ukrain")
//randomly pick a image to apply to canvass 1
function pickimage (){
	console.log("picking")
const images = [_images_arnold_jpg__WEBPACK_IMPORTED_MODULE_0__, _images_willis_jpg__WEBPACK_IMPORTED_MODULE_1__, _images_robin_webp__WEBPACK_IMPORTED_MODULE_2__, _images_reno_jpg__WEBPACK_IMPORTED_MODULE_3__, _images_reeves_webp__WEBPACK_IMPORTED_MODULE_4__];
const randomImage = randomPick(images);
return randomImage
}

//set the chosen image to display on canvas 1
chosenImage = pickimage()
function setCanvassOne(chosenImage){
	console.log("canvas one")
	img1 = new Image();
	img1.src = chosenImage;
	console.log(img1)
	img1.onload = function() {
		console.log("image loaded 1")
		typeCanvas=document.getElementById('canvas1');
		contextOne = typeCanvas.getContext('2d');
		typeCanvas.width = img1.width;
		typeCanvas.height = img1.height;
		contextOne.drawImage(img1, 0, 0);
		// create the second canvas
		setCanvassTwo(chosenImage,10)
	}
}


//on canvas 2 create squares of 10 pxs each to afstract the image
function setCanvassTwo(chosenImage, blocksize=10){
	console.log("canvas two")
	const img2 = new Image();
	img2.crossOrigin="Anonymous"
	img2.src = chosenImage;
	img2.onload = function() {
		console.log("image loaded 2")
		canvassTwo=document.getElementById('canvas2');
		const contextTwo = canvassTwo.getContext('2d');
		contextTwo.drawImage(img2, 0, 0);
		for (let y = 0; y < canvassTwo.height; y += blocksize) {
			for (let x = 0; x < canvassTwo.width; x += blocksize) {
				const pixel = contextTwo.getImageData(x, y, blocksize/2, blocksize/2);
				console.log(pixel)
				const [r, g, b] = pixel.data;
				console.log(r, g, b);
				const avg = (r + g + b) / 3;
				contextTwo.fillStyle = `rgb(${avg}, ${avg}, ${avg})`;
				contextTwo.fillRect(x, y, blocksize, blocksize);
			}
		}

	}
	
}

setCanvassOne(chosenImage)





// const getGlyph = (v) => {
	
// 	return random.pick(glyphs);
// };

// function getMousePos(canvas, evt) {
// console.log("gettingmouse pos")
//   var rect = canvas.getBoundingClientRect();
// 	console.log(rect)
//   return {
//     x: evt.clientX - rect.left,
//     y: evt.clientY - rect.top
//   };
// }

// function startAnimating(fps) {
//     fpsInterval = 1000 / fps;
//     then = Date.now();
//     startTime = then;
//     tick();
// }
// class Agent {
// 	constructor(x, y, fillStyle, cell) {
// 		// this.pos = new Vector(x, y);
// 		this.x=x;
// 		this.y=y;
// 		this.radius=cell/2;
// 		this.fillStyle=fillStyle
// 		this.vel = {x:random.range(-.5, .5), y:random.range(-.5, .5)};

// 	}


// getDistance(v) {
// 		const dx = this.x - v.x;
// 		const dy = this.y - v.y;
// 		return Math.sqrt(dx * dx + dy * dy);
// }

// moveBit(){
// 	this.x += this.vel.x;
// 	this.y += this.vel.y;
// 	switch(shape){
// case 'circles':
// this.draw(context)
// break;
// case 'squares':
// this.drawSquare(context)
// break;
// case 'rumbus':
// this.drawRumbus(context)
// break;
// case 'words':
// context.fillStyle = 'black';
// context.textBaseline = 'middle';
// context.textAlign = 'center';
// this.drawText(context)
// }

// this.bounce(1000, 1000)
// }




// 	bounce(width, height) {
// 		if (this.x <= 0 || this.x >= width)  this.vel.x *= -1;
// 		if (this.y <= 0 || this.y >= height) this.vel.y *= -1;
// 	}

// 	update() {
// 		this.x += this.vel.x;
// 		this.y += this.vel.y;
// 	}

// 	draw(context) {
// 		context.save();

// 		context.fillStyle = this.fillStyle
// 		context.translate(this.x, this.y);
// 	    context.translate(this.radius, this.radius);

// 		context.beginPath();
// 		context.arc(0, 0, this.radius, 0, Math.PI * 2);
// 		context.fill();
// 		context.restore();
// 	}
// 	drawSquare(context) {
// 		context.save();

// 		context.fillStyle = this.fillStyle
// 		context.translate(this.x, this.y);
// 	    // context.translate(this.radius, this.radius);

// 		context.beginPath();

// 		context.fillRect(0,0,this.radius*2, this.radius*2);
// 		context.fill();
// 		context.restore();
// 	}
// 	drawRumbus(context) {
// 		context.save();

// 		context.fillStyle = this.fillStyle
// 		context.translate(this.x, this.y);
// 		context.rotate(Math.PI*.25);

// 	    // context.translate(this.radius, this.radius);

// 		context.beginPath();

// 		context.fillRect(0,0,this.radius, this.radius);



// 		context.fill();

// 		context.restore();
// 	}
// 	drawText(context) {


// 		const glyph = getGlyph(200);
// 		fontSize = this.radius * 2.4;

// 		typeContext.fillStyle = 'black';
	

// 			context.font = `${this.radius * 2}px ${fontFamily}`;
// 			if (Math.random() < 0.1) context.font = `${this.radius * 6}px ${fontFamily}`;
// 			typeContext.textBaseline = 'top';

// 		context.fillStyle = this.fillStyle

// 			context.save();
// 			context.translate(this.x, this.y);
// 			context.translate(this.radius * 0.5, this.radius * 0.5);

// 			// context.fillRect(0, 0, cell, cell);

// 			context.fillText(glyph, 0, 0);
			
// 			context.restore();

		
// 	}
// }



// let agentPushed = 0 
// let fontSize = 1200;
// let fontFamily = 'serif';

// document.addEventListener("DOMContentLoaded", function(event) { 

// typeCanvas=document.getElementById('canvas1');
// canvas=document.getElementById('canvas2');
// context = canvas.getContext('2d');

// // console.log(typeCanvas)
// typeContext = typeCanvas.getContext('2d');
// video  = document.getElementById('video');
// var checkvideo = setInterval(() => {
// 	if ( video.readyState === 4 ) {
// videoWidth = video.videoWidth;
// videoHeight = video.videoHeight;
// // console.log(videoHeight)
// var typeCanvasHeight = videoHeight/cell;
// var typeCanvasWidth = videoWidth/cell
// // console.log(typeCanvasHeight)
// // console.log(typeCanvasWidth)
// typeCanvas.width = typeCanvasWidth;
// typeCanvas.height = typeCanvasHeight;
// canvas.height = videoHeight;
// canvas.width= videoWidth;
// clearInterval(checkvideo)

// }
// }, 200);

// generateImageFilter= function(image){
// 	// console.log('mousedown')
	

// //main funciton
// generateFilter= function(video){
// 	// console.log('mousedown')
// 	clearInterval(movieInterval)
// 	 movieInterval = setInterval(() => {
// 	context.clearRect(0, 0, canvas.width, canvas.height);

// 	dotsmove= 'off'
// 	agents = [];

//     var $this = this; //cache
// 	const width= typeCanvas.width;
// 	const height = typeCanvas.height
// 	// const cols = Math.floor(width  / cell);
// 	// const rows = Math.floor(height / cell);
// 	const cols = width;
// 	const rows = height;
// 	const numCells = cols * rows
  
//         typeContext.drawImage(video, 0, 0, width, height);
// 		var typeData = typeContext.getImageData(0, 0, width, height).data;
// 		// console.log(typeData)
// 		context.fillStyle = 'black';
// 		context.fillRect(0, 0, width, height);

// 		context.textBaseline = 'middle';
// 		context.textAlign = 'center';

// 		// context.drawImage(typeCanvas, 0, 0);
// 		for (let i = 0; i < numCells; i++) {

// 			const col = i % cols;
// 			const row = Math.floor(i / cols);

// 			const x = col*cell;
// 			const y = row*cell;

// 			const r = typeData[i * 4 + 0];
// 			const g = typeData[i * 4 + 1];
// 			const b = typeData[i * 4 + 2];
// 			const a = typeData[i * 4 + 3];
// 			// let newAgent = new Agent(x, y,'rgb('+r+','+g+','+b+')', cell )
// 			// console.log(newAgent)

// 			agents.push(new Agent(x, y,'rgb('+r+','+g+','+b+')', cell ))
// 			// console.log(agents)
// 			// console.log(Agent)
// 			// console.log("agent")
// 			agentPushed++;

// 		}
// 		if(agentPushed>=numCells){
	
// 				agents.forEach(agent=>{

// 			switch(shape){
// case 'circles':
// agent.draw(context)
// break;
// case 'squares':
// agent.drawSquare(context)
// break;
// case 'rumbus':
// agent.drawRumbus(context)
// break;
// case 'words':
// context.textBaseline = 'middle';
// context.textAlign = 'center';
// agent.drawText(context)
// }




// })
// 	}	

// }, 500);


// if(canvas){
// canvas.addEventListener('mousedown', canvasClick);
// canvas.addEventListener('mousemove', (e)=>{
// console.log('moisemove')
// movePixles(e)
// })
// }
// }



// video.addEventListener('play', function () {

// generateFilter(video);

// })

// }

// })
// const canvasClick = ()=>{
// clearInterval(movieInterval)
// console.log('canvas click')
// if(dotsmove=='off'){
// dotsmove ='on'
// }
// else{
// dotsmove="off"
// generateFilter(video);
// }
// }


// const tick = () =>{

// if(agents.length>0&&dotsmove=='on'){
// for(let i = 0; i<agents.length;i++){
// agents[i].update()
// switch(shape){
// case 'circles':
// agents[i].draw(context)
// break;
// case 'squares':
// agents[i].drawSquare(context)
// break;
// case 'rumbus':
// agents[i].drawRumbus(context)
// break;
// case 'words':
// context.fillStyle = 'black';
// context.textBaseline = 'middle';
// context.textAlign = 'center';
// agents[i].drawText(context)
// }

// agents[i].bounce(videoWidth, videoHeight)
// }
// }
//      window.requestAnimationFrame(tick)
//     now = Date.now();
//     elapsed = now - then;

//     // if enough time has elapsed, draw the next frame

//     if (elapsed > fpsInterval) {

//         // Get ready for next frame by setting then=now, but also adjust for your
//         // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
//         then = now - (elapsed % fpsInterval);   
// }
// }
// startAnimating(5)


// const selectSizes = document.getElementById('sizeSelect')
// //select sizes function
// const changeSize= function(){
// let sizeValue = parseInt(selectSizes.value);
// console.log(sizeValue);
// cell=sizeValue
// 	if ( video.readyState === 4 ) {
// var videoWidth = video.videoWidth;
// var videoHeight = video.videoHeight;
// // console.log(videoHeight)
// var typeCanvasHeight = videoHeight/cell;
// var typeCanvasWidth = videoWidth/cell
// // console.log(typeCanvasHeight)
// // console.log(typeCanvasWidth)
// typeCanvas.width = typeCanvasWidth;
// typeCanvas.height = typeCanvasHeight;
// canvas.height = videoHeight;
// canvas.width= videoWidth;
// clearInterval(movieInterval);
// generateFilter(video)
// 	}
// }
// selectSizes.addEventListener('change', ()=>{changeSize()})


// const selectFilter = document.getElementById('filterSelect')
// selectFilter.addEventListener('change', ()=>{changeFilter()})


// function changeFilter(){
// console.log(selectFilter.value)
// shape = selectFilter.value;
// }




// const loadVideo= function(){
// video  = document.getElementById('video');
// switch(videoChoice){
// case "troika":
// video.src = troika
// break;
// case "pedler":
// video.src= koro
// }
// }

// loadVideo()

// const selectVideo = document.getElementById('videoSelect')
// function changeVideo(){
// console.log(selectVideo.value)
// videoChoice=selectVideo.value;
// loadVideo()
// setTimeout(() => {
	

// if ( video.readyState === 4 ){
// var videoWidth = video.videoWidth;
// var videoHeight = video.videoHeight;
// // console.log(videoHeight)
// var typeCanvasHeight = videoHeight/cell;
// var typeCanvasWidth = videoWidth/cell
// // console.log(typeCanvasHeight)
// // console.log(typeCanvasWidth)
// typeCanvas.width = typeCanvasWidth;
// typeCanvas.height = typeCanvasHeight;
// canvas.height = videoHeight;
// canvas.width= videoWidth;
// clearInterval(movieInterval);
// generateFilter(video)
// }
// }, 50);
// }
// selectVideo.addEventListener('change', ()=>{changeVideo()})

// // selectVideos.addEventListener('change', loadVideo())

// const wordsInputForm = document.getElementById('inputWordsForm')
// const wordsInput = document.getElementById('inputWords')

// wordsInputForm.addEventListener('submit',(e)=>{
// e.preventDefault();
// e.stopPropagation();

// addWords()})

// function addWords(){
// var word = wordsInput.value;
// console.log(wordsInput.value)
// if(word.length<20){
// inputStrings.push(word)
// glyphs=glyphs.concat(inputStrings)
// console.log(glyphs)
// };
// }

// const movePixles=(e)=>{
// mousePos = getMousePos(canvas, e)

// for (let i = 0; i < agents.length; i++) {
// 	const agent = agents[i];
// const dist = agent.getDistance(mousePos);
// 	if (dist > 200) continue;
// 		agent.moveBit()
// 		}	



// }

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2VicGFja3ByYWN0aWNlMi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrcHJhY3RpY2UyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VicGFja3ByYWN0aWNlMi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2twcmFjdGljZTIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VicGFja3ByYWN0aWNlMi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIlxyXG4vL2ltcG9ydCB0aGUgaW1hZ2VzXHJcbmltcG9ydCBhcm5vbGQgZnJvbSBcIi4vaW1hZ2VzL2Fybm9sZC5qcGdcIlxyXG5pbXBvcnQgd2lsbGlzIGZyb20gXCIuL2ltYWdlcy93aWxsaXMuanBnXCJcclxuaW1wb3J0IHJvYmluIGZyb20gXCIuL2ltYWdlcy9yb2Jpbi53ZWJwXCJcclxuaW1wb3J0IHJlbm8gZnJvbSBcIi4vaW1hZ2VzL3Jlbm8uanBnXCJcclxuaW1wb3J0IHJlZXZlcyBmcm9tIFwiLi9pbWFnZXMvcmVldmVzLndlYnBcIlxyXG5cclxuXHJcbi8vIGxldCBhcm5vbGQgPSBcIi4vaW1hZ2VzL2Fybm9sZC5qcGdcIlxyXG4vLyBsZXQgd2lsbGlzID0gXCIuL2ltYWdlcy93aWxsaXMuanBnXCJcclxuLy8gbGV0IHJvYmluID0gXCIuL2ltYWdlcy9yb2Jpbi53ZWJwXCJcclxuLy8gbGV0IHJlbm8gPSBcIi4vaW1hZ2VzL3Jlbm8uanBnXCJcclxuLy8gbGV0IHJlZXZlcyA9IFwiLi9pbWFnZXMvcmVldmVzLndlYnBcIlxyXG5cclxubGV0IGNhbnZhc3NUd28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzMicpO1xyXG5sZXQgQ2FudmFzc09uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMxJyk7XHJcbmxldCBjb250ZXh0T25lXHJcbmxldCBpbWcxXHJcblxyXG4vLyBjb25zdCB7IENvbnRleHRSZXBsYWNlbWVudFBsdWdpbiB9ID0gcmVxdWlyZSgnd2VicGFjaycpO1xyXG5sZXQgZnBzSW50ZXJ2YWw7XHJcbmxldCB0aGVuO1xyXG5sZXQgc3RhcnRUaW1lO1xyXG5sZXQgbm93XHJcbmxldCBlbGFwc2VkO1xyXG5sZXQgYWdlbnRzID0gW107XHJcbmxldCBkb3RzbW92ZSA9ICdvZmYnXHJcbmxldCBjYW52YXNcclxubGV0IG1vdmllSW50ZXJ2YWxcclxubGV0IGNvbnRleHRcclxubGV0IHR5cGVDb250ZXh0XHJcbmxldCB0eXBlQ2FudmFzXHJcblxyXG5sZXQgdmlkZW9cclxubGV0IGNlbGwgPSA1XHJcbmxldCBnZW5lcmF0ZUZpbHRlclxyXG5sZXQgc2hhcGU9J2NpcmNsZXMnXHJcbmxldCBtb3VzZVBvc1xyXG5sZXQgaW5wdXRTdHJpbmdzID0gW11cclxubGV0IGdseXBocyA9ICdfPSAvJy5zcGxpdCgnJyk7XHJcbmxldCB2aWRlb1dpZHRoO1xyXG5sZXQgdmlkZW9IZWlnaHQ7XHJcbmxldCB2aWRlb0Nob2ljZSA9IFwicGVkbGVyXCJcclxubGV0IGNob3NlbkltYWdlXHJcblxyXG5mdW5jdGlvbiByYW5kb21QaWNrKGFycikge1xyXG5cdGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyLmxlbmd0aCk7XHJcblx0cmV0dXJuIGFycltpbmRleF07XHJcbn1cclxuLy8gZ2x5cGhzLnB1c2goXCJVa3JhaW5cIilcclxuLy9yYW5kb21seSBwaWNrIGEgaW1hZ2UgdG8gYXBwbHkgdG8gY2FudmFzcyAxXHJcbmZ1bmN0aW9uIHBpY2tpbWFnZSAoKXtcclxuXHRjb25zb2xlLmxvZyhcInBpY2tpbmdcIilcclxuY29uc3QgaW1hZ2VzID0gW2Fybm9sZCwgd2lsbGlzLCByb2JpbiwgcmVubywgcmVldmVzXTtcclxuY29uc3QgcmFuZG9tSW1hZ2UgPSByYW5kb21QaWNrKGltYWdlcyk7XHJcbnJldHVybiByYW5kb21JbWFnZVxyXG59XHJcblxyXG4vL3NldCB0aGUgY2hvc2VuIGltYWdlIHRvIGRpc3BsYXkgb24gY2FudmFzIDFcclxuY2hvc2VuSW1hZ2UgPSBwaWNraW1hZ2UoKVxyXG5mdW5jdGlvbiBzZXRDYW52YXNzT25lKGNob3NlbkltYWdlKXtcclxuXHRjb25zb2xlLmxvZyhcImNhbnZhcyBvbmVcIilcclxuXHRpbWcxID0gbmV3IEltYWdlKCk7XHJcblx0aW1nMS5zcmMgPSBjaG9zZW5JbWFnZTtcclxuXHRjb25zb2xlLmxvZyhpbWcxKVxyXG5cdGltZzEub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcImltYWdlIGxvYWRlZCAxXCIpXHJcblx0XHR0eXBlQ2FudmFzPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMxJyk7XHJcblx0XHRjb250ZXh0T25lID0gdHlwZUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cdFx0dHlwZUNhbnZhcy53aWR0aCA9IGltZzEud2lkdGg7XHJcblx0XHR0eXBlQ2FudmFzLmhlaWdodCA9IGltZzEuaGVpZ2h0O1xyXG5cdFx0Y29udGV4dE9uZS5kcmF3SW1hZ2UoaW1nMSwgMCwgMCk7XHJcblx0XHQvLyBjcmVhdGUgdGhlIHNlY29uZCBjYW52YXNcclxuXHRcdHNldENhbnZhc3NUd28oY2hvc2VuSW1hZ2UsMTApXHJcblx0fVxyXG59XHJcblxyXG5cclxuLy9vbiBjYW52YXMgMiBjcmVhdGUgc3F1YXJlcyBvZiAxMCBweHMgZWFjaCB0byBhZnN0cmFjdCB0aGUgaW1hZ2VcclxuZnVuY3Rpb24gc2V0Q2FudmFzc1R3byhjaG9zZW5JbWFnZSwgYmxvY2tzaXplPTEwKXtcclxuXHRjb25zb2xlLmxvZyhcImNhbnZhcyB0d29cIilcclxuXHRjb25zdCBpbWcyID0gbmV3IEltYWdlKCk7XHJcblx0aW1nMi5jcm9zc09yaWdpbj1cIkFub255bW91c1wiXHJcblx0aW1nMi5zcmMgPSBjaG9zZW5JbWFnZTtcclxuXHRpbWcyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJpbWFnZSBsb2FkZWQgMlwiKVxyXG5cdFx0Y2FudmFzc1R3bz1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzMicpO1xyXG5cdFx0Y29uc3QgY29udGV4dFR3byA9IGNhbnZhc3NUd28uZ2V0Q29udGV4dCgnMmQnKTtcclxuXHRcdGNvbnRleHRUd28uZHJhd0ltYWdlKGltZzIsIDAsIDApO1xyXG5cdFx0Zm9yIChsZXQgeSA9IDA7IHkgPCBjYW52YXNzVHdvLmhlaWdodDsgeSArPSBibG9ja3NpemUpIHtcclxuXHRcdFx0Zm9yIChsZXQgeCA9IDA7IHggPCBjYW52YXNzVHdvLndpZHRoOyB4ICs9IGJsb2Nrc2l6ZSkge1xyXG5cdFx0XHRcdGNvbnN0IHBpeGVsID0gY29udGV4dFR3by5nZXRJbWFnZURhdGEoeCwgeSwgYmxvY2tzaXplLzIsIGJsb2Nrc2l6ZS8yKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhwaXhlbClcclxuXHRcdFx0XHRjb25zdCBbciwgZywgYl0gPSBwaXhlbC5kYXRhO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHIsIGcsIGIpO1xyXG5cdFx0XHRcdGNvbnN0IGF2ZyA9IChyICsgZyArIGIpIC8gMztcclxuXHRcdFx0XHRjb250ZXh0VHdvLmZpbGxTdHlsZSA9IGByZ2IoJHthdmd9LCAke2F2Z30sICR7YXZnfSlgO1xyXG5cdFx0XHRcdGNvbnRleHRUd28uZmlsbFJlY3QoeCwgeSwgYmxvY2tzaXplLCBibG9ja3NpemUpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHRcclxufVxyXG5cclxuc2V0Q2FudmFzc09uZShjaG9zZW5JbWFnZSlcclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBjb25zdCBnZXRHbHlwaCA9ICh2KSA9PiB7XHJcblx0XHJcbi8vIFx0cmV0dXJuIHJhbmRvbS5waWNrKGdseXBocyk7XHJcbi8vIH07XHJcblxyXG4vLyBmdW5jdGlvbiBnZXRNb3VzZVBvcyhjYW52YXMsIGV2dCkge1xyXG4vLyBjb25zb2xlLmxvZyhcImdldHRpbmdtb3VzZSBwb3NcIilcclxuLy8gICB2YXIgcmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuLy8gXHRjb25zb2xlLmxvZyhyZWN0KVxyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICB4OiBldnQuY2xpZW50WCAtIHJlY3QubGVmdCxcclxuLy8gICAgIHk6IGV2dC5jbGllbnRZIC0gcmVjdC50b3BcclxuLy8gICB9O1xyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBzdGFydEFuaW1hdGluZyhmcHMpIHtcclxuLy8gICAgIGZwc0ludGVydmFsID0gMTAwMCAvIGZwcztcclxuLy8gICAgIHRoZW4gPSBEYXRlLm5vdygpO1xyXG4vLyAgICAgc3RhcnRUaW1lID0gdGhlbjtcclxuLy8gICAgIHRpY2soKTtcclxuLy8gfVxyXG4vLyBjbGFzcyBBZ2VudCB7XHJcbi8vIFx0Y29uc3RydWN0b3IoeCwgeSwgZmlsbFN0eWxlLCBjZWxsKSB7XHJcbi8vIFx0XHQvLyB0aGlzLnBvcyA9IG5ldyBWZWN0b3IoeCwgeSk7XHJcbi8vIFx0XHR0aGlzLng9eDtcclxuLy8gXHRcdHRoaXMueT15O1xyXG4vLyBcdFx0dGhpcy5yYWRpdXM9Y2VsbC8yO1xyXG4vLyBcdFx0dGhpcy5maWxsU3R5bGU9ZmlsbFN0eWxlXHJcbi8vIFx0XHR0aGlzLnZlbCA9IHt4OnJhbmRvbS5yYW5nZSgtLjUsIC41KSwgeTpyYW5kb20ucmFuZ2UoLS41LCAuNSl9O1xyXG5cclxuLy8gXHR9XHJcblxyXG5cclxuLy8gZ2V0RGlzdGFuY2Uodikge1xyXG4vLyBcdFx0Y29uc3QgZHggPSB0aGlzLnggLSB2Lng7XHJcbi8vIFx0XHRjb25zdCBkeSA9IHRoaXMueSAtIHYueTtcclxuLy8gXHRcdHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xyXG4vLyB9XHJcblxyXG4vLyBtb3ZlQml0KCl7XHJcbi8vIFx0dGhpcy54ICs9IHRoaXMudmVsLng7XHJcbi8vIFx0dGhpcy55ICs9IHRoaXMudmVsLnk7XHJcbi8vIFx0c3dpdGNoKHNoYXBlKXtcclxuLy8gY2FzZSAnY2lyY2xlcyc6XHJcbi8vIHRoaXMuZHJhdyhjb250ZXh0KVxyXG4vLyBicmVhaztcclxuLy8gY2FzZSAnc3F1YXJlcyc6XHJcbi8vIHRoaXMuZHJhd1NxdWFyZShjb250ZXh0KVxyXG4vLyBicmVhaztcclxuLy8gY2FzZSAncnVtYnVzJzpcclxuLy8gdGhpcy5kcmF3UnVtYnVzKGNvbnRleHQpXHJcbi8vIGJyZWFrO1xyXG4vLyBjYXNlICd3b3Jkcyc6XHJcbi8vIGNvbnRleHQuZmlsbFN0eWxlID0gJ2JsYWNrJztcclxuLy8gY29udGV4dC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcclxuLy8gY29udGV4dC50ZXh0QWxpZ24gPSAnY2VudGVyJztcclxuLy8gdGhpcy5kcmF3VGV4dChjb250ZXh0KVxyXG4vLyB9XHJcblxyXG4vLyB0aGlzLmJvdW5jZSgxMDAwLCAxMDAwKVxyXG4vLyB9XHJcblxyXG5cclxuXHJcblxyXG4vLyBcdGJvdW5jZSh3aWR0aCwgaGVpZ2h0KSB7XHJcbi8vIFx0XHRpZiAodGhpcy54IDw9IDAgfHwgdGhpcy54ID49IHdpZHRoKSAgdGhpcy52ZWwueCAqPSAtMTtcclxuLy8gXHRcdGlmICh0aGlzLnkgPD0gMCB8fCB0aGlzLnkgPj0gaGVpZ2h0KSB0aGlzLnZlbC55ICo9IC0xO1xyXG4vLyBcdH1cclxuXHJcbi8vIFx0dXBkYXRlKCkge1xyXG4vLyBcdFx0dGhpcy54ICs9IHRoaXMudmVsLng7XHJcbi8vIFx0XHR0aGlzLnkgKz0gdGhpcy52ZWwueTtcclxuLy8gXHR9XHJcblxyXG4vLyBcdGRyYXcoY29udGV4dCkge1xyXG4vLyBcdFx0Y29udGV4dC5zYXZlKCk7XHJcblxyXG4vLyBcdFx0Y29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmZpbGxTdHlsZVxyXG4vLyBcdFx0Y29udGV4dC50cmFuc2xhdGUodGhpcy54LCB0aGlzLnkpO1xyXG4vLyBcdCAgICBjb250ZXh0LnRyYW5zbGF0ZSh0aGlzLnJhZGl1cywgdGhpcy5yYWRpdXMpO1xyXG5cclxuLy8gXHRcdGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbi8vIFx0XHRjb250ZXh0LmFyYygwLCAwLCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xyXG4vLyBcdFx0Y29udGV4dC5maWxsKCk7XHJcbi8vIFx0XHRjb250ZXh0LnJlc3RvcmUoKTtcclxuLy8gXHR9XHJcbi8vIFx0ZHJhd1NxdWFyZShjb250ZXh0KSB7XHJcbi8vIFx0XHRjb250ZXh0LnNhdmUoKTtcclxuXHJcbi8vIFx0XHRjb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuZmlsbFN0eWxlXHJcbi8vIFx0XHRjb250ZXh0LnRyYW5zbGF0ZSh0aGlzLngsIHRoaXMueSk7XHJcbi8vIFx0ICAgIC8vIGNvbnRleHQudHJhbnNsYXRlKHRoaXMucmFkaXVzLCB0aGlzLnJhZGl1cyk7XHJcblxyXG4vLyBcdFx0Y29udGV4dC5iZWdpblBhdGgoKTtcclxuXHJcbi8vIFx0XHRjb250ZXh0LmZpbGxSZWN0KDAsMCx0aGlzLnJhZGl1cyoyLCB0aGlzLnJhZGl1cyoyKTtcclxuLy8gXHRcdGNvbnRleHQuZmlsbCgpO1xyXG4vLyBcdFx0Y29udGV4dC5yZXN0b3JlKCk7XHJcbi8vIFx0fVxyXG4vLyBcdGRyYXdSdW1idXMoY29udGV4dCkge1xyXG4vLyBcdFx0Y29udGV4dC5zYXZlKCk7XHJcblxyXG4vLyBcdFx0Y29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmZpbGxTdHlsZVxyXG4vLyBcdFx0Y29udGV4dC50cmFuc2xhdGUodGhpcy54LCB0aGlzLnkpO1xyXG4vLyBcdFx0Y29udGV4dC5yb3RhdGUoTWF0aC5QSSouMjUpO1xyXG5cclxuLy8gXHQgICAgLy8gY29udGV4dC50cmFuc2xhdGUodGhpcy5yYWRpdXMsIHRoaXMucmFkaXVzKTtcclxuXHJcbi8vIFx0XHRjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG5cclxuLy8gXHRcdGNvbnRleHQuZmlsbFJlY3QoMCwwLHRoaXMucmFkaXVzLCB0aGlzLnJhZGl1cyk7XHJcblxyXG5cclxuXHJcbi8vIFx0XHRjb250ZXh0LmZpbGwoKTtcclxuXHJcbi8vIFx0XHRjb250ZXh0LnJlc3RvcmUoKTtcclxuLy8gXHR9XHJcbi8vIFx0ZHJhd1RleHQoY29udGV4dCkge1xyXG5cclxuXHJcbi8vIFx0XHRjb25zdCBnbHlwaCA9IGdldEdseXBoKDIwMCk7XHJcbi8vIFx0XHRmb250U2l6ZSA9IHRoaXMucmFkaXVzICogMi40O1xyXG5cclxuLy8gXHRcdHR5cGVDb250ZXh0LmZpbGxTdHlsZSA9ICdibGFjayc7XHJcblx0XHJcblxyXG4vLyBcdFx0XHRjb250ZXh0LmZvbnQgPSBgJHt0aGlzLnJhZGl1cyAqIDJ9cHggJHtmb250RmFtaWx5fWA7XHJcbi8vIFx0XHRcdGlmIChNYXRoLnJhbmRvbSgpIDwgMC4xKSBjb250ZXh0LmZvbnQgPSBgJHt0aGlzLnJhZGl1cyAqIDZ9cHggJHtmb250RmFtaWx5fWA7XHJcbi8vIFx0XHRcdHR5cGVDb250ZXh0LnRleHRCYXNlbGluZSA9ICd0b3AnO1xyXG5cclxuLy8gXHRcdGNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5maWxsU3R5bGVcclxuXHJcbi8vIFx0XHRcdGNvbnRleHQuc2F2ZSgpO1xyXG4vLyBcdFx0XHRjb250ZXh0LnRyYW5zbGF0ZSh0aGlzLngsIHRoaXMueSk7XHJcbi8vIFx0XHRcdGNvbnRleHQudHJhbnNsYXRlKHRoaXMucmFkaXVzICogMC41LCB0aGlzLnJhZGl1cyAqIDAuNSk7XHJcblxyXG4vLyBcdFx0XHQvLyBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIGNlbGwsIGNlbGwpO1xyXG5cclxuLy8gXHRcdFx0Y29udGV4dC5maWxsVGV4dChnbHlwaCwgMCwgMCk7XHJcblx0XHRcdFxyXG4vLyBcdFx0XHRjb250ZXh0LnJlc3RvcmUoKTtcclxuXHJcblx0XHRcclxuLy8gXHR9XHJcbi8vIH1cclxuXHJcblxyXG5cclxuLy8gbGV0IGFnZW50UHVzaGVkID0gMCBcclxuLy8gbGV0IGZvbnRTaXplID0gMTIwMDtcclxuLy8gbGV0IGZvbnRGYW1pbHkgPSAnc2VyaWYnO1xyXG5cclxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oZXZlbnQpIHsgXHJcblxyXG4vLyB0eXBlQ2FudmFzPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMxJyk7XHJcbi8vIGNhbnZhcz1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzMicpO1xyXG4vLyBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4vLyAvLyBjb25zb2xlLmxvZyh0eXBlQ2FudmFzKVxyXG4vLyB0eXBlQ29udGV4dCA9IHR5cGVDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuLy8gdmlkZW8gID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZGVvJyk7XHJcbi8vIHZhciBjaGVja3ZpZGVvID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4vLyBcdGlmICggdmlkZW8ucmVhZHlTdGF0ZSA9PT0gNCApIHtcclxuLy8gdmlkZW9XaWR0aCA9IHZpZGVvLnZpZGVvV2lkdGg7XHJcbi8vIHZpZGVvSGVpZ2h0ID0gdmlkZW8udmlkZW9IZWlnaHQ7XHJcbi8vIC8vIGNvbnNvbGUubG9nKHZpZGVvSGVpZ2h0KVxyXG4vLyB2YXIgdHlwZUNhbnZhc0hlaWdodCA9IHZpZGVvSGVpZ2h0L2NlbGw7XHJcbi8vIHZhciB0eXBlQ2FudmFzV2lkdGggPSB2aWRlb1dpZHRoL2NlbGxcclxuLy8gLy8gY29uc29sZS5sb2codHlwZUNhbnZhc0hlaWdodClcclxuLy8gLy8gY29uc29sZS5sb2codHlwZUNhbnZhc1dpZHRoKVxyXG4vLyB0eXBlQ2FudmFzLndpZHRoID0gdHlwZUNhbnZhc1dpZHRoO1xyXG4vLyB0eXBlQ2FudmFzLmhlaWdodCA9IHR5cGVDYW52YXNIZWlnaHQ7XHJcbi8vIGNhbnZhcy5oZWlnaHQgPSB2aWRlb0hlaWdodDtcclxuLy8gY2FudmFzLndpZHRoPSB2aWRlb1dpZHRoO1xyXG4vLyBjbGVhckludGVydmFsKGNoZWNrdmlkZW8pXHJcblxyXG4vLyB9XHJcbi8vIH0sIDIwMCk7XHJcblxyXG4vLyBnZW5lcmF0ZUltYWdlRmlsdGVyPSBmdW5jdGlvbihpbWFnZSl7XHJcbi8vIFx0Ly8gY29uc29sZS5sb2coJ21vdXNlZG93bicpXHJcblx0XHJcblxyXG4vLyAvL21haW4gZnVuY2l0b25cclxuLy8gZ2VuZXJhdGVGaWx0ZXI9IGZ1bmN0aW9uKHZpZGVvKXtcclxuLy8gXHQvLyBjb25zb2xlLmxvZygnbW91c2Vkb3duJylcclxuLy8gXHRjbGVhckludGVydmFsKG1vdmllSW50ZXJ2YWwpXHJcbi8vIFx0IG1vdmllSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbi8vIFx0Y29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuXHJcbi8vIFx0ZG90c21vdmU9ICdvZmYnXHJcbi8vIFx0YWdlbnRzID0gW107XHJcblxyXG4vLyAgICAgdmFyICR0aGlzID0gdGhpczsgLy9jYWNoZVxyXG4vLyBcdGNvbnN0IHdpZHRoPSB0eXBlQ2FudmFzLndpZHRoO1xyXG4vLyBcdGNvbnN0IGhlaWdodCA9IHR5cGVDYW52YXMuaGVpZ2h0XHJcbi8vIFx0Ly8gY29uc3QgY29scyA9IE1hdGguZmxvb3Iod2lkdGggIC8gY2VsbCk7XHJcbi8vIFx0Ly8gY29uc3Qgcm93cyA9IE1hdGguZmxvb3IoaGVpZ2h0IC8gY2VsbCk7XHJcbi8vIFx0Y29uc3QgY29scyA9IHdpZHRoO1xyXG4vLyBcdGNvbnN0IHJvd3MgPSBoZWlnaHQ7XHJcbi8vIFx0Y29uc3QgbnVtQ2VsbHMgPSBjb2xzICogcm93c1xyXG4gIFxyXG4vLyAgICAgICAgIHR5cGVDb250ZXh0LmRyYXdJbWFnZSh2aWRlbywgMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcbi8vIFx0XHR2YXIgdHlwZURhdGEgPSB0eXBlQ29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgd2lkdGgsIGhlaWdodCkuZGF0YTtcclxuLy8gXHRcdC8vIGNvbnNvbGUubG9nKHR5cGVEYXRhKVxyXG4vLyBcdFx0Y29udGV4dC5maWxsU3R5bGUgPSAnYmxhY2snO1xyXG4vLyBcdFx0Y29udGV4dC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbi8vIFx0XHRjb250ZXh0LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xyXG4vLyBcdFx0Y29udGV4dC50ZXh0QWxpZ24gPSAnY2VudGVyJztcclxuXHJcbi8vIFx0XHQvLyBjb250ZXh0LmRyYXdJbWFnZSh0eXBlQ2FudmFzLCAwLCAwKTtcclxuLy8gXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ2VsbHM7IGkrKykge1xyXG5cclxuLy8gXHRcdFx0Y29uc3QgY29sID0gaSAlIGNvbHM7XHJcbi8vIFx0XHRcdGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoaSAvIGNvbHMpO1xyXG5cclxuLy8gXHRcdFx0Y29uc3QgeCA9IGNvbCpjZWxsO1xyXG4vLyBcdFx0XHRjb25zdCB5ID0gcm93KmNlbGw7XHJcblxyXG4vLyBcdFx0XHRjb25zdCByID0gdHlwZURhdGFbaSAqIDQgKyAwXTtcclxuLy8gXHRcdFx0Y29uc3QgZyA9IHR5cGVEYXRhW2kgKiA0ICsgMV07XHJcbi8vIFx0XHRcdGNvbnN0IGIgPSB0eXBlRGF0YVtpICogNCArIDJdO1xyXG4vLyBcdFx0XHRjb25zdCBhID0gdHlwZURhdGFbaSAqIDQgKyAzXTtcclxuLy8gXHRcdFx0Ly8gbGV0IG5ld0FnZW50ID0gbmV3IEFnZW50KHgsIHksJ3JnYignK3IrJywnK2crJywnK2IrJyknLCBjZWxsIClcclxuLy8gXHRcdFx0Ly8gY29uc29sZS5sb2cobmV3QWdlbnQpXHJcblxyXG4vLyBcdFx0XHRhZ2VudHMucHVzaChuZXcgQWdlbnQoeCwgeSwncmdiKCcrcisnLCcrZysnLCcrYisnKScsIGNlbGwgKSlcclxuLy8gXHRcdFx0Ly8gY29uc29sZS5sb2coYWdlbnRzKVxyXG4vLyBcdFx0XHQvLyBjb25zb2xlLmxvZyhBZ2VudClcclxuLy8gXHRcdFx0Ly8gY29uc29sZS5sb2coXCJhZ2VudFwiKVxyXG4vLyBcdFx0XHRhZ2VudFB1c2hlZCsrO1xyXG5cclxuLy8gXHRcdH1cclxuLy8gXHRcdGlmKGFnZW50UHVzaGVkPj1udW1DZWxscyl7XHJcblx0XHJcbi8vIFx0XHRcdFx0YWdlbnRzLmZvckVhY2goYWdlbnQ9PntcclxuXHJcbi8vIFx0XHRcdHN3aXRjaChzaGFwZSl7XHJcbi8vIGNhc2UgJ2NpcmNsZXMnOlxyXG4vLyBhZ2VudC5kcmF3KGNvbnRleHQpXHJcbi8vIGJyZWFrO1xyXG4vLyBjYXNlICdzcXVhcmVzJzpcclxuLy8gYWdlbnQuZHJhd1NxdWFyZShjb250ZXh0KVxyXG4vLyBicmVhaztcclxuLy8gY2FzZSAncnVtYnVzJzpcclxuLy8gYWdlbnQuZHJhd1J1bWJ1cyhjb250ZXh0KVxyXG4vLyBicmVhaztcclxuLy8gY2FzZSAnd29yZHMnOlxyXG4vLyBjb250ZXh0LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xyXG4vLyBjb250ZXh0LnRleHRBbGlnbiA9ICdjZW50ZXInO1xyXG4vLyBhZ2VudC5kcmF3VGV4dChjb250ZXh0KVxyXG4vLyB9XHJcblxyXG5cclxuXHJcblxyXG4vLyB9KVxyXG4vLyBcdH1cdFxyXG5cclxuLy8gfSwgNTAwKTtcclxuXHJcblxyXG4vLyBpZihjYW52YXMpe1xyXG4vLyBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2FudmFzQ2xpY2spO1xyXG4vLyBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGUpPT57XHJcbi8vIGNvbnNvbGUubG9nKCdtb2lzZW1vdmUnKVxyXG4vLyBtb3ZlUGl4bGVzKGUpXHJcbi8vIH0pXHJcbi8vIH1cclxuLy8gfVxyXG5cclxuXHJcblxyXG4vLyB2aWRlby5hZGRFdmVudExpc3RlbmVyKCdwbGF5JywgZnVuY3Rpb24gKCkge1xyXG5cclxuLy8gZ2VuZXJhdGVGaWx0ZXIodmlkZW8pO1xyXG5cclxuLy8gfSlcclxuXHJcbi8vIH1cclxuXHJcbi8vIH0pXHJcbi8vIGNvbnN0IGNhbnZhc0NsaWNrID0gKCk9PntcclxuLy8gY2xlYXJJbnRlcnZhbChtb3ZpZUludGVydmFsKVxyXG4vLyBjb25zb2xlLmxvZygnY2FudmFzIGNsaWNrJylcclxuLy8gaWYoZG90c21vdmU9PSdvZmYnKXtcclxuLy8gZG90c21vdmUgPSdvbidcclxuLy8gfVxyXG4vLyBlbHNle1xyXG4vLyBkb3RzbW92ZT1cIm9mZlwiXHJcbi8vIGdlbmVyYXRlRmlsdGVyKHZpZGVvKTtcclxuLy8gfVxyXG4vLyB9XHJcblxyXG5cclxuLy8gY29uc3QgdGljayA9ICgpID0+e1xyXG5cclxuLy8gaWYoYWdlbnRzLmxlbmd0aD4wJiZkb3RzbW92ZT09J29uJyl7XHJcbi8vIGZvcihsZXQgaSA9IDA7IGk8YWdlbnRzLmxlbmd0aDtpKyspe1xyXG4vLyBhZ2VudHNbaV0udXBkYXRlKClcclxuLy8gc3dpdGNoKHNoYXBlKXtcclxuLy8gY2FzZSAnY2lyY2xlcyc6XHJcbi8vIGFnZW50c1tpXS5kcmF3KGNvbnRleHQpXHJcbi8vIGJyZWFrO1xyXG4vLyBjYXNlICdzcXVhcmVzJzpcclxuLy8gYWdlbnRzW2ldLmRyYXdTcXVhcmUoY29udGV4dClcclxuLy8gYnJlYWs7XHJcbi8vIGNhc2UgJ3J1bWJ1cyc6XHJcbi8vIGFnZW50c1tpXS5kcmF3UnVtYnVzKGNvbnRleHQpXHJcbi8vIGJyZWFrO1xyXG4vLyBjYXNlICd3b3Jkcyc6XHJcbi8vIGNvbnRleHQuZmlsbFN0eWxlID0gJ2JsYWNrJztcclxuLy8gY29udGV4dC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcclxuLy8gY29udGV4dC50ZXh0QWxpZ24gPSAnY2VudGVyJztcclxuLy8gYWdlbnRzW2ldLmRyYXdUZXh0KGNvbnRleHQpXHJcbi8vIH1cclxuXHJcbi8vIGFnZW50c1tpXS5ib3VuY2UodmlkZW9XaWR0aCwgdmlkZW9IZWlnaHQpXHJcbi8vIH1cclxuLy8gfVxyXG4vLyAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGljaylcclxuLy8gICAgIG5vdyA9IERhdGUubm93KCk7XHJcbi8vICAgICBlbGFwc2VkID0gbm93IC0gdGhlbjtcclxuXHJcbi8vICAgICAvLyBpZiBlbm91Z2ggdGltZSBoYXMgZWxhcHNlZCwgZHJhdyB0aGUgbmV4dCBmcmFtZVxyXG5cclxuLy8gICAgIGlmIChlbGFwc2VkID4gZnBzSW50ZXJ2YWwpIHtcclxuXHJcbi8vICAgICAgICAgLy8gR2V0IHJlYWR5IGZvciBuZXh0IGZyYW1lIGJ5IHNldHRpbmcgdGhlbj1ub3csIGJ1dCBhbHNvIGFkanVzdCBmb3IgeW91clxyXG4vLyAgICAgICAgIC8vIHNwZWNpZmllZCBmcHNJbnRlcnZhbCBub3QgYmVpbmcgYSBtdWx0aXBsZSBvZiBSQUYncyBpbnRlcnZhbCAoMTYuN21zKVxyXG4vLyAgICAgICAgIHRoZW4gPSBub3cgLSAoZWxhcHNlZCAlIGZwc0ludGVydmFsKTsgICBcclxuLy8gfVxyXG4vLyB9XHJcbi8vIHN0YXJ0QW5pbWF0aW5nKDUpXHJcblxyXG5cclxuLy8gY29uc3Qgc2VsZWN0U2l6ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2l6ZVNlbGVjdCcpXHJcbi8vIC8vc2VsZWN0IHNpemVzIGZ1bmN0aW9uXHJcbi8vIGNvbnN0IGNoYW5nZVNpemU9IGZ1bmN0aW9uKCl7XHJcbi8vIGxldCBzaXplVmFsdWUgPSBwYXJzZUludChzZWxlY3RTaXplcy52YWx1ZSk7XHJcbi8vIGNvbnNvbGUubG9nKHNpemVWYWx1ZSk7XHJcbi8vIGNlbGw9c2l6ZVZhbHVlXHJcbi8vIFx0aWYgKCB2aWRlby5yZWFkeVN0YXRlID09PSA0ICkge1xyXG4vLyB2YXIgdmlkZW9XaWR0aCA9IHZpZGVvLnZpZGVvV2lkdGg7XHJcbi8vIHZhciB2aWRlb0hlaWdodCA9IHZpZGVvLnZpZGVvSGVpZ2h0O1xyXG4vLyAvLyBjb25zb2xlLmxvZyh2aWRlb0hlaWdodClcclxuLy8gdmFyIHR5cGVDYW52YXNIZWlnaHQgPSB2aWRlb0hlaWdodC9jZWxsO1xyXG4vLyB2YXIgdHlwZUNhbnZhc1dpZHRoID0gdmlkZW9XaWR0aC9jZWxsXHJcbi8vIC8vIGNvbnNvbGUubG9nKHR5cGVDYW52YXNIZWlnaHQpXHJcbi8vIC8vIGNvbnNvbGUubG9nKHR5cGVDYW52YXNXaWR0aClcclxuLy8gdHlwZUNhbnZhcy53aWR0aCA9IHR5cGVDYW52YXNXaWR0aDtcclxuLy8gdHlwZUNhbnZhcy5oZWlnaHQgPSB0eXBlQ2FudmFzSGVpZ2h0O1xyXG4vLyBjYW52YXMuaGVpZ2h0ID0gdmlkZW9IZWlnaHQ7XHJcbi8vIGNhbnZhcy53aWR0aD0gdmlkZW9XaWR0aDtcclxuLy8gY2xlYXJJbnRlcnZhbChtb3ZpZUludGVydmFsKTtcclxuLy8gZ2VuZXJhdGVGaWx0ZXIodmlkZW8pXHJcbi8vIFx0fVxyXG4vLyB9XHJcbi8vIHNlbGVjdFNpemVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpPT57Y2hhbmdlU2l6ZSgpfSlcclxuXHJcblxyXG4vLyBjb25zdCBzZWxlY3RGaWx0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyU2VsZWN0JylcclxuLy8gc2VsZWN0RmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpPT57Y2hhbmdlRmlsdGVyKCl9KVxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIGNoYW5nZUZpbHRlcigpe1xyXG4vLyBjb25zb2xlLmxvZyhzZWxlY3RGaWx0ZXIudmFsdWUpXHJcbi8vIHNoYXBlID0gc2VsZWN0RmlsdGVyLnZhbHVlO1xyXG4vLyB9XHJcblxyXG5cclxuXHJcblxyXG4vLyBjb25zdCBsb2FkVmlkZW89IGZ1bmN0aW9uKCl7XHJcbi8vIHZpZGVvICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWRlbycpO1xyXG4vLyBzd2l0Y2godmlkZW9DaG9pY2Upe1xyXG4vLyBjYXNlIFwidHJvaWthXCI6XHJcbi8vIHZpZGVvLnNyYyA9IHRyb2lrYVxyXG4vLyBicmVhaztcclxuLy8gY2FzZSBcInBlZGxlclwiOlxyXG4vLyB2aWRlby5zcmM9IGtvcm9cclxuLy8gfVxyXG4vLyB9XHJcblxyXG4vLyBsb2FkVmlkZW8oKVxyXG5cclxuLy8gY29uc3Qgc2VsZWN0VmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlkZW9TZWxlY3QnKVxyXG4vLyBmdW5jdGlvbiBjaGFuZ2VWaWRlbygpe1xyXG4vLyBjb25zb2xlLmxvZyhzZWxlY3RWaWRlby52YWx1ZSlcclxuLy8gdmlkZW9DaG9pY2U9c2VsZWN0VmlkZW8udmFsdWU7XHJcbi8vIGxvYWRWaWRlbygpXHJcbi8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFxyXG5cclxuLy8gaWYgKCB2aWRlby5yZWFkeVN0YXRlID09PSA0ICl7XHJcbi8vIHZhciB2aWRlb1dpZHRoID0gdmlkZW8udmlkZW9XaWR0aDtcclxuLy8gdmFyIHZpZGVvSGVpZ2h0ID0gdmlkZW8udmlkZW9IZWlnaHQ7XHJcbi8vIC8vIGNvbnNvbGUubG9nKHZpZGVvSGVpZ2h0KVxyXG4vLyB2YXIgdHlwZUNhbnZhc0hlaWdodCA9IHZpZGVvSGVpZ2h0L2NlbGw7XHJcbi8vIHZhciB0eXBlQ2FudmFzV2lkdGggPSB2aWRlb1dpZHRoL2NlbGxcclxuLy8gLy8gY29uc29sZS5sb2codHlwZUNhbnZhc0hlaWdodClcclxuLy8gLy8gY29uc29sZS5sb2codHlwZUNhbnZhc1dpZHRoKVxyXG4vLyB0eXBlQ2FudmFzLndpZHRoID0gdHlwZUNhbnZhc1dpZHRoO1xyXG4vLyB0eXBlQ2FudmFzLmhlaWdodCA9IHR5cGVDYW52YXNIZWlnaHQ7XHJcbi8vIGNhbnZhcy5oZWlnaHQgPSB2aWRlb0hlaWdodDtcclxuLy8gY2FudmFzLndpZHRoPSB2aWRlb1dpZHRoO1xyXG4vLyBjbGVhckludGVydmFsKG1vdmllSW50ZXJ2YWwpO1xyXG4vLyBnZW5lcmF0ZUZpbHRlcih2aWRlbylcclxuLy8gfVxyXG4vLyB9LCA1MCk7XHJcbi8vIH1cclxuLy8gc2VsZWN0VmlkZW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCk9PntjaGFuZ2VWaWRlbygpfSlcclxuXHJcbi8vIC8vIHNlbGVjdFZpZGVvcy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBsb2FkVmlkZW8oKSlcclxuXHJcbi8vIGNvbnN0IHdvcmRzSW5wdXRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0V29yZHNGb3JtJylcclxuLy8gY29uc3Qgd29yZHNJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dFdvcmRzJylcclxuXHJcbi8vIHdvcmRzSW5wdXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsKGUpPT57XHJcbi8vIGUucHJldmVudERlZmF1bHQoKTtcclxuLy8gZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbi8vIGFkZFdvcmRzKCl9KVxyXG5cclxuLy8gZnVuY3Rpb24gYWRkV29yZHMoKXtcclxuLy8gdmFyIHdvcmQgPSB3b3Jkc0lucHV0LnZhbHVlO1xyXG4vLyBjb25zb2xlLmxvZyh3b3Jkc0lucHV0LnZhbHVlKVxyXG4vLyBpZih3b3JkLmxlbmd0aDwyMCl7XHJcbi8vIGlucHV0U3RyaW5ncy5wdXNoKHdvcmQpXHJcbi8vIGdseXBocz1nbHlwaHMuY29uY2F0KGlucHV0U3RyaW5ncylcclxuLy8gY29uc29sZS5sb2coZ2x5cGhzKVxyXG4vLyB9O1xyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBtb3ZlUGl4bGVzPShlKT0+e1xyXG4vLyBtb3VzZVBvcyA9IGdldE1vdXNlUG9zKGNhbnZhcywgZSlcclxuXHJcbi8vIGZvciAobGV0IGkgPSAwOyBpIDwgYWdlbnRzLmxlbmd0aDsgaSsrKSB7XHJcbi8vIFx0Y29uc3QgYWdlbnQgPSBhZ2VudHNbaV07XHJcbi8vIGNvbnN0IGRpc3QgPSBhZ2VudC5nZXREaXN0YW5jZShtb3VzZVBvcyk7XHJcbi8vIFx0aWYgKGRpc3QgPiAyMDApIGNvbnRpbnVlO1xyXG4vLyBcdFx0YWdlbnQubW92ZUJpdCgpXHJcbi8vIFx0XHR9XHRcclxuXHJcblxyXG5cclxuLy8gfVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=