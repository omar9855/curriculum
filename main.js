const sections = document.querySelectorAll('.section');
const buttons = document.querySelectorAll('.nav-button');

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		sections.forEach((section) => {
			section.classList.remove('active');
		});
		const targetId = button.id.replace('-btn', '');
		document.getElementById(targetId).classList.add('active');
	});
});

function closeMobileMenu() {
	var navButtons = document.getElementById('nav-buttons');
	navButtons.style.display = 'none';
}

var navBtns = document.querySelectorAll('.nav-button');
for (var i = 0; i < navBtns.length; i++) {
	navBtns[i].addEventListener('click', closeMobileMenu);
}

var menuBtn = document.getElementById('menu-btn');
menuBtn.addEventListener('click', function () {
	var navButtons = document.getElementById('nav-buttons');
	if (navButtons.style.display === 'block') {
		navButtons.style.display = 'none';
	} else {
		navButtons.style.display = 'block';
	}
});
