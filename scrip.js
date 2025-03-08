
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".hidden");

    const observerOptions = {
        threshold: 0.2
    };

    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    }, observerOptions);

    elements.forEach(element => {
        revealOnScroll.observe(element);
    });
});