document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.product-image');

    images.forEach(image => {
        image.addEventListener('mouseover', function() {
            image.style.transform = 'scale(1.1)';
        });

        image.addEventListener('mouseout', function() {
            image.style.transform = 'scale(1)';
        });
    });
});
