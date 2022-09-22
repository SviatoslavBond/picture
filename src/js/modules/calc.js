import { getDate } from "../services/reqests";

const calc = (costPicture) => {
	const size = document.querySelector('#size');
	const material = document.querySelector('#material');
	const options = document.querySelector('#options');
	const result = document.querySelector('.calc-price');
	const inputDiscount = document.querySelector('.promocode');
	let sum = 0;
	const promocod = 'IWANTPOPART';

	const sizeOptions = Array.from(size.options);
	const materialOptions = Array.from(material.options);
	const optionsOptions = Array.from(options.options);
	getDate('assets/valueDB.json')
		.then(res => {
			sizeOptions.forEach((option, i) => {
				option.setAttribute('value', res.size[i]);
			});
			materialOptions.forEach((option, i) => {
				option.setAttribute('value', res.material[i]);
			});
			optionsOptions.forEach((option, i) => {
				option.setAttribute('value', res.options[i]);
			});
		});

	function costCalculation() {
		sum = size.value * material.value + (+options.value);
		if (size.value == '' || material.value == '') {
			result.textContent = 'Пожалуйста виберете размер картины и материал картины!!';
		} else if (inputDiscount.value == promocod) {
			result.textContent = Math.round(sum * 0.7);
			costPicture.cost = Math.round(sum * 0.7);
		} else {
			costPicture.cost = sum;
			result.textContent = sum;
		}
	}

	[size, material, options].forEach(item => {
		item.addEventListener('change', costCalculation);
	});
	inputDiscount.addEventListener('input', costCalculation);
};
export default calc;