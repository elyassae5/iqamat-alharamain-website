// Language switching functionality
let currentLanguage = localStorage.getItem('siteLanguage') || 'en';

function toggleLanguage() {
    const html = document.documentElement;
    const langBtn = document.querySelector('.lang-btn');
    const langText = document.querySelector('.lang-text');
    
    if (currentLanguage === 'en') {
        // Switch to Arabic
        html.setAttribute('dir', 'rtl');
        html.setAttribute('lang', 'ar');
        currentLanguage = 'ar';
        langText.textContent = 'English';
        
        // Update all translatable elements
        updateLanguage('ar');
        localStorage.setItem('siteLanguage', 'ar');
    } else {
        // Switch to English
        html.setAttribute('dir', 'ltr');
        html.setAttribute('lang', 'en');
        currentLanguage = 'en';
        langText.textContent = 'العربية';
        
        // Update all translatable elements
        updateLanguage('en');
        localStorage.setItem('siteLanguage', 'en');
    }
}

function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-en][data-ar]');
    elements.forEach(element => {
        // Only update if this element has NO child elements (is a leaf node)
        if (element.children.length === 0) {
            element.textContent = lang === 'ar'
                ? element.getAttribute('data-ar')
                : element.getAttribute('data-en');
        }
    });
}

// Mobile menu toggle
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Active navigation highlighting
function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Form validation (for contact form when added)
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('error');
            isValid = false;
        } else {
            input.classList.remove('error');
        }
    });
    
    return isValid;
}

// WhatsApp link generator
function createWhatsAppLink(phoneNumber, message) {
    const encodedMessage = encodeURIComponent(message);
    const encodedPhone = phoneNumber.replace(/\s/g, '');
    return `https://wa.me/${encodedPhone}?text=${encodedMessage}`;
}

// Google Maps integration helper
function initGoogleMaps() {
    // This function will be used when Google Maps is added
    // For now, it's a placeholder
    console.log('Google Maps integration ready');
}

// Utility functions
function debounce(func, wait) {
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

// Image lazy loading
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initSmoothScrolling();
    initActiveNavigation();
    initLazyLoading();
    
    // Initialize gallery if on gallery page
    if (document.querySelector('.gallery-grid')) {
        initGallery();
    }
    
    // Smooth scroll to top functionality
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: var(--shadow);
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    // Show/hide scroll to top button
    window.addEventListener('scroll', debounce(() => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    }, 100));
    
    // Scroll to top functionality
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Add hover effect to scroll to top button
    scrollToTopBtn.addEventListener('mouseenter', () => {
        scrollToTopBtn.style.transform = 'translateY(-2px)';
        scrollToTopBtn.style.boxShadow = 'var(--shadow-hover)';
    });
    
    scrollToTopBtn.addEventListener('mouseleave', () => {
        scrollToTopBtn.style.transform = 'translateY(0)';
        scrollToTopBtn.style.boxShadow = 'var(--shadow)';
    });

    // On page load, set language from localStorage
    const html = document.documentElement;
    const langBtn = document.querySelector('.lang-btn');
    const langText = document.querySelector('.lang-text');
    if (currentLanguage === 'ar') {
        html.setAttribute('dir', 'rtl');
        html.setAttribute('lang', 'ar');
        if (langText) langText.textContent = 'English';
        updateLanguage('ar');
    } else {
        html.setAttribute('dir', 'ltr');
        html.setAttribute('lang', 'en');
        if (langText) langText.textContent = 'العربية';
        updateLanguage('en');
    }
});

// Gallery functionality
let currentImageIndex = 0;
let galleryItems = [];

function initGallery() {
    galleryItems = document.querySelectorAll('.gallery-item');
    
    // Initialize filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            filterGallery(filter);
            
            // Update active button
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

function filterGallery(category) {
    galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (category === 'all' || itemCategory === category) {
            item.style.display = 'block';
            item.classList.add('fade-in');
        } else {
            item.style.display = 'none';
            item.classList.remove('fade-in');
        }
    });
}

function openLightbox(button) {
    const galleryItem = button.closest('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDescription = document.getElementById('lightbox-description');
    
    // Get image info
    const title = galleryItem.querySelector('.gallery-info h3').textContent;
    const description = galleryItem.querySelector('.gallery-info p').textContent;
    
    // Update lightbox content
    lightboxTitle.textContent = title;
    lightboxDescription.textContent = description;
    
    // Show lightbox
    lightbox.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Set current image index
    currentImageIndex = Array.from(galleryItems).indexOf(galleryItem);
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function changeImage(direction) {
    const visibleItems = Array.from(galleryItems).filter(item => 
        item.style.display !== 'none'
    );
    
    currentImageIndex += direction;
    
    if (currentImageIndex >= visibleItems.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = visibleItems.length - 1;
    }
    
    const newItem = visibleItems[currentImageIndex];
    const title = newItem.querySelector('.gallery-info h3').textContent;
    const description = newItem.querySelector('.gallery-info p').textContent;
    
    document.getElementById('lightbox-title').textContent = title;
    document.getElementById('lightbox-description').textContent = description;
}

// Contact form functionality
function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Basic validation
    if (!validateForm(form)) {
        return;
    }
    
    // Show success message (in a real implementation, you'd send this to a server)
    showFormSuccess();
    
    // Clear form
    clearForm();
}

function showFormSuccess() {
    const formContainer = document.querySelector('.form-container');
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.innerHTML = `
        <div style="background: #d4edda; color: #155724; padding: 1rem; border-radius: var(--border-radius); border: 1px solid #c3e6cb; text-align: center; margin-bottom: 1rem;">
            <i class="fas fa-check-circle" style="font-size: 2rem; margin-bottom: 1rem;"></i>
            <h3 data-en="Message Sent Successfully!" data-ar="تم إرسال الرسالة بنجاح!">Message Sent Successfully!</h3>
            <p data-en="Thank you for contacting us. We'll get back to you soon." data-ar="شكراً لك على التواصل معنا. سنرد عليك قريباً.">Thank you for contacting us. We'll get back to you soon.</p>
        </div>
    `;
    
    formContainer.insertBefore(successMessage, formContainer.firstChild);
    
    // Remove success message after 5 seconds
    setTimeout(() => {
        successMessage.remove();
    }, 5000);
}

function clearForm() {
    const form = document.querySelector('.contact-form');
    form.reset();
    
    // Clear any error states
    const errorInputs = form.querySelectorAll('.error');
    errorInputs.forEach(input => input.classList.remove('error'));
}

// Close lightbox when clicking outside
document.addEventListener('click', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (lightbox.style.display === 'block') {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            changeImage(-1);
        } else if (e.key === 'ArrowRight') {
            changeImage(1);
        }
    }
});

// Export functions for use in other scripts
window.HotelWebsite = {
    toggleLanguage,
    createWhatsAppLink,
    validateForm,
    initGoogleMaps,
    openLightbox,
    closeLightbox,
    changeImage,
    handleFormSubmit,
    clearForm
}; 