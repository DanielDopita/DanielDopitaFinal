document.addEventListener('DOMContentLoaded', function() {
    // For educational purposes, using a static list of popular games
    const popularGamesData = [
        'game1.jfif',
        'game2.jfif',
        'game3.jfif',
    ];

    const popularGamesSection = document.getElementById('popularGames');

    // Populate the popular games carousel
    popularGamesData.forEach(imageSrc => {
        const slide = document.createElement('div');
        slide.classList.add('carousel-slide');

        const image = document.createElement('img');
        image.src = imageSrc;
        image.alt = 'Popular Game Image';

        slide.appendChild(image);
        popularGamesSection.appendChild(slide);
    });

    // Initialize the carousel
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Change slide every 3 seconds (adjust as needed)
    setInterval(nextSlide, 3000);

    // Show the initial slide
    showSlide(currentSlide);
});

