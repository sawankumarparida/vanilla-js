// 1. Grab the elements from the HTML
const btn = document.querySelector('#fetch-btn');
const display = document.querySelector('#task-display');

// 2. Create a local list of data (an Array)
const myTasks = [
    "Finish MBA Assignment",
    "Practice Vanilla JS",
    "Update HR LinkedIn Profile",
    "Check Business Analytics Data"
];

// 3. Make the button do something
btn.addEventListener('click', () => {
    // Pick a random task from our list above
    const randomIndex = Math.floor(Math.random() * myTasks.length);
    const randomTask = myTasks[randomIndex];
    
    // Change the text on the screen
    display.innerText = randomTask;
    
    // Change the color so we know it worked!
    display.style.color = "green";
});