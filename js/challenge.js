document.addEventListener('DOMContentLoaded', () => {
    let intervalID = setInterval(function timer() {
        const counter = document.querySelector('#counter');
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

    document.querySelector('#heart').addEventListener('click', (event) => {
        event.preventDefault();
        const counter = document.querySelector('#counter').textContent;
        const likes = document.querySelector('.likes');
        let existingLike = document.querySelector(`.like[data-num="${counter}"]`);

        if (existingLike) {
            let likeCount = existingLike.querySelector('.like-count');
            likeCount.textContent = parseInt(likeCount.textContent) + 1;
        } else {
            let newLike = document.createElement('li');
            newLike.className = 'like';
            newLike.dataset.num = counter;
            newLike.innerHTML = `Number ${counter} has been liked <span class="like-count">1</span> time(s)`;
            likes.appendChild(newLike);
        }
    });

    let isPaused = false;

    document.querySelector('#pause').addEventListener('click', (event) => {
        event.preventDefault();
        const pauseButton = document.querySelector('#pause');
        const buttons = document.querySelectorAll('button');

        if (!isPaused) {
            clearInterval(intervalID);
            pauseButton.textContent = 'resume';
            buttons.forEach(button => {
                if (button.id !== 'pause') button.disabled = true;
            });
        } else {
            intervalID = setInterval(function timer() {
                const counter = document.querySelector('#counter');
                counter.textContent = parseInt(counter.textContent) + 1;
            }, 1000);
            pauseButton.textContent = 'pause';
            buttons.forEach(button => {
                if (button.id !== 'pause') button.disabled = false;
            });
        }

        isPaused = !isPaused;
    });

    document.querySelector('#comment-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const commentInput = document.querySelector('#comment-input');
        const commentList = document.querySelector('#list');

        if (commentInput.value !== '') {
            const newComment = document.createElement('p');
            newComment.textContent = commentInput.value;
            commentList.appendChild(newComment);
            commentInput.value = '';
        }
    });
});