// Add typing animation to tagline
const tagline = document.querySelector('.tagline');
const text = tagline.textContent;
tagline.textContent = '';

function typeText(index = 0) {
    if (index < text.length) {
        tagline.textContent += text[index];
        setTimeout(() => typeText(index + 1), 50);
    }
}

typeText();

// Add scroll progress indicator
const progressIndicator = document.createElement('div');
progressIndicator.className = 'scroll-progress';
document.body.appendChild(progressIndicator);

window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressIndicator.style.width = `${scrolled}%`;
});
