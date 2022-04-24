const modalBtn = document.querySelector('.modal__button');
const modal = document.querySelector('.modal');
const courseButton = document.querySelector('.course__button');
const modalInner = document.querySelector('.modal__inner');

modalBtn.addEventListener('click', () => {
	modal.style.display = 'flex'
});
courseButton.addEventListener('click', () => {
	modal.style.display = 'flex'
});
modal.addEventListener('click', (event) => {
	const modalContent = event.target.closest('.modal__inner');
	if (!modalContent) {
		modal.style.display = '';
	};
});

const closedBtn = document.createElement('img');
closedBtn.classList.add('close');
modalInner.prepend(closedBtn);
    closedBtn.style.cssText = `
        width: 20px;
        height: 20px;
        margin-left: 110%;
        background-image: url(img/close1.svg);
        cursor: pointer;
        border-radius: 50%;
        border: 1px solid #fff;
	`;
closedBtn.addEventListener('click', () => {
	modal.style.display = ''
});