

const slider = (slides, dir, prev, next) => {
	let slideIndex = 1;
	let paused = false;
	const items = Array.from(document.querySelectorAll(slides));

	function showSlides() {
		// slideIndex
		if (slideIndex > items.length) {
			slideIndex = 1;
		}
		if (slideIndex < 1) {
			slideIndex = items.length;
		}
		items.forEach(item => {
			item.classList.add('animated');
			item.style.display = 'none';
		});

		items[slideIndex - 1].style.display = 'block';
	}
	showSlides(slideIndex);//перша ініціалізація

	try {
		const prevBtn = document.querySelector(prev);
		const nextBtn = document.querySelector(next);
		prevBtn.addEventListener('click', () => {
			// changeSlide(-1,);
			slideIndex--;
			showSlides();
			items[slideIndex - 1].classList.remove('fadeInLeft');
			items[slideIndex - 1].classList.add('fadeInRight');
		});
		nextBtn.addEventListener('click', () => {
			// changeSlide(1);
			slideIndex++;
			showSlides();
			items[slideIndex - 1].classList.remove('fadeInRight');
			items[slideIndex - 1].classList.add('fadeInLeft');
		});
	} catch (e) {
	}
	function activateAnimation() {
		if (dir === 'vertical') {
			paused = setInterval(() => {
				slideIndex++;
				showSlides();
				items[slideIndex - 1].classList.add('fadeInDown');
			}, 3000);
		}
		else {
			paused = setInterval(() => {
				slideIndex++;
				showSlides();
				items[slideIndex - 1].classList.remove('fadeInRight');
				items[slideIndex - 1].classList.add('fadeInLeft');
			}, 3000);
		}
	}
	activateAnimation();
	items[0].parentNode.addEventListener('mouseenter', () => {
		clearInterval(paused);

	});
	items[0].parentNode.addEventListener('mouseleave', () => {
		activateAnimation();
	});
};
export default slider;
