const bigContainer = document.querySelector('#container');

function getRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}


function drawSquare() {
    const div = document.createElement('div');
    div.classList.add('square');

    bigContainer.appendChild(div);

    div.addEventListener('mouseover', function() {
        div.style.backgroundColor = getRandomColor();
    });

}

for (let i = 0; i < 256; i++) {
    drawSquare();
}

const button = document.getElementById('sizeButton');


button.addEventListener('click', () => {
    const userInput = prompt("resize container", "1-100");
});