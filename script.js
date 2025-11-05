// Highlight the current navigation link
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.link-nav');
    links.forEach(link => {
        if (window.location.pathname.endsWith(link.getAttribute('href'))) {
            link.style.background = '#fff176';
            link.style.color = '#ff9800';
        }
    });

    // Fade-in effect for sections
    const sections = document.querySelectorAll('section');
    const fadeInOnScroll = () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                section.classList.add('visible');
            }
        });
    };
    // Initial check
    fadeInOnScroll();
    // On scroll
    window.addEventListener('scroll', fadeInOnScroll);
});
