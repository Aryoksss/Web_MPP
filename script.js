document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scrolling
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Adjust for navbar height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Service Card Interactions
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        const serviceDetails = card.querySelector('.service-details');
        const serviceIcon = card.querySelector('.service-icon');
        const serviceBtn = card.querySelector('.btn');

        // Hover effects
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.05,
                boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
                duration: 0.3
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                duration: 0.3
            });
        });

        // Button hover effects
        serviceBtn.addEventListener('mouseenter', () => {
            gsap.to(serviceBtn, {
                scale: 1.1,
                backgroundColor: '#00ace6',
                duration: 0.3
            });
        });

        serviceBtn.addEventListener('mouseleave', () => {
            gsap.to(serviceBtn, {
                scale: 1,
                backgroundColor: '#0066cc',
                duration: 0.3
            });
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(0, 102, 204, 0.9)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.backgroundColor = 'var(--primary-color)';
            navbar.style.backdropFilter = 'none';
        }
    });
});