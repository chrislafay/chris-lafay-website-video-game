document.addEventListener('scroll', function() {
    const parallaxElements = document.querySelectorAll('.parallax');
    let scrollPosition = window.pageYOffset;

    parallaxElements.forEach(function(element) {
        let speed = element.dataset.speed;
        let yPos = -(scrollPosition * speed);
        element.style.transform = 'translateY(' + yPos + 'px)';
    });

    const clouds = document.querySelectorAll('.cloud');
    clouds.forEach(function(cloud, index) {
        let speed = (index + 1) * 0.1;
        let yPos = -(scrollPosition * speed);
        cloud.style.transform = `translateY(${yPos}px)`;
    });
});
