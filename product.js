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
        
        // Product Filtering
        document.querySelectorAll('.filter-btn').forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                document.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Get filter value
                const filter = this.getAttribute('data-filter');
                
                // Show/hide products based on filter
                document.querySelectorAll('.product-card').forEach(product => {
                    const category = product.getAttribute('data-category');
                    
                    if (filter === 'all' || category === filter) {
                        product.style.display = 'flex';
                    } else {
                        product.style.display = 'none';
                    }
                });
            });
        });
        
        // Add to Cart functionality
        document.querySelectorAll('.btn-product-primary').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                const productCard = this.closest('.product-card');
                const productTitle = productCard.querySelector('.product-title').textContent;
                const productPrice = productCard.querySelector('.price-main').textContent;
                
                // Update cart count
                const cartBtn = document.querySelector('.nav-actions .btn-outline');
                let cartCount = parseInt(cartBtn.textContent.match(/\((\d+)\)/)?.[1] || 0);
                cartCount++;
                cartBtn.innerHTML = `<i class="fas fa-shopping-cart"></i> Cart (${cartCount})`;
                
                // Show confirmation
                alert(`${productTitle} added to cart!\n\nPrice: ${productPrice}\n\nProceed to checkout to complete your order.`);
                
                // Animate button
                this.innerHTML = '<i class="fas fa-check"></i> Added!';
                this.style.background = 'linear-gradient(135deg, #8bc34a 0%, #4caf50 100%)';
                
                setTimeout(() => {
                    this.innerHTML = '<i class="fas fa-cart-plus"></i> Add to Cart';
                    this.style.background = 'linear-gradient(135deg, #4caf50 0%, #3a7d34 100%)';
                }, 2000);
            });
        });
        
        // "Learn More" buttons
        document.querySelectorAll('.btn-product-secondary').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                const productCard = this.closest('.product-card');
                const productTitle = productCard.querySelector('.product-title').textContent;
                const productDescription = productCard.querySelector('.product-description').textContent;
                const productPrice = productCard.querySelector('.price-main').textContent;
                
                alert(`Product Details: ${productTitle}\n\n${productDescription}\n\nPrice: ${productPrice}\n\nContact our sales team for bulk orders or specific requirements.`);
            });
        });
        
        // Newsletter form
        const newsletterForm = document.querySelector('.newsletter-form');
        if(newsletterForm) {
            newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const input = this.querySelector('.newsletter-input');
                if(input.value) {
                    alert('Thank you for subscribing to our product updates!');
                    input.value = '';
                }
            });
        }
        
        // CTA buttons
        document.querySelectorAll('.cta-banner .btn').forEach(button => {
            button.addEventListener('click', function() {
                if(this.textContent.includes('Contact Sales')) {
                    alert('Our sales team will contact you shortly!\n\nCall: +234 (0) 812 345 6789\nEmail: sales@greenharvest-bsf.com');
                } else {
                    alert('Need help with your order?\n\nContact our support team:\n📞 +234 (0) 812 345 6789\n✉️ support@greenharvest-bsf.com\n\nWe\'re here to help!');
                }
            });
        });
        
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