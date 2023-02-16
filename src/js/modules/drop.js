import { postDate } from "../services/reqests";


const drop = () => {
	const fileInputs = document.querySelectorAll('[name="upload"]');
	// const fileLoad = document.querySelectorAll('.file_upload > div');
	// console.log(fileInputs);
	['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
		fileInputs.forEach(input => {
			// console.log(eventName);
			input.addEventListener(eventName, preventDefaults, false);
		});
	});
	function preventDefaults(event) {
		event.preventDefault();
		event.stopPropagation();
	}
	function hightLight(item) {
		item.closest('.file_upload').style.backgroundColor = '#e2e18c85';
	}
	function unHightLight(item) {
		if (item.closest('.calc')) {
			item.closest('.file_upload').style.backgroundColor = '#ffff';

		} else {
			item.closest('.file_upload').style.backgroundColor = '#ededed';
		}
		if (item.closest('.file-upload-fetch')) {
			item.closest('.file_upload').style.backgroundColor = '#F2E2E2';
		}

	}

	['dragenter', 'dragover'].forEach(eventName => {
		fileInputs.forEach(input => {
			input.addEventListener(eventName, () => hightLight(input), false);
		});
	});

	['dragleave', 'drop'].forEach(eventName => {
		fileInputs.forEach(input => {
			input.addEventListener(eventName, () => unHightLight(input), false);
		});
	});
	fileInputs.forEach(input => {
		input.addEventListener('drop', (e) => {
			input.files = e.dataTransfer.files;
			// console.log(input.files[0]);
			if (input.closest('.file-upload-fetch')) {
				const formDate = new FormData();


				formDate.append('image', input.files[0]);


				console.log(Object.fromEntries(formDate.entries()));
				postDate('assets/server.php', formDate)
					.then(res => console.log(res));
			}


			const fileName = input.files[0].name.split('.');//сторюється масив з двох елементів :назва картинки і розширення
			let dots;
			fileName[0].length > 5 ? dots = '...' : dots = '.';
			const name = fileName[0].slice(0, 6) + dots + fileName[1];
			input.previousElementSibling.textContent = name;

		});
	});

};
export default drop;