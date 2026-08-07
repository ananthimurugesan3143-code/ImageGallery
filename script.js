const galleryImages = document.querySelectorAll(".gallery img");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const filterButtons = document.querySelectorAll(".filter-btn");

let currentIndex = 0;

galleryImages.forEach(function(image, index) {
    image.addEventListener("click", function() {
        currentIndex = index;
        lightbox.style.display = "flex";
        lightboxImg.src = image.src;
    });
});

nextBtn.addEventListener("click", function() {
    currentIndex++;

    if (currentIndex >= galleryImages.length) {
        currentIndex = 0;
    }

    lightboxImg.src = galleryImages[currentIndex].src;
});

prevBtn.addEventListener("click", function() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = galleryImages.length - 1;
    }

    lightboxImg.src = galleryImages[currentIndex].src;
});

closeBtn.addEventListener("click", function() {
    lightbox.style.display = "none";
});

filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const filter = button.getAttribute("data-filter");

        galleryImages.forEach(function(image) {
            const category = image.getAttribute("data-category");

            if (filter === "all" || category === filter) {
                image.style.display = "block";
            } else {
                image.style.display = "none";
            }
        });

        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");
    });
});