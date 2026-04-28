 document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons();

      const menuBtn = document.getElementById('menuBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      const cursorGlow = document.getElementById('cursorGlow');

      menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });

      mobileMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
      });

      window.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
      });

      const revealItems = document.querySelectorAll('.reveal');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });

      revealItems.forEach((item) => observer.observe(item));

      gsap.registerPlugin(ScrollTrigger);

    

   gsap.timeline({
  scrollTrigger: {
    trigger: "#projects",
    start: "top 82%",
    once: true
  }
})
.add(() => {
  document.querySelector(".premium-tree").classList.add("tree-started");
})
.from("#projects .tree-node", {
  scale: 0,
  opacity: 0,
  duration: 0.3,
  stagger: 0.06,
  ease: "back.out(1.7)"
}, 0)
.from("#projects .project-card", {
  y: 18,
  opacity: 0,
  duration: 0.35,
  stagger: 0.06,
  ease: "power2.out"
}, 0.05);

      gsap.utils.toArray('.project-card, .info-card').forEach((card) => {
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const rotateY = ((x / rect.width) - 0.5) * 8;
          const rotateX = ((y / rect.height) - 0.5) * -8;
          card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });

        card.addEventListener('mouseleave', () => {
          card.style.transform = '';
        });
      });
    });


    const nav = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    nav.classList.add("shadow-md");
  } else {
    nav.classList.remove("shadow-md");
  }
});