/* ============================================
   5월 16일 데이트 브리핑 - App Logic
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Scroll Animation (Intersection Observer) ──
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // ── Header Scroll Effect ──
  const header = document.querySelector('.header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
  }, { passive: true });

  // ── Tab Switching ──
  document.querySelectorAll('.tabs').forEach(tabGroup => {
    const buttons = tabGroup.querySelectorAll('.tab-btn');
    const sectionId = tabGroup.dataset.section;
    const contents = document.querySelectorAll(`.tab-content[data-section="${sectionId}"]`);

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Deactivate all
        buttons.forEach(b => b.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        // Activate clicked
        btn.classList.add('active');
        const target = btn.dataset.tab;
        const targetContent = document.querySelector(`.tab-content[data-section="${sectionId}"][data-tab="${target}"]`);
        if (targetContent) {
          targetContent.classList.add('active');
        }
      });
    });
  });

  // ── Smooth Scroll for Anchor Links ──
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ── Parallax-like effect on Hero ──
  const hero = document.querySelector('.hero');
  if (hero) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      if (scrolled < 600) {
        hero.style.transform = `translateY(${scrolled * 0.15}px)`;
        hero.style.opacity = 1 - (scrolled / 600);
      }
    }, { passive: true });
  }

  // ── Stagger animation for cards in view ──
  const staggerElements = document.querySelectorAll('.place-card, .scenario-card, .area-card');
  let delay = 0;
  const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 100);
        staggerObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  staggerElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    staggerObserver.observe(el);
  });

});
