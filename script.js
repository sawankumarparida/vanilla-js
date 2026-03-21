// 1. Select the elements
const display = document.querySelector('#number');
const button = document.querySelector('#incrementBtn');

// 2. Set a starting piece of data
let count = 0;

// 3. Listen for a click and change the data
button.addEventListener('click', () => {
    count = count + 1;
    display.innerText = count; // Update the screen
});