// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(10, 14, 26, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(83, 169, 222, 0.1)';
    } else {
        header.style.background = 'rgba(10, 14, 26, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in animation to sections
const fadeElements = document.querySelectorAll('.section-header, .about-content, .mission-card, .vision-card, .project-card');
fadeElements.forEach(el => {
    el.classList.add('fade-in-up');
    observer.observe(el);
});

// Project card hover effects with delay
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.geometric-pattern, .tech-grid');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.2);
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Stats counter animation
const statsNumbers = document.querySelectorAll('.stat-number');
let hasAnimated = false;

const animateStats = () => {
    if (hasAnimated) return;
    
    statsNumbers.forEach(stat => {
        const target = parseInt(stat.textContent);
        const increment = target / 50;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current) + '+';
        }, 40);
    });
    
    hasAnimated = true;
};

// Trigger stats animation when about section is visible
const aboutSection = document.querySelector('.about');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
        }
    });
}, { threshold: 0.5 });

if (aboutSection) {
    statsObserver.observe(aboutSection);
}

// Dynamic typing effect for hero title (optional enhancement)
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const originalText = heroTitle.innerHTML;
    const text = heroTitle.textContent;
    
    // Only run typing effect on desktop
    if (window.innerWidth > 768) {
        heroTitle.innerHTML = '';
        let i = 0;
        
        const typeWriter = () => {
            if (i < text.length) {
                if (text.charAt(i) === '\n') {
                    heroTitle.innerHTML += '<br>';
                } else {
                    heroTitle.innerHTML += text.charAt(i);
                }
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        // Start typing effect after page load
        setTimeout(typeWriter, 1000);
    }
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger initial animations
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-actions');
        heroElements.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, 500);
});

// Mouse trail effect (optional enhancement)
let mouseTrail = [];
const maxTrailLength = 10;

document.addEventListener('mousemove', (e) => {
    mouseTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
    
    // Limit trail length
    if (mouseTrail.length > maxTrailLength) {
        mouseTrail.shift();
    }
});

// Intersection Observer for progressive loading
const progressiveLoader = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                progressiveLoader.unobserve(img);
            }
        }
    });
});

// Progressive loading for images
document.querySelectorAll('img[data-src]').forEach(img => {
    progressiveLoader.observe(img);
});

// Tech grid animation enhancement
const techGrid = document.querySelector('.tech-grid');
if (techGrid) {
    setInterval(() => {
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        techGrid.style.backgroundPosition = `${randomX}px ${randomY}px`;
    }, 5000);
}

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
const throttledScroll = throttle(() => {
    // Scroll-based animations go here
}, 16); // ~60fps

window.addEventListener('scroll', throttledScroll);

// Accessibility improvements
document.addEventListener('keydown', (e) => {
    // ESC key closes mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Focus management for mobile menu
hamburger.addEventListener('click', () => {
    if (navMenu.classList.contains('active')) {
        // Focus first menu item when menu opens
        const firstLink = navMenu.querySelector('.nav-link');
        if (firstLink) {
            setTimeout(() => firstLink.focus(), 100);
        }
    }
});

// Preload images for better performance
const imageUrls = [
    'imgs/futuristic-ai-robot-laboratory-blue-tech.jpg',
    'imgs/advanced_robot_navigation_sensor_fusion_project_showcase.jpg',
    'imgs/sophisticated_robotic_hand_ai_manipulation.jpg',
    'imgs/ai_robot_physical_reasoning_classroom.jpg',
    'imgs/human_robot_interaction_workplace_collaboration.jpg'
];

imageUrls.forEach(url => {
    const img = new Image();
    img.src = url;
});

// Error handling for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', () => {
        img.style.display = 'none';
        console.warn('Failed to load image:', img.src);
    });
});

// Console styling (for branding)
console.log('%c🤖 AgiBot Research', 'color: #53a9de; font-size: 20px; font-weight: bold;');
console.log('%c具身智能技术研究中心', 'color: #70C1FF; font-size: 14px;');
