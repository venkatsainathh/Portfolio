document.addEventListener("DOMContentLoaded", function () {
    const textArray = ["student", "coder", "techy"];
    const typingElement = document.querySelector(".typing-text");
    let index = 0;
    let textIndex = 0;
    let currentText = '';
    let typingSpeed = 180;
    let deletingSpeed = 100;
    let isDeleting = false;

    // Initialize cursor
    const cursor = document.querySelector('.cursor');
    
    // Mouse move event
    document.addEventListener('mousemove', e => {
        cursor.style.position = "fixed"; // Ensure it's fixed relative to the viewport
        cursor.style.top = (e.clientY - 10) + 'px'; // Adjust the cursor's top position
        cursor.style.left = (e.clientX - 10) + 'px'; // Adjust the cursor's left position
    });

    // Click event
    document.addEventListener('click', () => {
        cursor.classList.add("expand");
        setTimeout(() => {
            cursor.classList.remove("expand");
        }, 500);
    });

    // Add hover effect for clickable elements
    document.querySelectorAll('a, button, .project-card, .nav-item').forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
        });
    });

    function type() {
        if (index === textArray.length) {
            index = 0; // Reset after all texts have been typed
        }

        const targetText = textArray[index];

        if (isDeleting) {
            currentText = currentText.slice(0, -1);
        } else {
            currentText += targetText.charAt(textIndex);
        }

        typingElement.textContent = currentText;
    
        if (!isDeleting && textIndex < targetText.length) {
            textIndex++;
            setTimeout(type, typingSpeed);
        } else if (isDeleting && textIndex === 0) {
            isDeleting = false;
            index++;
            setTimeout(type, 500);
        } else if (isDeleting) {
            textIndex--;
            setTimeout(type, deletingSpeed);
        } else {
            isDeleting = true;
            setTimeout(type, 500);
        }
    }

    type(); // Start typing effect
    });

document.addEventListener("DOMContentLoaded", function () {
const textArray0 = ["Welcome to my portfolio", "Bienvenido a mi portafolio", "मेरे पोर्टफोलियो में आपका स्वागत है", "مرحبا بكم في محفظتي", "Bienvenue sur mon portfolio", "欢迎来到我的投资组合"];
const typingElement0 = document.querySelector(".typing-text-0");
let index = 0;
let textIndex = 0;
let currentText = '';
let typingSpeed = 100;
let deletingSpeed = 50;
let isDeleting = false;
function type() {
    if (index === textArray0.length) {
        index = 0; // Reset after all texts have been typed
    }
    
    const targetText = textArray0[index];
    
    if (isDeleting) {
        currentText = currentText.slice(0, -1);
    } else {
        currentText += targetText.charAt(textIndex);
    }

    typingElement0.textContent = currentText;
    
    if (!isDeleting && textIndex < targetText.length) {
        textIndex++;
        setTimeout(type, typingSpeed);
    } else if (isDeleting && textIndex === 0) {
        isDeleting = false;
        index++;
        setTimeout(type, 500);
    } else if (isDeleting) {
        textIndex--;
        setTimeout(type, deletingSpeed);
    } else {
        isDeleting = true;
        setTimeout(type, 500);
    }
}

// Delay the start of typing animation by 4.5 seconds
setTimeout(() => {
    type(); // Start typing effect after delay
}, 4500);
});

    // Scroll logic for header
    const header = document.getElementById('header');
    const fullName = document.querySelector('.full-name');
    const shortName = document.querySelector('.short-name');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            header.classList.add('collapsed');
            fullName.style.opacity = '0'; // Fade out full name
            shortName.style.opacity = '1'; // Fade in "VG"
        } else {
            // Scrolling up
            header.classList.remove('collapsed');
            fullName.style.opacity = '1'; // Fade in full name
            shortName.style.opacity = '0'; // Fade out "VG"
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    });

// Page switching functionality
document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const pageContents = document.querySelectorAll('.page-content');

    function switchPage(pageId) {
        // Remove active class from all pages and nav items
        pageContents.forEach(page => {
            page.classList.remove('active');
        });
        navItems.forEach(item => {
            item.classList.remove('active');
        });

        // Add active class to selected page and nav item
        document.getElementById(pageId).classList.add('active');
        document.querySelector(`[data-page="${pageId}"]`).classList.add('active');
    }

    // Add click event listeners to nav items
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const pageId = item.getAttribute('data-page');
            switchPage(pageId);
        });
    });
});

// Add observer for skill animations
const skillsSection = document.getElementById('skills');
const skillCategories = document.querySelectorAll('.skill-category');

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            skillCategories.forEach(category => {
                category.classList.add('active');
            });
        } else {
            skillCategories.forEach(category => {
                category.classList.remove('active');
            });
        }
    });
}, { threshold: 0.5 });

if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        try {
            const formData = new FormData(contactForm);
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                alert('Thank you! Your message has been sent successfully.');
                contactForm.reset();
            } else {
                throw new Error('Something went wrong!');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Sorry, there was an error sending your message. Please try again later.');
        } finally {
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
        }
    });

    // Form validation
    const inputs = contactForm.querySelectorAll('input[required], textarea[required]');
    inputs.forEach(input => {
        input.addEventListener('invalid', function(e) {
            e.preventDefault();
            this.classList.add('invalid');
        });

        input.addEventListener('input', function() {
            if (this.classList.contains('invalid')) {
                this.classList.remove('invalid');
            }
        });
    });
});

// Project View Transitions
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    const projectsListView = document.querySelector('.projects-list-view');
    const projectDetailsView = document.querySelector('.project-details-view');
    const backButton = document.querySelector('.back-to-projects');
    const projectDetails = document.querySelectorAll('.project-details');

    // Function to show project details
    function showProjectDetails(projectId) {
        // Hide list view
        projectsListView.classList.add('hidden');
        
        // Show details view
        projectDetailsView.classList.add('active');
        
        // Show specific project details
        projectDetails.forEach(detail => {
            if (detail.id === `${projectId}-details`) {
                detail.classList.add('active');
            } else {
                detail.classList.remove('active');
            }
        });
    }

    // Function to show project list
    function showProjectList() {
        // Hide details view
        projectDetailsView.classList.remove('active');
        
        // Show list view
        projectsListView.classList.remove('hidden');
        
        // Remove active class from all project details
        projectDetails.forEach(detail => {
            detail.classList.remove('active');
        });
    }

    // Add click event listeners to project cards
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            showProjectDetails(projectId);
        });
    });

    // Add click event listener to back button
    backButton.addEventListener('click', showProjectList);
});

document.addEventListener('DOMContentLoaded', function() {
    const countdown = document.querySelector('.countdown');
    let count = 10;
    
    const timer = setInterval(() => {
        count--;
        if (count >= 0) {
            countdown.textContent = count;
            countdown.dataset.value = count;
        }
        if (count === 0) {
            clearInterval(timer);
            countdown.style.opacity = '0';
        }
    }, 200);
});

