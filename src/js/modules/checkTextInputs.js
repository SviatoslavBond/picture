
const checkTextInputs = (selector) => {
	const textInputs = document.querySelectorAll(selector);
	textInputs.forEach(input => {
		input.addEventListener('input', function (e) {
			this.value = this.value.replace(/[a-z]/gi, '');
		});
	});

};
export default checkTextInputs;