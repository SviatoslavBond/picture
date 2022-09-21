'use strict';
import checkTextInputs from "./modules/checkTextInputs";
import forms from "./modules/forms";
import mask from "./modules/mask";
import modals from "./modules/modals";
import showMoreStyles from "./modules/showMoreStyles";
import slider from "./modules/slider";

window.addEventListener('DOMContentLoaded', () => {
	modals();
	slider('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
	slider('.main-slider-item', 'vertical');
	forms();
	mask('[name="phone"]');
	checkTextInputs('[name="name"]');
	// checkTextInputs('[name="message"]');
	showMoreStyles('.button-styles', '.styles .row');
});
