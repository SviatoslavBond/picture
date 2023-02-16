const scrolling = () => {
	const upElem = document.querySelector('.pageup');

	window.addEventListener('scroll', () => {
		if (window.pageYOffset > 1700) {
			upElem.classList.remove('fadeOut');
			upElem.classList.add('animated', 'fadeIn');
		} else {
			upElem.classList.remove('fadeIn');
			upElem.classList.add('fadeOut');
		}
	});
	let links = document.querySelectorAll('[href^="#"]'),
		speed = 0.3;

	links.forEach(link => {
		link.addEventListener('click', function (event) {
			event.preventDefault();
			if (link.hash.length > 1) {

				let heightTop = document.documentElement.scrollTop,
					hash = this.hash,
					toBlock = document.querySelector(hash).getBoundingClientRect().top,
					start = null;

				const step = (time) => {
					if (start === null) {
						start = time;
					}
					let progress = time - start;
					let r = (toBlock < 0 ? Math.max(heightTop - progress / speed, 0) : Math.min(heightTop + progress / speed, toBlock));
					window.scrollTo(0, r);

					if (r != heightTop + toBlock) {
						requestAnimationFrame(step);
					} else {
						location.hash = hash;
					}
				};
				requestAnimationFrame(step);
			}
		});
	});
};
export default scrolling;



