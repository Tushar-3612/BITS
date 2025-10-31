// Main JavaScript for Balvirt Website - COMPLETE FIXED VERSION

// ===== ACTIVE TAB DETECTION =====
function initializeActiveTabs() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    const dropdownLinks = document.querySelectorAll('.dropdown-content a');

    console.log('Current Page:', currentPage);

    // Remove all active classes first
    navLinks.forEach(link => {
        link.classList.remove('active');
        const badge = link.querySelector('.current-page-badge');
        if (badge) badge.remove();
    });

    dropdownLinks.forEach(link => link.classList.remove('active'));

    // Check main navigation links
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');

        // Home page detection
        if ((currentPage === 'index.html' || currentPage === '' || currentPage === '/') &&
            (linkHref === 'index.html' || linkHref === './' || linkHref === '/')) {
            setActiveTab(link);
        }
        // Exact match for other pages
        else if (linkHref === currentPage) {
            setActiveTab(link);
        }
        // Partial match for parent pages
        else if (linkHref && currentPage.includes(linkHref.replace('.html', ''))) {
            setActiveTab(link);
        }
    });

    // Check dropdown links and activate parents
    dropdownLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.classList.add('active');
            // Activate parent dropdown
            const parentDropdown = link.closest('.dropdown');
            if (parentDropdown) {
                const parentLink = parentDropdown.querySelector('.nav-link');
                parentLink.classList.add('active');
            }
        }
    });
}

function setActiveTab(link) {
    link.classList.add('active');

    // Add current page badge
    if (!link.querySelector('.current-page-badge')) {
        const badge = document.createElement('span');
        badge.className = 'current-page-badge';
        badge.textContent = '';
        badge.style.cssText = `
            display: inline-block;
            background: #0074D9;
            color: white;
            font-size: 10px;
            padding: 2px 6px;
            border-radius: 10px;
            margin-left: 5px;
            animation: bounce 2s infinite;
        `;
        link.appendChild(badge);
    }
}

// ===== IMAGE SLIDER =====
class ImageSlider {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.dotsContainer = document.querySelector('.slider-dots');
        this.prevBtn = document.querySelector('.prev');
        this.nextBtn = document.querySelector('.next');
        this.currentSlide = 0;
        this.autoSlideInterval = null;
        this.slider = document.querySelector('.hero-slider');
        this.isAnimating = false;

        this.touchStartX = 0;
        this.touchEndX = 0;
        this.swipeThreshold = 50;

        if (this.slides.length > 0) {
            this.init();
        }
    }

    init() {
        if (this.slides.length > 0) {
            this.slides[0].classList.add('active');
        }

        if (this.dotsContainer && this.slides.length > 0) {
            this.slides.forEach((_, idx) => {
                const dot = document.createElement('div');
                dot.classList.add('dot');
                if (idx === 0) dot.classList.add('active');
                dot.addEventListener('click', () => this.goToSlide(idx));
                this.dotsContainer.appendChild(dot);
            });
        }

        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prevSlide());
        }

        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.nextSlide());
        }

        if (this.slides.length > 0) {
            this.startAutoSlide();

            if (this.slider) {
                this.slider.addEventListener('mouseenter', () => this.stopAutoSlide());
                this.slider.addEventListener('mouseleave', () => this.startAutoSlide());
                this.setupSwipeEvents();
            }
        }
    }

    setupSwipeEvents() {
        this.slider.addEventListener('touchstart', (e) => {
            this.touchStartX = e.changedTouches[0].screenX;
            this.stopAutoSlide();
        }, { passive: true });

        this.slider.addEventListener('touchend', (e) => {
            this.touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
            this.startAutoSlide();
        }, { passive: true });

        this.slider.addEventListener('mousedown', (e) => {
            this.touchStartX = e.clientX;
            this.stopAutoSlide();
        });

        this.slider.addEventListener('mouseup', (e) => {
            this.touchEndX = e.clientX;
            this.handleSwipe();
            this.startAutoSlide();
        });

        this.slides.forEach(slide => {
            slide.addEventListener('dragstart', (e) => e.preventDefault());
        });
    }

    handleSwipe() {
        const diff = this.touchStartX - this.touchEndX;

        if (diff > this.swipeThreshold) {
            this.nextSlide();
        }
        else if (diff < -this.swipeThreshold) {
            this.prevSlide();
        }
    }

    goToSlide(n) {
        if (this.slides.length === 0 || this.isAnimating) return;

        this.isAnimating = true;

        this.slides[this.currentSlide].classList.remove('active');

        const dots = document.querySelectorAll('.dot');
        if (dots.length > 0) {
            dots[this.currentSlide].classList.remove('active');
        }

        this.currentSlide = (n + this.slides.length) % this.slides.length;

        this.slides[this.currentSlide].classList.add('active');

        if (dots.length > 0) {
            dots[this.currentSlide].classList.add('active');
        }

        setTimeout(() => {
            this.isAnimating = false;
        }, 1000);

        this.resetAutoSlide();
    }

    nextSlide() {
        this.goToSlide(this.currentSlide + 1);
    }

    prevSlide() {
        this.goToSlide(this.currentSlide - 1);
    }

    startAutoSlide() {
        this.stopAutoSlide();

        this.autoSlideInterval = setInterval(() => {
            if (!this.isAnimating) {
                this.nextSlide();
            }
        }, 6000);
    }

    stopAutoSlide() {
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
            this.autoSlideInterval = null;
        }
    }

    resetAutoSlide() {
        this.stopAutoSlide();
        this.startAutoSlide();
    }
}

// ===== NAVIGATION MANAGER =====
class NavigationManager {
    constructor() {
        this.hamburger = document.querySelector(".hamburger");
        this.navMenu = document.querySelector(".nav-menu");
        this.dropdowns = document.querySelectorAll('.dropdown');
        this.scrollToTopBtn = document.querySelector('.scroll-to-top');
        this.init();
    }

    init() {
        this.setupMobileMenu();
        this.setupDropdowns();
        this.setupSmoothScrolling();
        this.setupScrollToTop();
        this.setupResizeHandler();
        this.setupClickOutsideHandler();
        this.setupLinkClickHandlers();
    }

    setupMobileMenu() {
        if (!this.hamburger || !this.navMenu) return;

        this.hamburger.addEventListener("click", (e) => {
            e.stopPropagation();
            this.toggleMobileMenu();
        });
    }

    toggleMobileMenu() {
        this.hamburger.classList.toggle("active");
        this.navMenu.classList.toggle("active");

        // Toggle body scroll lock
        if (this.navMenu.classList.contains('active')) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
            this.closeAllDropdowns();
        }
    }

    setupDropdowns() {
        // Mobile dropdown functionality
        document.querySelectorAll('.dropdown .nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                if (window.innerWidth <= 992) {
                    e.preventDefault();
                    e.stopPropagation();
                    const dropdown = e.currentTarget.closest('.dropdown');
                    this.toggleMobileDropdown(dropdown);
                }
            });
        });

        // Desktop dropdown functionality
        this.dropdowns.forEach(dropdown => {
            dropdown.addEventListener('mouseenter', () => {
                if (window.innerWidth > 992) {
                    dropdown.classList.add('active');
                }
            });

            dropdown.addEventListener('mouseleave', () => {
                if (window.innerWidth > 992) {
                    dropdown.classList.remove('active');
                }
            });
        });
    }

    toggleMobileDropdown(dropdown) {
        // Close all other dropdowns first
        this.dropdowns.forEach(d => {
            if (d !== dropdown) {
                d.classList.remove('active');
            }
        });

        // Toggle the clicked dropdown
        dropdown.classList.toggle('active');
    }

    closeAllDropdowns() {
        this.dropdowns.forEach(d => {
            d.classList.remove('active');
        });
    }

    closeMobileMenu() {
        if (this.hamburger) this.hamburger.classList.remove("active");
        if (this.navMenu) this.navMenu.classList.remove("active");
        document.body.classList.remove('menu-open');
        this.closeAllDropdowns();
    }

    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                // Don't prevent default for dropdown links on mobile
                if (window.innerWidth <= 992 && e.currentTarget.closest('.dropdown-content')) {
                    return;
                }

                e.preventDefault();
                const targetId = e.currentTarget.getAttribute('href');
                if (targetId === '#') return;

                this.scrollToTarget(targetId);
            });
        });
    }

    scrollToTarget(targetId) {
        const target = document.querySelector(targetId);
        if (target) {
            if (window.innerWidth <= 992) {
                this.closeMobileMenu();
            }

            const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }

    setupScrollToTop() {
        if (!this.scrollToTopBtn) return;

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                this.scrollToTopBtn.classList.add('show');
            } else {
                this.scrollToTopBtn.classList.remove('show');
            }
        });

        this.scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    setupResizeHandler() {
        window.addEventListener('resize', () => {
            if (window.innerWidth > 992) {
                this.closeMobileMenu();
            }
        });
    }

    setupClickOutsideHandler() {
        document.addEventListener('click', (e) => {
            // For mobile menu
            if (window.innerWidth <= 992) {
                const isClickInsideNav = e.target.closest('.nav-menu');
                const isHamburger = e.target.closest('.hamburger');

                if (!isClickInsideNav && !isHamburger && this.navMenu.classList.contains('active')) {
                    this.closeMobileMenu();
                }
            } 
            // For desktop dropdowns
            else {
                const isDropdown = e.target.closest('.dropdown');
                if (!isDropdown) {
                    this.closeAllDropdowns();
                }
            }
        });
    }

    setupLinkClickHandlers() {
        // Auto-close mobile menu on regular link click (not dropdown toggles)
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                if (window.innerWidth <= 992) {
                    // Don't close if it's a dropdown toggle link
                    const isDropdownToggle = link.querySelector('i.fa-chevron-down') || 
                                           link.closest('.dropdown') && !link.getAttribute('href').startsWith('#');
                    
                    if (!isDropdownToggle) {
                        setTimeout(() => {
                            this.closeMobileMenu();
                        }, 300);
                    }
                }
            });
        });

        // Close menu when clicking dropdown items (not the toggle)
        document.querySelectorAll('.dropdown-content a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 992) {
                    setTimeout(() => {
                        this.closeMobileMenu();
                    }, 300);
                }
            });
        });
    }
}

// ===== UTILITY FUNCTIONS =====
class Utilities {
    static preloadImages() {
        const imageUrls = [
            'images/home/first.png',
            'images/home/second.png',
            'images/home/netsuite.png',
            'images/home/home 2.jpg'
        ];

        imageUrls.forEach(url => {
            const img = new Image();
            img.src = url;
        });
    }

    static initializeTypingEffect() {
        if (typeof Typed === 'undefined') return null;

        const typingEffects = {
            "#typed-text": [
                "Bal<span style='color:#0074D9;'>virt</span>",
                "Where <span style='color:orange'>Innovation</span> Meets <span style='color:orange'>Execution</span>"
            ],
            "#typed-digital": ["Digital Transformation"],
            "#typed-netsuite": ["NetSuite <span style='color:orange' > ERP </span> Experts"],
            "#typed-consulting": ["IT <span style='color:orange' >Consulting </span> Excellence"]
        };

        Object.entries(typingEffects).forEach(([selector, strings]) => {
            if (document.querySelector(selector)) {
                new Typed(selector, {
                    strings: strings,
                    typeSpeed: 50,
                    backSpeed: 30,
                    backDelay: 2000,
                    loop: true,
                    showCursor: false,
                    contentType: 'html'
                });
            }
        });
    }

    static setInitialSliderHeight() {
        const slider = document.querySelector('.hero-slider');
        if (slider) {
            slider.style.height = window.innerHeight - 80 + 'px';
        }
    }
}

// ===== MAIN APPLICATION =====
class BalvirtApp {
    constructor() {
        this.slider = null;
        this.navigation = null;
        this.typed = null;

        this.init();
    }

    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.setupApplication();
            });
        } else {
            this.setupApplication();
        }
    }

    setupApplication() {
        // Initialize utilities
        Utilities.preloadImages();
        Utilities.setInitialSliderHeight();

        // Initialize core functionality
        this.slider = new ImageSlider();
        this.navigation = new NavigationManager();

        // Initialize typing effect
        this.typed = Utilities.initializeTypingEffect();

        // Initialize active tabs
        initializeActiveTabs();

        // Set up global event listeners
        this.setupGlobalEvents();
    }

    setupGlobalEvents() {
        window.addEventListener('load', () => {
            Utilities.setInitialSliderHeight();
            // Re-check active tabs after full load
            setTimeout(initializeActiveTabs, 100);
        });

        window.addEventListener('resize', () => {
            Utilities.setInitialSliderHeight();
        });

        // Handle browser back/forward
        window.addEventListener('popstate', initializeActiveTabs);
    }
}

// ===== INITIALIZE EVERYTHING =====
const balvirtApp = new BalvirtApp();

// Large screen navbar fix
function handleLargeScreenLayout() {
    const screenWidth = window.innerWidth;
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');

    if (screenWidth >= 993) {
        if (navMenu) {
            navMenu.classList.remove('active');
        }
        if (hamburger) {
            hamburger.classList.remove('active');
        }
        document.body.classList.remove('menu-open');
        
        // Close all dropdowns on large screens when resizing
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
}

window.addEventListener('load', handleLargeScreenLayout);
window.addEventListener('resize', handleLargeScreenLayout);

// Prevent scrolling when menu is open on touch devices
document.addEventListener('touchmove', function(e) {
    if (document.body.classList.contains('menu-open')) {
        e.preventDefault();
    }
}, { passive: false });

// Close mobile menu when clicking nav links (mobile only)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 992) {
            // Don't close if it's a dropdown toggle
            const isDropdownToggle = link.querySelector('i.fa-chevron-down') || 
                                   link.closest('.dropdown') && !link.getAttribute('href').startsWith('#');
            
            if (!isDropdownToggle) {
                const navMenu = document.querySelector('.nav-menu');
                const hamburger = document.querySelector('.hamburger');
                if (navMenu) navMenu.classList.remove('active');
                if (hamburger) hamburger.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        }
    });
});

// Enhanced mobile dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile dropdown arrow click
    document.querySelectorAll('.dropdown .nav-link i').forEach(icon => {
        icon.addEventListener('click', function(e) {
            if (window.innerWidth <= 992) {
                e.preventDefault();
                e.stopPropagation();
                const dropdown = this.closest('.dropdown');
                const navLink = this.closest('.nav-link');
                
                // Toggle dropdown
                document.querySelectorAll('.dropdown').forEach(d => {
                    if (d !== dropdown) {
                        d.classList.remove('active');
                    }
                });
                
                dropdown.classList.toggle('active');
                
                // Rotate arrow
                if (dropdown.classList.contains('active')) {
                    this.style.transform = 'rotate(180deg)';
                } else {
                    this.style.transform = 'rotate(0deg)';
                }
            }
        });
    });

    // Close dropdowns when clicking on page content
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 992) {
            if (!e.target.closest('.nav-menu') && !e.target.closest('.hamburger')) {
                document.querySelectorAll('.dropdown').forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
                document.querySelectorAll('.dropdown .nav-link i').forEach(icon => {
                    icon.style.transform = 'rotate(0deg)';
                });
            }
        }
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992) {
            // Reset mobile styles
            document.querySelectorAll('.dropdown').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
            document.querySelectorAll('.dropdown .nav-link i').forEach(icon => {
                icon.style.transform = '';
            });
        }
    });
});

console.log('Balvirt Website JavaScript Loaded Successfully!');