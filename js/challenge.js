
const intervalID = setInterval(function timer() {
    const counter = document.querySelector('#counter')
    console.log(counter)
    counter.textContent = parseInt(counter.textContent) + 1
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

let pauseButtonDefault = true

document.querySelector('#pause').addEventListener('click', (event) => {
    if (pauseButtonDefault === true) {
        event.preventDefault();
        clearInterval(intervalID);
        pause.textContent = 'resume'
    }
    else {}
    
});