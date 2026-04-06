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

const toggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// 1. Check for saved theme on load
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleBtn.textContent = "Switch to Light Mode";
    }
}

// 2. Add click event
toggleBtn.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        toggleBtn.textContent = "Switch to Dark Mode";
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleBtn.textContent = "Switch to Light Mode";
        localStorage.setItem('theme', 'dark');
    }
});