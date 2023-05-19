const buttonElement = document.querySelector('.dropdown__button');
const optionsElement = document.querySelector('.dropdown__options');
const optionElements = document.querySelectorAll('.dropdown__option');

buttonElement.addEventListener('click', () => {
    optionsElement.classList.toggle('show');
});

optionElements.forEach((option) => {
    option.addEventListener('click', () => {
        buttonElement.textContent = option.textContent;
        optionsElement.classList.remove('show');
    });
});