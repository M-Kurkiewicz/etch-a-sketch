var body = document.querySelector('body');
// CREATING THE LAYOUT \\
var button = document.createElement('button');
button.textContent = "Change number of squares per side";

function generateLayout(numberOfRows) {
    var boxHeight = 500 / numberOfRows;
    var whole = document.createElement('div');
    whole.classList.add('whole');
    let containers = [];
    
    for (let i = 0; i<numberOfRows; i++) {
        let container = document.createElement('div');
        container.classList.add('container');
        containers.push(container);
    }
    for(let t = 0; t <numberOfRows; t++) {
        for(let i = 0; i < numberOfRows; i++){
            let newDiv = document.createElement('div');
            newDiv.classList.add('box');
            newDiv.style.width = boxHeight + 'px';
            newDiv.style.height = boxHeight + 'px';
            containers[i].appendChild(newDiv);
        }
    }
    
    for(let container of containers) {
        whole.appendChild(container);
    }
    body.appendChild(whole);
}
body.appendChild(button)
generateLayout(16)
// CREATING THE LAYOUT \\

// CREATING THE LOGIC \\
var colorBox = document.querySelectorAll(".box")

function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; // 0-1 * 16777215
    randomNumber = Math.floor(randomNumber); // 2819349,1383 => 2819349
    randomNumber = randomNumber.toString(16); // 2819349 => 2B0515
    let randColor = randomNumber.padStart(6, 0); // 2B0515 => 2B0515(6 znaków | 0 - dopełnienie)
    return `#${randColor.toUpperCase()}` // 2B0515 => #2B0515
}

for(const element of colorBox) {
    element.addEventListener('mouseover', function() {
        element.style.backgroundColor = generateRandomColor()
    })
}
// CREATING THE LOGIC \\

// CREATING THE LOGIC FOR BUTTON \\
function changeLayout(){
    document.querySelector('.whole').remove()
    let numberOfColumns = prompt("How many rows and columns?: ")
    generateLayout(numberOfColumns)
    var colorBox = document.querySelectorAll(".box")
    for(const element of colorBox) {
        element.addEventListener('mouseover', function() {
            element.style.backgroundColor = generateRandomColor()
        })

}
}

button.addEventListener('click', changeLayout)