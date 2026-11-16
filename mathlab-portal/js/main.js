// Optional: fake loading indicator before redirect
document.querySelectorAll('.start-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        this.textContent = 'Loading module...';
        this.disabled = true;
        setTimeout(() => {
            window.location.href = 'games.html';
        }, 600);
    });
});