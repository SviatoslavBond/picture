
const modals = () => {
	const scroll = calcScroll();
	let clickCount = 0;
	const gift = document.querySelector('.fixed-gift');
	function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
		const trigger = document.querySelectorAll(triggerSelector),
			modal = document.querySelector(modalSelector),
			close = document.querySelector(closeSelector);

		trigger.forEach(el => {
			el.addEventListener('click', (e) => {
				if (e.target) {
					e.preventDefault();
				}
				clickCount++;

				closeAllModal();
				if (destroy) {
					el.remove();
				}
				modal.style.display = 'block';
				document.body.classList.add('modal-open');
				document.body.style.marginRight = `${scroll}px`;
				if (gift) {
					gift.style.marginRight = `${scroll}px`;
				}


			});
		});
		close.addEventListener('click', (e) => {
			closeAllModal();
			document.body.classList.remove('modal-open');
			document.body.style.marginRight = `0px`;
			if (gift) gift.style.marginRight = `0px`;

		});

		modal.addEventListener('click', (event) => {
			const target = event.target;
			if (target === modal) {
				closeAllModal();
				document.body.classList.remove('modal-open');
				document.body.style.marginRight = `0px`;
				if (gift) gift.style.marginRight = `0px`;
			}

		});


	}
	function calcScroll() {
		let div = document.createElement('div');
		div.style.width = '50px';
		div.style.height = '50px';
		div.style.overflowY = 'scroll';
		div.style.visibility = 'visible';
		document.body.appendChild(div);
		let scrollWidth = div.offsetWidth - div.clientWidth;
		div.remove();
		return scrollWidth;
	}
	function showModalByScroll() {
		if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight && clickCount === 0) {
			document.querySelector('.fixed-gift').click();
			window.removeEventListener('scroll', showModalByScroll);
		}
	}

	window.addEventListener('scroll', showModalByScroll);
	function showModalByTime(selector, time) {
		setTimeout(() => {
			let display;
			document.querySelectorAll('[data-modal]').forEach(item => {
				if (getComputedStyle(item).display !== 'none') {
					display = 'block';
				}
			});
			if (!display && !clickCount) {
				document.querySelector(selector).style.display = 'block';
				document.body.classList.add('modal-open');
				document.body.style.marginRight = `${scroll}px`;
				if (document.querySelector('.fixed-gift')) {
					document.querySelector('.fixed-gift').style.marginRight = `${scroll}px`;
				}

			}
		}, time);
	}
	bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
	bindModal('.button-consultation', '.popup-consultation', '.popup-close');
	bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
	// showModalByTime('.popup-consultation', 4000);
};
function closeAllModal() {
	document.querySelectorAll('[data-modal]').forEach(item => {
		item.style.display = 'none';
		item.classList.add('animated', 'fadeIn');

	});
}
export { closeAllModal };
export default modals;