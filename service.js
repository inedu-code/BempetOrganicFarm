// Mobile menu toggle
        const mobileToggle = document.getElementById('mobileToggle');
        const navLinks = document.querySelector('.nav-links');
        
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
        
        // FAQ Accordion
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', () => {
                const item = question.parentElement;
                item.classList.toggle('active');
            });
        });
        
        // Package buttons functionality
        document.querySelectorAll('.btn-package').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                const packageTitle = this.closest('.package-card').querySelector('.package-title').textContent;
                const packagePrice = this.closest('.package-card').querySelector('.price-main').textContent;
                
                alert(`Thank you for your interest in the ${packageTitle} package!\n\nPrice: ${packagePrice}\n\nOur team will contact you within 24 hours to proceed with your selected package.`);
            });
        });
        
        // Newsletter form
        const newsletterForm = document.querySelector('.newsletter-form');
        if(newsletterForm) {
            newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const input = this.querySelector('.newsletter-input');
                if(input.value) {
                    alert('Thank you for subscribing to our BSF farming updates!');
                    input.value = '';
                }
            });
        }
        
        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                if(this.getAttribute('href') === '#') return;
                
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if(target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });