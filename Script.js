// Initialize Lucide Icons
lucide.createIcons();

// Helper to render stars
const renderStars = (elId, count = 5) => {
    const container = document.getElementById(elId);
    for (let i = 0; i < count; i++) {
        const star = document.createElement('i');
        star.setAttribute('data-lucide', 'star');
        star.classList.add('w-3', 'h-3', 'fill-current');
        container.appendChild(star);
    }
};

// Render stars on load
window.onload = () => {
    renderStars('hero-stars');
    renderStars('proof-stars');
    lucide.createIcons(); // re-init for new stars
};

// Form Handling
const form = document.getElementById('contact-form');
const container = document.getElementById('contact-container');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    container.innerHTML = `
        <div class="py-20 text-center">
            <div class="w-24 h-24 bg-black rounded-full flex items-center justify-center text-[#bef264] mx-auto mb-8">
                <i data-lucide="rocket" class="w-12 h-12"></i>
            </div>
            <h3 class="font-['Space_Grotesk'] text-5xl md:text-7xl font-bold mb-4 italic tracking-tighter text-zinc-950">LFG! 🚀</h3>
            <p class="text-black font-black uppercase tracking-widest">Signal received. One of our engineers will reach out within 24 hours.</p>
        </div>
    `;
    lucide.createIcons();
});
