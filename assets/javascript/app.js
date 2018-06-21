var numOfSquares = 6
var colors = generatRandomColors(numOfSquares)

var colorDisplay = document.getElementById('colorDisplay')
var h1 = document.querySelector('h1')
var messageDisplay = document.querySelector('#message')
var easyBtn = document.querySelector('#easyBtn')
var hardBtn = document.querySelector('#hardBtn')
var resetBtn = document.querySelector('#reset')
var squares = document.querySelectorAll('.square')
var pickedColor = pickColor()

easyBtn.addEventListener('click', function () {
  numOfSquares = 3
  easyBtn.classList.add('selectedBtn')
  hardBtn.classList.remove('selectedBtn')
  colors = generatRandomColors(numOfSquares)
  pickedColor = pickColor()
  colorDisplay.textContent = pickedColor
  h1.style.backgroundColor = 'steelblue'
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i]
    } else {
      squares[i].style.display = 'none'
    }
  }
})

hardBtn.addEventListener('click', function () {
  numOfSquares = 6
  hardBtn.classList.add('selectedBtn')
  easyBtn.classList.remove('selectedBtn')
  colors = generatRandomColors(numOfSquares)
  pickedColor = pickColor()
  colorDisplay.textContent = pickedColor
  h1.style.backgroundColor = 'steelblue'
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i]
      squares[i].style.display = 'block'
    }
  }
})

resetBtn.addEventListener('click', function () {
  // generate all new colors
  colors = generatRandomColors(numOfSquares)
  // pick new random color from arr
  pickedColor = pickColor()
  // change color display to match pickedColor
  colorDisplay.textContent = pickedColor
  // change colors of squares
  squareColors()
  h1.style.backgroundColor = 'steelblue'
  resetBtn.textContent = 'New Colors'
  messageDisplay.textContent = ''
})

colorDisplay.textContent = pickedColor

squareColors()

function squareColors () { for (let i = 0; i < squares.length; i++) {
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
