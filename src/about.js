const button1 = document.querySelector('.button1 button');
const text = document.querySelector('.moreText');

button1.addEventListener('click', () => {
    if (text.style.display === 'none' || text.style.display === '') {
        text.style.display = 'block';
        button1.textContent = 'SHOW LESS';
    } else {
        text.style.display = 'none';
        button1.textContent = 'SHOW MORE';
    }
});