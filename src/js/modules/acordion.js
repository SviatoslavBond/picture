const acordion = (triggerSelector, itemsSelector) => {
	const btns = document.querySelectorAll(triggerSelector);
	btns.forEach(btn => {
		btn.addEventListener('click', function () {
			this.classList.toggle('active-style');
			this.nextElementSibling.classList.toggle('active-content');
			if (this.classList.contains('active-style')) {
				this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
			} else {
				this.nextElementSibling.style.maxHeight = '0px';
			}
		});
	});
};
export default acordion;

// const btns = document.querySelectorAll('..accordion-heading');
// 	const wrapper = document.querySelector('#accordion');
// 	const blocks = document.querySelectorAll('.accordion-block');
// 	function hideContent() {
// 		blocks.forEach(block => {
// 			block.classList.remove('fadeInDown');
// 			block.style.display = 'none';
// 			block.classList.add('animated');
// 		});
// 	}
// 	hideContent();

// 	wrapper.addEventListener('click', (e) => {
// 		const target = e.target;
// 		const button = target.parentNode;
// 		const textNode = button.nextElementSibling;
// 		if (target && button.classList.contains('accordion-heading')) {
// 			if (getComputedStyle(button.nextElementSibling).display == 'none') {
// 				hideContent();
// 				btns.forEach(btn => {
// 					btn.classList.remove('ui-accordion-header-active');
// 				});
// 				button.classList.add('ui-accordion-header-active');
// 				textNode.classList.add('fadeInDown');
// 				textNode.style.display = 'block';
// 			} else {
// 				textNode.classList.remove('fadeInDown');
// 				textNode.classList.add('fadeOutUp');
// 			}
// 		}
// 	});


// const btns = document.querySelectorAll(triggerSelector);
// const blocks = document.querySelectorAll(itemsSelector);
// blocks.forEach(block => {
// 	block.classList.add('animated', 'fadeInDown');
// });
// btns.forEach(btn => {
// 	btn.addEventListener('click', function () {
// 		if (!this.classList.contains('active')) {
// 			btns.forEach(btn => {
// 				btn.classList.remove('active', 'active-style');
// 			});
// 			this.classList.add('active', 'active-style');
// 		}
// 	});
// });