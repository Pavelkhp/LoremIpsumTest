window.addEventListener('scroll', () => {
    const stickyHeader = document.getElementById('sticky-header');
    const content = document.getElementById('content');
    const scroll = window.pageYOffset || document.documentElement.scrollTop;

    if (scroll >= 50) {
        stickyHeader.classList.add('sticky-header-active');
        content.classList.add('sticky-header-active');
    } else {
        stickyHeader.classList.remove('sticky-header-active');
        content.classList.remove('sticky-header-active');
    }
});