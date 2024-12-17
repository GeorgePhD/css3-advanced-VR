document.addEventListener('DOMContentLoaded', () => {

    let marquee = (selector, speed) => {
        const list = document.querySelector(selector);
        if (!list) return; // Exit if the selector is invalid

        let position = 0;

        const animate = () => {
            position += speed; // Move based on the speed
            if (position > list.scrollWidth) {
                position = 0; // Reset position when it reaches the end
            }

            list.style.transform = `translateX(-${position}px)`; // Smooth translation
            requestAnimationFrame(animate); // Use requestAnimationFrame for smooth animation
        };

        animate(); // Start the animation
    };

    marquee(".marquee__list", 0.5); // Call marquee function with selector and speed
});
