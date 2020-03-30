const toggleMenu = document.querySelector('.navigation button');
const menu = document.querySelector('.navigation ul');
const body = document.body;

toggleMenu.addEventListener('click', function() {
	const open = JSON.parse(toggleMenu.getAttribute('aria-expanded'));
	toggleMenu.setAttribute('aria-expanded', !open);
	menu.hidden = !menu.hidden;
	body.classList.toggle('noscroll');
});