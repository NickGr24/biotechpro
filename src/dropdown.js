const burgerMenu = document.getElementById('burger-menu');
const burgerDropdown = document.getElementById('burger-dropdown');
const navLinks = document.querySelectorAll('#burger-dropdown a');

burgerMenu.addEventListener('click', () => {
    burgerDropdown.classList.toggle('hidden');
    if (!burgerDropdown.classList.contains('hidden')) {
        navLinks.forEach((link, index) => {
            setTimeout(() => {
                link.style.color = 'green';
                setTimeout(() => {
                    link.style.color = '';
                }, 500);
            }, index * 500);
        });
    }
});

document.addEventListener('click', function(event) {
    if (!burgerMenu.contains(event.target) && !burgerDropdown.contains(event.target)) {
        burgerDropdown.classList.add('hidden');
    }
});