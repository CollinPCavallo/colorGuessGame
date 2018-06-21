var numOfSquares = 6
var colors = []
var pickedColor

var colorDisplay = document.getElementById('colorDisplay')
var h1 = document.querySelector('h1')
var messageDisplay = document.querySelector('#message')
var resetBtn = document.querySelector('#reset')
var modeBtns = document.querySelectorAll('.mode')
var squares = document.querySelectorAll('.square')

init()

function init () {
  modeBtnListen()
  setupSquares()
  reset()
}

function modeBtnListen () {
  for (var i = 0; i < modeBtns.length; i++) {
    modeBtns[i].addEventListener('click', function () {
      modeBtns[0].classList.remove('selectedBtn')
      modeBtns[1].classList.remove('selectedBtn')
      this.classList.add('selectedBtn')
      console.log(this.textContent)
      this.textContent === 'Easy' ? numOfSquares = 3 : numOfSquares = 6

      reset()
    })
  }
}
function reset () {
  // generate all new colors
  colors = generatRandomColors(numOfSquares)
  // pick new random color from arr
  pickedColor = pickColor()
  // change color display to match pickedColor
  colorDisplay.textContent = pickedColor
  resetBtn.textContent = 'New Colors'
  messageDisplay.textContent = ''
  // change colors of squares
  setupSquares()
  h1.style.backgroundColor = 'steelblue'
}

resetBtn.addEventListener('click', function () {
  reset()
})

function setupSquares () { for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = 'block'
      squares[i].style.backgroundColor = colors[i]
    } else {
      squares[i].style.display = 'none'
    }
    // Add Colors to Squares
    squares[i].style.backgroundColor = colors[i]
    // Add Click Listener to squares
    squares[i].addEventListener('click', function () {
      // grab color of clicked square
      var clickedColor = this.style.backgroundColor
      // compare to correct color
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = 'Correct'
        changeColors(clickedColor)
        h1.style.backgroundColor = clickedColor
        resetBtn.textContent = 'Play Again?'
      } else {
        this.style.backgroundColor = '#232323'
        messageDisplay.textContent = 'Try Again'
      }
    })
  }
}
// function to change all squares to pickedColor
function changeColors (color) {
  // loop through all squares
  for (let i = 0; i < squares.length; i++) {
    // change each color to match given color
    squares[i].style.backgroundColor = color
  }
}

// function to pick random correct color
function pickColor () {
  var randomNum = Math.floor(Math.random() * colors.length)
  return colors[randomNum]
}

function generatRandomColors (num) {
  // make array
  var arr = []
  // repeat num times
  for (var i = 0; i < num; i++) {
    // get random color and push into arr
    arr.push(randomColor())
  }
  // return arr
  console.log(arr)
  return arr
}
function randomColor () {
  // pick a "red" from 0 -255
  var r = Math.floor(Math.random() * 256)
  // pick a "green" from 0 -255
  var g = Math.floor(Math.random() * 256)
  // pick a "blue" from 0 -255
  var b = Math.floor(Math.random() * 256)
  return `rgb(${r}, ${g}, ${b})`
}
