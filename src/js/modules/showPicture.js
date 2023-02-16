const showPicture = () => {
	const block = document.querySelectorAll('.sizes-block');
	block.forEach(block => {
		block.addEventListener('mouseenter', () => {
			block.children.forEach(child => {
				const { tagName, className } = child;
				if (tagName != 'IMG' && className != 'sizes-hit') { child.style.display = 'none'; }
				if (tagName == 'IMG') { child.src = child.src.slice(0, -4) + '-1.png'; }

			});
		});
		block.addEventListener('mouseleave', () => {
			block.children.forEach(child => {
				const { tagName: tag } = child;
				if (tag != 'IMG') { child.style.display = 'block'; }
				else {
					child.src = child.src.slice(0, -6) + '.png';
				}
			});
		});
	});
};
export default showPicture;




