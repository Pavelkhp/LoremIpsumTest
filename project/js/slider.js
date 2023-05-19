const slider = document.querySelector('.slider');
const ball = document.querySelector('.slider__ball');
const percentage = document.querySelector('.percentage');

let isDragging = false;

ball.addEventListener('mousedown', () => {
    isDragging = true;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

slider.addEventListener('mousemove', (event) => {
    if (isDragging) {
        const sliderWidth = slider.clientWidth;
        const positionX = event.pageX - slider.getBoundingClientRect().left;
        const percentageValue = Math.round((positionX / sliderWidth) * 100);

        const minPosition = ball.offsetWidth / 2;
        const maxPosition = sliderWidth - ball.offsetWidth / 2;
        const ballPositionX = Math.max(minPosition, Math.min(positionX, maxPosition));

        ball.style.left = `${ballPositionX}px`;
        percentage.textContent = `${percentageValue}%`;
    }
});