const filterImage = () => {
	const header = document.querySelector('.portfolio-menu');
	const portfolioItem = document.querySelectorAll('.portfolio-block');
	const portfolioNo = document.querySelector('.portfolio-no');

	header.addEventListener('click', (e) => {
		const target = e.target;
		const targetClass = target.className;

		header.children.forEach(element => {
			element.classList.remove('active');
		});
		target.classList.add('active');

		portfolioItem.forEach(item => {
			item.style.display = 'none';
			item.classList.remove('animated', 'fadeIn');
			if (item.className.match(targetClass)) {
				item.style.display = 'block';
				item.classList.add('animated', 'fadeIn');
			}
		});
		if (targetClass == 'grandmother' || targetClass == 'granddad') {
			portfolioNo.style.display = 'block';
			portfolioNo.classList.add('animated', 'fadeIn');
		} else {
			portfolioNo.style.display = 'none';
		}
	});
};
export default filterImage;