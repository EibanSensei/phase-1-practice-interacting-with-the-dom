let intervalID = setInterval(function timer() {
    const counter = document.querySelector('#counter');
    console.log(counter);
    counter.textContent = parseInt(counter.textContent) + 1;
}, 1000);

document.querySelector('#minus').addEventListener('click', (event) => {
    event.preventDefault();
    const counter = document.querySelector('#counter');
    counter.textContent = parseInt(counter.textContent) - 1;
});

document.querySelector('#plus').addEventListener('click', (event) => {
    event.preventDefault();
    const counter = document.querySelector('#counter');
    counter.textContent = parseInt(counter.textContent) + 1;
});

let isPaused = false;

document.querySelector('#pause').addEventListener('click', (event) => {
    event.preventDefault();
    const pauseButton = document.querySelector('#pause');
    
    if (!isPaused) {
        // Pause the interval
        clearInterval(intervalID);
        pauseButton.textContent = 'resume';
    } else {
        // Resume the interval
        intervalID = setInterval(function timer() {
            const counter = document.querySelector('#counter');
            counter.textContent = parseInt(counter.textContent) + 1;
        }, 1000);
        pauseButton.textContent = 'pause';
    }

    // Toggle the pause state
    isPaused = !isPaused;
});