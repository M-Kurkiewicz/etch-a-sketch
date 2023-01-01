var body = document.querySelector("body");
var slider = document.createElement('input');
var sliderValue = document.createElement('div');
var changeButton = document.createElement("button");

slider.type = 'range';
slider.min = '2';
slider.max = '50';
slider.value = '10';
slider.classList.add('slider');
slider.id = 'range';
body.appendChild(slider);
sliderValue.id = 'sliderValue';
body.appendChild(sliderValue);
changeButton.textContent = "CHANGE";
changeButton.classList.add('button');
changeButton.id = 'button';
body.appendChild(changeButton)

function generateLayout(numberOfRows) {
    var panel = document.createElement('div');
    panel.classList.add('panel');
    // Creating rows with boxes
    for(let r = 0; r<numberOfRows; r++) {
        var row = document.createElement('div');
        row.classList.add('row');
        row.style.height = 500 / numberOfRows + 'px';
        row.style.width = '500px';
        row.style.display = 'flex';
        for (let i = 0;i<numberOfRows;i++){
            var box = document.createElement('div');
            box.classList.add('box');
            box.style.height = row.style.height;
            box.style.width = 500 / numberOfRows + 'px';
            box.style.background = 'black';
            row.appendChild(box);
        }
        panel.appendChild(row);
    }
    body.appendChild(panel);
    changeColors();
}
generateLayout(10);

function randomColor(){
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}
function changeColors(){
    const boxes = document.querySelectorAll('.box');
    for(const box of boxes){
    box.addEventListener('mouseover', function(){
        box.style.backgroundColor = randomColor();
        box.style.opacity = 1;
    })
}
}

function changeLayout(){
    document.querySelector('.panel').remove();
    generateLayout(slider.value);
    changeColors();
}


sliderValue.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  sliderValue.innerHTML = this.value;
}

changeButton.addEventListener('click', changeLayout);