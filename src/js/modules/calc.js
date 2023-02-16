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
		const selectTextValue = target.options[target.selectedIndex].textContent.trim();
		target == size ? state.size = selectTextValue : false;
		target == material ? state.material = selectTextValue : false;
		target == options ? state.option = selectTextValue : false;
		target == inputDiscount && inputDiscount.value != '' ? state.promocod = target.value.trim() : false;
		sum = size.value * material.value + (+options.value);

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
	function getValue(url, event) {
		const target = event.target;
		const textValue = target.options[target.selectedIndex].textContent.trim();
		getDate(url)
			.then(res => {
				target.options[target.selectedIndex].setAttribute('value', res[textValue]);
				costCalculation(target);
			});
	}

	size.addEventListener('change', function (e) {
		getValue('http://localhost:3000/size', e);
	});
	material.addEventListener('change', function (e) {
		getValue('http://localhost:3000/material', e);
	});
	options.addEventListener('change', function (e) {
		getValue('http://localhost:3000/options', e);
	});

	inputDiscount.addEventListener('input', costCalculation);

};
export default calc;