import { getDate } from "../services/reqests";

const showMoreStyles = (trigger, wrapper) => {
	const stylesRow = document.querySelector(wrapper);
	const button = document.querySelector(trigger);

	const drawCards = (res) => {
		res.forEach(({ src, link, title }) => {
			stylesRow.innerHTML += `
			<div class="col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1 animated fadeInUp">
					<div class=styles-block>
						<img src=${src} alt>
						<h4>${title}</h4>
						<a href="${link}">Подробнее</a>
					</div>
				</div>
			`;
		});
	};
	button.addEventListener('click', async function () {
		await getDate('http://localhost:3000/styles')
			.then(drawCards)
			.catch((e) => console.log(e));
		this.remove();
	});

};
export default showMoreStyles; 