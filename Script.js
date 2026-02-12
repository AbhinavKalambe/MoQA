/* ===============================
   ICONS & UI HELPERS
================================ */

// Initialize Lucide
lucide.createIcons();

// Render star icons
function renderStars(elId, count = 5) {
    const container = document.getElementById(elId);
    if (!container) return;

    container.innerHTML = '';
    for (let i = 0; i < count; i++) {
        const star = document.createElement('i');
        star.setAttribute('data-lucide', 'star');
        star.classList.add('w-3', 'h-3', 'fill-current');
        container.appendChild(star);
    }
}

const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  lucide.createIcons();

  const slider = document.getElementById('toolboxSlider');
  const cards = document.querySelectorAll('.toolbox-card');
  const nextBtn = document.getElementById('toolboxNext');

  let index = 0;
  const cardWidth = cards[0].offsetWidth + 24; // card + gap
  let autoSlide;

  function goToCard(i) {
    slider.scrollTo({
      left: i * cardWidth,
      behavior: 'smooth'
    });
  }

  function nextCard() {
    index = (index + 1) % cards.length;
    goToCard(index);
  }

  function startAutoSlide() {
    if (window.innerWidth < 768) {
      autoSlide = setInterval(nextCard, 3000);
    }
  }

  function stopAutoSlide() {
    clearInterval(autoSlide);
  }

  nextBtn.addEventListener('click', () => {
    stopAutoSlide();
    nextCard();
    startAutoSlide();
  });

  slider.addEventListener('touchstart', stopAutoSlide);
  slider.addEventListener('touchend', startAutoSlide);

  startAutoSlide();


/* ===============================
   FORM HANDLING + EMAILJS
================================ */

const form = document.getElementById('contact-form');
const container = document.getElementById('contact-container');

if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const button = form.querySelector('button');
        button.disabled = true;
        button.innerText = 'Launching...';

        emailjs.sendForm(
            'service_x28k5ry',   
            'template_d5rqeor',  
            form
        )
            .then(() => {
                container.innerHTML = `
                <div class="py-20 text-center">
                    <div class="w-24 h-24 bg-black rounded-full flex items-center justify-center text-[#bef264] mx-auto mb-8">
                        <i data-lucide="rocket" class="w-12 h-12"></i>
                    </div>

                    <h3 class="font-['Space_Grotesk'] text-5xl md:text-7xl font-bold mb-4 italic tracking-tighter text-zinc-950">
                        LFG! 🚀
                    </h3>

                    <p class="text-black font-black uppercase tracking-widest">
                        Signal received. One of our engineers will reach out within 24 hours.
                    </p>
                </div>
            `;
                lucide.createIcons();
            })
            .catch((error) => {
                console.error('EmailJS Error:', error);
                alert('❌ Failed to send. Please try again.');
                button.disabled = false;
                button.innerText = 'Launch Project Now';
            });
    });
}
