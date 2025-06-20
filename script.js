function toggleMenu() {
    const navMenu = document.getElementById('myNavMenu');
    const menuBtn = document.querySelector('.nav-menu-btn i');
    
    navMenu.classList.toggle('active');
    
    if (navMenu.classList.contains('active')) {
        menuBtn.classList.remove('uil-bars');
        menuBtn.classList.add('uil-times');
    } else {
        menuBtn.classList.remove('uil-times');
        menuBtn.classList.add('uil-bars');
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active-link'));
            this.classList.add('active-link');
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            const navMenu = document.getElementById('myNavMenu');
            const menuBtn = document.querySelector('.nav-menu-btn i'); 
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuBtn.classList.remove('uil-times');
                menuBtn.classList.add('uil-bars');
            }
        });
    });
});
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active-link');
        }
    });
});
let currentProjectIndex = 0;
const totalProjects = 4;
function showProject(index) {
    const projectsContainer = document.getElementById('projectsContainer');
    const indicators = document.querySelectorAll('.indicator');
    if (index >= totalProjects) {
        currentProjectIndex = 0;
    } else if (index < 0) {
        currentProjectIndex = totalProjects - 1;
    } else {
        currentProjectIndex = index;
    }
    const translateX = -currentProjectIndex * 100;
    projectsContainer.style.transform = `translateX(${translateX}%)`;
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === currentProjectIndex);
    });
}
function changeProject(direction) {
    showProject(currentProjectIndex + direction);
}
function currentProject(index) {
    showProject(index - 1);
}
function startCarouselAutoPlay() {
    setInterval(() => {
        changeProject(1);
    }, 5000); 
}
function sendMessage(event) {
    event.preventDefault();
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
  const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields');
        return;
    }
function openLinkedIn() {
    window.open('https://www.linkedin.com/in/varshini-magapu', '_blank');
}

function openGithub() {
    window.open('https://github.com/varshini-magapu', '_blank');
}
function downloadResume() {
    const resumeUrl = 'assets/Varshini_Resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Varshini_Magapu_Resume.pdf';
 document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
function createScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="uil uil-arrow-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = 'flex';
        } else {
            scrollBtn.style.display = 'none';
        }
    });
    
    document.body.appendChild(scrollBtn);
}
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    const animatedElements = document.querySelectorAll('.section, .project-card, .certification-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}
document.addEventListener('DOMContentLoaded', function() {
    createScrollToTopButton();
    initScrollAnimations();
    initTypingAnimation();
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.3s ease';
        document.body.style.opacity = '1';
    }, 100);
});
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 300);
    }
});
    document.body.appendChild(darkModeToggle);
}
