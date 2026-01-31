// Configuration
const ORDER_URL = 'https://thesynadentix.com/text.php';

// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Handle CTA button clicks
function handleCtaClick() {
    window.location.href = ORDER_URL;
}

// Accordion functionality
function toggleAccordion(trigger) {
    const content = trigger.nextElementSibling;
    const isActive = trigger.classList.contains('active');
    
    // Close all accordions
    document.querySelectorAll('.accordion-trigger').forEach(item => {
        item.classList.remove('active');
        item.nextElementSibling.classList.remove('active');
    });
    
    // Toggle current accordion
    if (!isActive) {
        trigger.classList.add('active');
        content.classList.add('active');
    }
}

// Form submission handler
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('orderForm');
    const successMessage = document.getElementById('successMessage');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show success message
            successMessage.style.display = 'block';
            
            // Disable form inputs
            const inputs = form.querySelectorAll('input');
            inputs.forEach(input => input.disabled = true);
            
            // Change button text
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.textContent = 'Redirecting...';
                submitBtn.disabled = true;
            }
            
            // Redirect after 3 seconds
            setTimeout(function() {
                window.location.href = ORDER_URL;
            }, 3000);
        });
    }
});

// Handle sticky header on scroll (optional enhancement)
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    } else {
        header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    }
});

