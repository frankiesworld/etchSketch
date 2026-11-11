const bigContainer = document.querySelector('#container');

function getRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}


function drawSquare(size) {
    const div = document.createElement('div');
    div.classList.add('square');

    bigContainer.appendChild(div);

    div.style.width = `${800 / size}px`;
    div.style.height = `${800 / size}px`;

    div.addEventListener('mouseover', function() {
        div.style.backgroundColor = getRandomColor();
    });

}


function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        drawSquare(size);
    };
}    

createGrid(16);

const button = document.getElementById('sizeButton');

button.addEventListener('click', () => {
    const userInput = prompt("resize container", "1-100");
    const sizeData = parseInt(userInput);
    console.log(sizeData);

    if (userInput === null) {
        alert("You didn't enter a number");
    } else if (isNaN(sizeData)) {
        alert("You didn't enter a number");
    } else if (sizeData < 1 || sizeData > 100) {
        alert("You didn't enter a number between 1 and 100");
    } else {
        bigContainer.innerHTML = '';
        createGrid(sizeData);
    }
});