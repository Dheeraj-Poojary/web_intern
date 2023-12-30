document.addEventListener('DOMContentLoaded', function () {
    const images = [
         // Replace with your image paths
'm1-removebg-preview.png',

    ];
    let currentIndex = 0;
    const imageContainer = document.querySelector('.image-container');

    function showImage(index) {
        const offset = -index * 100; // Calculate the offset based on the index
        imageContainer.style.transform = `translateX(${offset}%)`;
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    document.querySelector('.right-arrow').addEventListener('click', nextImage);
    document.querySelector('.left-arrow').addEventListener('click', prevImage);

    // Initialize with the first image
    images.forEach((imagePath) => {
        const image = document.createElement('div');
        image.classList.add('product-image');
        image.style.backgroundImage = `url('${imagePath}')`;
        imageContainer.appendChild(image);
    });

    showImage(currentIndex);
});
