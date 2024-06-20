document.getElementById('showCardBtn').addEventListener('click', function() {
    const card = document.getElementById('card');
    card.style.display = 'block';
    setTimeout(() => {
        card.classList.add('show');
    }, 10);
});

document.getElementById('closeCardBtn').addEventListener('click', function() {
    const card = document.getElementById('card');
    card.classList.remove('show');
    setTimeout(() => {
        card.style.display = 'none';
    }, 500); // Thời gian khớp với thời gian transition trong CSS
});
