const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');
const capsLock = document.querySelector('.capital');
const deleteButton = document.querySelector('.delete');
const spaceButton = document.querySelector('.space');
const searchButton = document.querySelector('.search');
const languageButton = document.querySelector('.language');
const radioButton = document.querySelector('.radio');
const numberButton = document.querySelector('.number');

let isCapsLock = false;
let isNumberMode = false;

const alphabetKeysRow1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
const alphabetKeysRow2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
const alphabetKeysRow3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

const numberKeysRow1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const symbolKeysRow2 = ['@', '#', '$', '%', '&', '-', '+', '(', ')'];
const symbolKeysRow3 = ['*', '"', '\'', ':', ';', '!', '?'];

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const text = isCapsLock ? button.textContent.toUpperCase() : button.textContent;
        display.textContent += text;
    });
});

capsLock.addEventListener('click', () => {
    isCapsLock = !isCapsLock;
    toggleCapsLock();
    capsLock.style.backgroundColor = isCapsLock ? '#f40057' : ''; // Optional visual feedback
});

deleteButton.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0, -1);
});

spaceButton.addEventListener('click', () => {
    display.textContent += ' ';
});

searchButton.addEventListener('click', () => {
    alert('Search button has no functionality.');
});

languageButton.addEventListener('click', () => {
    alert('Language button has no functionality.');
});

radioButton.addEventListener('click', () => {
    alert('Radio button has no functionality.');
});

numberButton.addEventListener('click', () => {
    isNumberMode = !isNumberMode;
    numberButton.textContent = isNumberMode ? 'ABC' : '123';
    toggleNumberMode();
});

function toggleCapsLock() {
    buttons.forEach(button => {
        if (!isNumberMode) {
            button.textContent = isCapsLock ? button.textContent.toUpperCase() : button.textContent.toLowerCase();
        }
    });
}

function toggleNumberMode() {
    const row1Buttons = document.querySelectorAll('.row1 .button');
    const row2Buttons = document.querySelectorAll('.row2 .button');
    const row3Buttons = document.querySelectorAll('.row3 .button:not(.capital):not(.delete)');

    row1Buttons.forEach((button, index) => {
        button.textContent = isNumberMode ? numberKeysRow1[index] : alphabetKeysRow1[index];
    });

    row2Buttons.forEach((button, index) => {
        button.textContent = isNumberMode ? symbolKeysRow2[index] : alphabetKeysRow2[index];
    });

    row3Buttons.forEach((button, index) => {
        button.textContent = isNumberMode ? symbolKeysRow3[index] : alphabetKeysRow3[index];
    });
}