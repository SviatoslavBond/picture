import { getDate } from "../services/reqests";

const calc = (state) => {
	const size = document.querySelector('#size');
	const material = document.querySelector('#material');
	const options = document.querySelector('#options');
	const result = document.querySelector('.calc-price');
	const inputDiscount = document.querySelector('.promocode');
	let sum = 0;
	const promocod = 'IWANTPOPART';

	function costCalculation(target) {

		sum = size.value * material.value + (+options.value);
		target == size ? state.size = target.options[target.selectedIndex].textContent.trim() : false;
		target == material ? state.material = target.options[target.selectedIndex].textContent.trim() : false;
		target == options ? state.option = target.options[target.selectedIndex].textContent.trim() : false;
		target == inputDiscount && inputDiscount.value != '' ? state.promocod = target.value.trim() : false;

		if (size.value == '' || material.value == '') {
			result.textContent = 'Пожалуйста виберете размер картины и материал картины!!';
		} else if (inputDiscount.value == promocod) {
			result.textContent = Math.round(sum * 0.7);
			state.totalPrice = Math.round(sum * 0.7);
		} else {
			state.totalPrice = sum;
			result.textContent = sum;
		}
	}
	function getValue(url, attribute, event) {
		const target = event.target;
		const textValue = target.options[target.selectedIndex].textContent.trim();
		getDate(url)
			.then(res => {
				target.options[target.selectedIndex].setAttribute(attribute, res[textValue]);
				costCalculation(target);
			});
	}

	size.addEventListener('change', function (e) {
		getValue('http://localhost:3000/size', 'value', e);
	});
	material.addEventListener('change', function (e) {
		getValue('http://localhost:3000/material', 'value', e);
	});
	options.addEventListener('change', function (e) {
		getValue('http://localhost:3000/options', 'value', e);
	});

	inputDiscount.addEventListener('input', costCalculation);
};
export default calc;