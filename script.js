document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Smooth Scrolling for Navigation Links
    const links = document.querySelectorAll('nav ul li a');
    
    for (const link of links) {
        link.addEventListener('click', clickHandler);
    }
    
    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;
        
        scroll({
            top: offsetTop - 70, // -70 offset for fixed header
            behavior: "smooth"
        });

        // Update Active State
        links.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    }

    // 2. Reveal Elements on Scroll (Animation)
    const reveals = document.querySelectorAll('.reveal');

    window.addEventListener('scroll', checkReveal);

    function checkReveal() {
        const triggerBottom = window.innerHeight / 5 * 4;

        reveals.forEach(reveal => {
            const boxTop = reveal.getBoundingClientRect().top;

            if (boxTop < triggerBottom) {
                reveal.classList.add('active');
            } else {
                reveal.classList.remove('active');
            }
        });
    }

    // Trigger once on load
    checkReveal();

    // 3. Simple Form Handling (Prevent Refresh)
    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('.btn-submit');
            const originalText = btn.innerHTML;
            
            // Simulation of sending
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            btn.style.opacity = '0.7';
            
            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-check"></i> Sent Successfully';
                btn.style.backgroundColor = '#10b981'; // Green color
                contactForm.reset();
                
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.style.backgroundColor = ''; 
                    btn.style.opacity = '1';
                }, 3000);
            }, 1500);
        });
    }

    // 4. Navbar Background on Scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(11, 11, 20, 0.95)';
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
        } else {
            header.style.background = 'rgba(11, 11, 20, 0.9)';
            header.style.boxShadow = 'none';
        }
    });
});

function openTrack(trackId) {
    // سيقوم بفتح صفحة التفاصيل ويمرر لها اسم التراك
    window.location.href = `track-details.html?track=${trackId}`;
}