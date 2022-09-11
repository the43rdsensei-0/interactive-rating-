let button = 0;

const btn = document.querySelectorAll('.ratings-btn');

btn.forEach((ratings) => {
    ratings.addEventListener('click', () => {
        button = ratings.textContent;
        console.log(button);
    })
});

const span = document.querySelector('.num');



const showModal = document.querySelector('.submit');
const error = document.querySelector('.errror')

showModal.addEventListener('click', () => {
    if (button) {
        span.innerHTML = button;
        showModal.parentElement.parentElement.nextElementSibling.classList.remove('hidden');
    }
    else {
        showModal.nextElementSibling.innerHTML = 'Are you dumb? select a number joor!';
    }
})



