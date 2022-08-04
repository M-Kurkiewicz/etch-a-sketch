var containers = [];
var body = document.querySelector('body');
var numberOfRows = 16;
var boxHeight = 500 / numberOfRows;

// CREATING THE LAYOUT \\
var button = document.createElement('button')
button.textContent = "Change number of squares per side"
var whole = document.createElement('div');
whole.classList.add('whole');

for (var i = 0; i<numberOfRows; i++) {
    const container = document.createElement('div');
    container.classList.add('container');
    containers.push(container);
}
for(var t = 0; t <numberOfRows; t++) {
    for(var i = 0; i < numberOfRows; i++){
        let newDiv = document.createElement('div');
        newDiv.classList.add('box');
        newDiv.style.width = boxHeight + 'px';
        newDiv.style.height = boxHeight + 'px';
        containers[i].appendChild(newDiv);
    }
}

for(const container of containers) {
    whole.appendChild(container);
}
body.appendChild(button)
body.appendChild(whole);
// CREATING THE LAYOUT \\

// CREATING THE LOGIC \\
var colorBox = document.querySelectorAll(".box")


for(const element of colorBox) {
    element.addEventListener('mouseover', function() {
        element.style.backgroundColor = "white"
    })
}
