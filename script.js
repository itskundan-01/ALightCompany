let currentSlideIndex = {
    'product-type': 0,
    'pattern-design': 0,
    'watts-capacity': 0
};

let selections = {
    'product-type': null,
    'pattern-design': null,
    'watts-capacity': null
};

function showSlide(sliderId, index) {
    const slides = document.querySelectorAll(`#${sliderId} .slide`);
    if (index >= slides.length) {
        currentSlideIndex[sliderId] = 0;
    } else if (index < 0) {
        currentSlideIndex[sliderId] = slides.length - 1;
    } else {
        currentSlideIndex[sliderId] = index;
    }
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${currentSlideIndex[sliderId] * 100}%)`;
        slide.classList.remove('selected');
        if (i === currentSlideIndex[sliderId]) {
            slide.classList.add('selected');
            selections[sliderId] = slide.querySelector('p').innerText;
        }
    });
}

function nextSlide(sliderId) {
    showSlide(sliderId, currentSlideIndex[sliderId] + 1);
}

function prevSlide(sliderId) {
    showSlide(sliderId, currentSlideIndex[sliderId] - 1);
}

function selectOption(sliderId, value) {
    const slides = document.querySelectorAll(`#${sliderId} .slide`);
    slides.forEach((slide, index) => {
        if (slide.querySelector('p').innerText === value) {
            showSlide(sliderId, index);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide('product-type', 0);
    showSlide('pattern-design', 0);
    showSlide('watts-capacity', 0);

    const form = document.getElementById('customize-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent page reload

        // Collect selections
        const productType = selections['product-type'] || 'Not selected';
        const patternDesign = selections['pattern-design'] || 'Not selected';
        const wattsCapacity = selections['watts-capacity'] || 'Not selected';

        // Handle the form data as needed
        // For demonstration, we'll just show an alert
        alert(`Your Request:\nProduct Type: ${productType}\nPattern/Design: ${patternDesign}\nWatts/Capacity: ${wattsCapacity}`);
        
        // Optionally, reset the form
        form.reset();
        selections = {
            'product-type': null,
            'pattern-design': null,
            'watts-capacity': null
        };
        
        // Reset slides to first slide
        showSlide('product-type', 0);
        showSlide('pattern-design', 0);
        showSlide('watts-capacity', 0);
    });
});