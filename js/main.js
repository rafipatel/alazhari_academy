/* ===== Azhari Academy — Clean Animation Engine ===== */

document.addEventListener('DOMContentLoaded', function() {
    
    /* ===== Mobile Menu Toggle ===== */
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        });
        
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.textContent = '☰';
            });
        });
    }
    
    /* ===== Navbar Shadow on Scroll ===== */
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
            } else {
                navbar.style.boxShadow = 'none';
            }
        }, { passive: true });
    }
    
    /* ===== Scroll Progress Bar ===== */
    const progress = document.createElement('div');
    progress.className = 'scroll-progress';
    progress.style.width = '0%';
    document.body.appendChild(progress);
    
    window.addEventListener('scroll', function() {
        const scrolled = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const pct = Math.min((scrolled / maxScroll) * 100, 100);
        progress.style.width = pct + '%';
    }, { passive: true });
    
    /* ===== Intersection Observer — Reveal on Scroll ===== */
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    };
    
    const revealObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe stagger-children, wave-stagger, reveal-on-scroll, cinematic-reveal
    const revealTargets = document.querySelectorAll(
        '.stagger-children, .wave-stagger, .reveal-on-scroll, .cinematic-reveal'
    );
    revealTargets.forEach(function(el) {
        revealObserver.observe(el);
    });
    
    // Also reveal sections that aren't the hero
    document.querySelectorAll('section:not(.hero):not(.page-header)').forEach(function(section) {
        const headerEl = section.querySelector('.section-header');
        if (headerEl && !headerEl.classList.contains('reveal-on-scroll')) {
            headerEl.classList.add('reveal-on-scroll');
            revealObserver.observe(headerEl);
        }
    });
    
    /* ===== Animated Stat Counters ===== */
    document.querySelectorAll('.stat-number').forEach(function(counter) {
        const text = counter.textContent.trim();
        const numMatch = text.match(/^(\d+)/);
        if (!numMatch) return;
        
        const target = parseInt(numMatch[1]);
        const suffix = text.replace(numMatch[1], '');
        const duration = 2000;
        
        const counterObserver = new IntersectionObserver(function(entries) {
            if (entries[0].isIntersecting) {
                const start = performance.now();
                
                function animate(currentTime) {
                    const elapsed = currentTime - start;
                    const progressVal = Math.min(elapsed / duration, 1);
                    const easeOut = 1 - Math.pow(1 - progressVal, 4);
                    const current = Math.floor(easeOut * target);
                    
                    counter.textContent = current + suffix;
                    
                    if (progressVal < 1) {
                        requestAnimationFrame(animate);
                    } else {
                        counter.textContent = target + suffix;
                    }
                }
                
                requestAnimationFrame(animate);
                counterObserver.disconnect();
            }
        }, { threshold: 0.5 });
        
        counterObserver.observe(counter);
    });
    
    /* ===== Smooth Scroll for anchor links ===== */
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
    /* ===== Subtle Card Hover — 3D Tilt (desktop only) ===== */
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    
    if (!isTouch) {
        document.querySelectorAll('.feature-card, .course-tag, .testimonial-card').forEach(function(card) {
            card.addEventListener('mousemove', function(e) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * 3;
                const rotateY = ((centerX - x) / centerX) * 3;
                
                card.style.transform = 'perspective(800px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-4px)';
            });
            
            card.addEventListener('mouseleave', function() {
                card.style.transform = '';
            });
        });
    }
    
    /* ===== Hero Entry Animations ===== */
    const heroBadge = document.querySelector('.hero-badge');
    const heroHook = document.querySelector('.hero-hook');
    const heroH1 = document.querySelector('.hero h1');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroCta = document.querySelector('.hero-cta');
    const heroStats = document.querySelector('.hero-stats');
    
    const heroElements = [heroBadge, heroHook, heroH1, heroSubtitle, heroCta, heroStats].filter(Boolean);
    
    heroElements.forEach(function(el, i) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease ' + (i * 0.15) + 's, transform 0.8s ease ' + (i * 0.15) + 's';
    });
    
    // Trigger after a small delay
    setTimeout(function() {
        heroElements.forEach(function(el) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    }, 200);
    
});
