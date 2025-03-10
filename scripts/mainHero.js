const videoBtn = document.querySelector('.hero__video-btn');
const videoMouse = document.querySelector('.hero__video-mouse');

videoBtn.addEventListener('mousemove', (e) => {
    const rect = videoBtn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    videoMouse.style.top = `${y}px`;
    videoMouse.style.left = `${x}px`;
});
