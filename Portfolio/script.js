const pages = document.querySelectorAll('.page');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    pages.forEach((page, index) => {
        const pageTop = page.offsetTop;
        const pageHeight = page.offsetHeight;

        if(scrollY + windowHeight > pageTop + pageHeight / 4) {
            page.style.opacity = 1;
            page.style.transform = 'translateY(0)';
            page.style.transition = `all 1s ease ${index * 0.3}s`;
        } else {
            page.style.opacity = 0;
            page.style.transform = 'translateY(50px)';
        }
    });
});
