/**
 * SECTION 1: TASK GENERATOR LOGIC
 */
const btn = document.querySelector('#fetch-btn');
const display = document.querySelector('#task-display');

const myTasks = [
    "Finish MBA Assignment",
    "Practice Vanilla JS",
    "Update HR LinkedIn Profile",
    "Check Business Analytics Data"
];

// Listener for the Task Button
if (btn && display) {
    btn.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * myTasks.length);
        const randomTask = myTasks[randomIndex];
        
        display.innerText = randomTask;
        
        // We use a CSS class or variable for color instead of hardcoding "green"
        // so it looks good in both light and dark modes!
        display.style.color = "var(--accent-color)";
    });
}

/**
 * SECTION 2: THEME TOGGLE LOGIC
 */
const toggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Helper function to update UI based on theme
const updateThemeUI = (theme) => {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (toggleBtn) {
        toggleBtn.textContent = theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode";
    }
};

// 1. Initial Load: Check for saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
updateThemeUI(savedTheme);

// 2. Click Event: Toggle between themes
if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        updateThemeUI(newTheme);
    });
}