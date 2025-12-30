const wallLeft = document.querySelector('.ccc-hero__wall.left');
const wallRight = document.querySelector('.ccc-hero__wall.right');
let originalBottomLeft, originalBottomRight;

const clouds = document.querySelectorAll('.cloud');
const originalCloudTops = [];

const applyParallax = () => {
    const scrollPosition = window.pageYOffset || 0;

    // Wall parallax - modifying the 'bottom' property
    if (wallLeft && wallRight && originalBottomLeft !== undefined) {
        const speedLeft = 0.2;
        const speedRight = 0.1;
        wallLeft.style.bottom = `${originalBottomLeft + (scrollPosition * speedLeft)}px`;
        wallRight.style.bottom = `${originalBottomRight + (scrollPosition * speedRight)}px`;
    }

    // Cloud parallax - modifying the 'top' property
    clouds.forEach((cloud, index) => {
        if (originalCloudTops[index] !== undefined) {
            const speed = (index + 1) * 0.05;
            const yOffset = scrollPosition * speed;
            cloud.style.top = `${originalCloudTops[index] - yOffset}px`;
        }
    });

    // Keep this in case the user adds elements with this class back
    document.querySelectorAll('.parallax').forEach((element) => {
        const speed = parseFloat(element.dataset.speed || '0');
        const yPos = -(scrollPosition * speed);
        element.style.setProperty('--parallax-offset', `${yPos}px`);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    // Get initial positions for walls
    if (wallLeft && wallRight) {
        originalBottomLeft = parseFloat(getComputedStyle(wallLeft).bottom);
        originalBottomRight = parseFloat(getComputedStyle(wallRight).bottom);
    }

    // Get initial positions for clouds
    clouds.forEach(cloud => {
        originalCloudTops.push(parseFloat(getComputedStyle(cloud).top));
    });

    applyParallax();
});

document.addEventListener('scroll', applyParallax);
