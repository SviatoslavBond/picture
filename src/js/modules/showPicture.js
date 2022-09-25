const showPicture = () => {
	const block = document.querySelectorAll('.sizes-block');
	block.forEach(block => {
		block.addEventListener('mouseenter', () => {
			block.children.forEach(child => {
				if (child.tagName != 'IMG' && child.className != 'sizes-hit') { child.style.display = 'none'; }
				else {
					child.src = child.src.slice(0, -4) + '-1.png';
				}
			});
		});
		block.addEventListener('mouseleave', () => {
			block.children.forEach(child => {
				if (child.tagName != 'IMG') { child.style.display = 'block'; }
				else {
					child.src = child.src.slice(0, -6) + '.png';
				}
			});
		});
	});
};
export default showPicture;




