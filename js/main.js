const applyParallax = () => {
    const scrollPosition = window.pageYOffset || 0;

    document.querySelectorAll('.parallax').forEach((element) => {
        const speed = parseFloat(element.dataset.speed || '0');
        const yPos = -(scrollPosition * speed);
        element.style.setProperty('--parallax-offset', `${yPos}px`);
    });

    document.querySelectorAll('.cloud').forEach((cloud, index) => {
        const speed = (index + 1) * 0.05;
        const yPos = -(scrollPosition * speed);
        cloud.style.setProperty('--cloud-parallax', `${yPos}px`);
    });
};

document.addEventListener('scroll', applyParallax);
document.addEventListener('DOMContentLoaded', applyParallax);
