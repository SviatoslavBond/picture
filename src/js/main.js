'use strict';
import acordion from "./modules/acordion";
import calc from "./modules/calc";
import checkTextInputs from "./modules/checkTextInputs";
import filterImage from "./modules/filtration";
import forms from "./modules/forms";
import mask from "./modules/mask";
import modals from "./modules/modals";
import showMoreStyles from "./modules/showMoreStyles";
import showPicture from "./modules/showPicture";
import slider from "./modules/slider";

window.addEventListener('DOMContentLoaded', () => {
	const statePicture = {};
	modals();
	slider('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
	slider('.main-slider-item', 'vertical');
	forms(statePicture);
	mask('[name="phone"]');
	checkTextInputs('[name="name"]');
	checkTextInputs('[name="message"]');
	showMoreStyles('.button-styles', '.styles .row');
	calc(statePicture);
	filterImage();
	showPicture();
	acordion('.accordion-heading', '.accordion-block');
});
