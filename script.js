const bigContainer = document.querySelector('#container');

function drawSquare() {
    const div = document.createElement('div');
    div.classList.add('square');

    bigContainer.appendChild(div);
}

for (let i = 0; i < 256; i++) {
    drawSquare();
}
