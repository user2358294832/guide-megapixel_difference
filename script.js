document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-container');

    
    const slideWidth = window.innerWidth; 

    document.addEventListener('keydown', (e) => {
        
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            e.preventDefault(); 
        }

        if (e.key === 'ArrowRight') {
            carousel.scrollLeft += slideWidth;
        } 
        else if (e.key === 'ArrowLeft') {
            carousel.scrollLeft -= slideWidth;
        }
    });
});
