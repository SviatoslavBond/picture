'use strict';
import calc from "./modules/calc";
import checkTextInputs from "./modules/checkTextInputs";
import forms from "./modules/forms";
import mask from "./modules/mask";
import modals from "./modules/modals";
import showMoreStyles from "./modules/showMoreStyles";
import slider from "./modules/slider";

window.addEventListener('DOMContentLoaded', () => {
	const costPicture = {};
	modals();
	slider('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
	slider('.main-slider-item', 'vertical');
	forms(costPicture);
	mask('[name="phone"]');
	checkTextInputs('[name="name"]');
	checkTextInputs('[name="message"]');
	showMoreStyles('.button-styles', '.styles .row');
	calc(costPicture);
});
