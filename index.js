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
        
        // Smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                if(this.getAttribute('href') === '#') return;
                
                
                const target = document.querySelector(this.getAttribute('href'));
                if(target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    navLinks.classList.remove('active');
                    const icon = mobileToggle.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
        
        // Set active link on click
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function(e) {
                document.querySelectorAll('.nav-links a').forEach(item => {
                    item.classList.remove('active');
                });
                this.classList.add('active');
            });
        });

        // Hero section transitions
        document.addEventListener('DOMContentLoaded', function() {
            // Hero slides
            const backgrounds = document.querySelectorAll('.bg-image');
            const texts = document.querySelectorAll('.text-slide');
            const indicators = document.querySelectorAll('.indicator');
            let currentHeroSlide = 0;
            let heroSlideInterval;
            
            // Function to show a specific hero slide
            function showHeroSlide(index) {
                // Hide all slides
                backgrounds.forEach(bg => bg.classList.remove('active'));
                texts.forEach(text => text.classList.remove('active'));
                indicators.forEach(ind => ind.classList.remove('active'));
                
                // Show the selected slide
                backgrounds[index].classList.add('active');
                texts[index].classList.add('active');
                indicators[index].classList.add('active');
                currentHeroSlide = index;
            }
            
            // Function to show next hero slide
            function nextHeroSlide() {
                const nextIndex = (currentHeroSlide + 1) % backgrounds.length;
                showHeroSlide(nextIndex);
            }
            
            // Initialize the first hero slide
            showHeroSlide(0);
            
            // Start automatic hero slideshow
            heroSlideInterval = setInterval(nextHeroSlide, 5000);
            
            // Add click events to hero indicators
            indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => {
                    clearInterval(heroSlideInterval);
                    showHeroSlide(index);
                    // Restart automatic hero slideshow
                    heroSlideInterval = setInterval(nextHeroSlide, 5000);
                });
            });
            
            // Testimonial slides
            const testimonialSlides = document.querySelectorAll('.testimonial-slide');
            const testimonialDots = document.querySelectorAll('.testimonial-dot');
            let currentTestimonialSlide = 0;
            let testimonialSlideInterval;
            
            // Function to show a specific testimonial slide
            function showTestimonialSlide(index) {
                // Remove active classes from all slides
                testimonialSlides.forEach(slide => {
                    slide.classList.remove('active', 'leaving');
                });
                testimonialDots.forEach(dot => dot.classList.remove('active'));
                
                // Mark current slide as leaving
                testimonialSlides[currentTestimonialSlide].classList.add('leaving');
                
                // Update current slide
                currentTestimonialSlide = index;
                
                // Add active classes to new slide
                testimonialSlides[currentTestimonialSlide].classList.add('active');
                testimonialDots[currentTestimonialSlide].classList.add('active');
            }
            
            // Function to show next testimonial slide
            function nextTestimonialSlide() {
                const nextIndex = (currentTestimonialSlide + 1) % testimonialSlides.length;
                showTestimonialSlide(nextIndex);
            }
            
            // Initialize the first testimonial slide
            showTestimonialSlide(0);
            
            // Start automatic testimonial slideshow
            testimonialSlideInterval = setInterval(nextTestimonialSlide, 6000);
            
            // Add click events to testimonial dots
            testimonialDots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    clearInterval(testimonialSlideInterval);
                    showTestimonialSlide(index);
                    // Restart automatic testimonial slideshow
                    testimonialSlideInterval = setInterval(nextTestimonialSlide, 6000);
                });
            });
            
            // Add click events to CTA buttons
            document.querySelectorAll('.btn-primary, .btn-outline').forEach(button => {
                button.addEventListener('click', function(e) {
                
                    const consultationBtn = document.querySelector('.cta-section .btn-primary');
                    if(this === consultationBtn) {
                        alert('Thank you! Our team will contact you shortly to schedule your consultation.');
                    }
                });
            });
            
            // Newsletter form submission
            const newsletterForm = document.querySelector('.newsletter-form');
            if(newsletterForm) {
                newsletterForm.addEventListener('submit', function(e) {
                    
                    const input = this.querySelector('.newsletter-input');
                    if(input.value) {
                        alert('Thank you for subscribing to our newsletter!');
                        input.value = '';
                    }
                });
            }
        });