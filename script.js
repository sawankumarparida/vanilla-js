// 1. Define the function
async function getTask() {
    // 2. The "Call" - asking the server for task #1
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    
    // 3. The "Translation" - turning raw data into a JS Object
    const task = await response.json();
    
    // 4. The "Action" - showing the title on your website
    console.log(task); // Look at your browser console (F12) to see the data!
    document.querySelector('#number').innerText = task.title;
}

// 5. Run it
getTask();