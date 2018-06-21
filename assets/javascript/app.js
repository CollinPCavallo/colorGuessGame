var colors = [
    'rgb(255, 0, 0)',
    'rgb(255, 255, 0)',
    'rgb(0, 255, 0)',
    'rgb(0, 255, 255)',
    'rgb(0, 0, 255)',
    'rgb(255, 0, 255)',
];
var colorDisplay = document.getElementById('colorDisplay');
var squares = document.querySelectorAll('.square');
var goalColor = colors[3];

colorDisplay.textContent = goalColor;


for (let i = 0; i < squares.length; i++) {
    // Add Colors to Squares
    squares[i].style.backgroundColor = colors[i];
    //Add Click Listener to squares
    squares[i].addEventListener('click', function() {
        var clickedColor = this.style.backgroundColor
        if (clickedColor === goalColor) {
            alert('correct')
        } else {
            alert('wrong')
        }
    })

}

