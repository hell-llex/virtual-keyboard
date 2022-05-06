const	lettersRu = ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.'];
const	lettersEn = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'z', 'x', 'c', 'v', 'b', 'n', 'm', ', ', '.', '/'];
const	numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='];
const	positionfunKey = {
	1: 'esc', 14: 'backspace', 15: 'tab', 28: 'symOr', 29: 'capslock', 41: 'enter', 42: 'shift', 53: 'shift', 54: 'arrow-up', 55: 'del', 56: 'ctrl', 57: 'win', 58: 'alt', 59: 'space', 60: 'alt', 61: 'ctrl', 62: 'arrow-left', 63: 'arrow-down', 64: 'arrow-right',
};
const	body = document.querySelector('body');

body.insertAdjacentHTML('afterbegin', '<div class="container"><div class="admin-keyboard"><div class="info-keyboard"></div><div class="swich-lang"></div></div><input type="text" class="input-area"><div class="keyboard"></div></div>');

// let		container = document.querySelector('.container');
// let		admin = document.querySelector('.admin-keyboard');
const	keyboard = document.querySelector('.keyboard');
const	adminInfo = document.querySelector('.info-keyboard');
const	btnLang = document.querySelector('.swich-lang');

// eslint-disable-next-line prefer-destructuring
const 	log = console.log;

function createElem(a, b, c, f, n) {
	// a = какой тег создаем и вставляем, строка;
	// b = в какой элемент вставляем, заготовленная переменная;
	// с = методы вставки элемента, строка
	// f = класс созданого элемента, строка
	// n = кол-во элементов
	// пример createEl('div',body,'append','xyu',5)
	for (let index = 0; index < n; index++) {
		const elem = document.createElement(a);
		elem.className = f;
		if (c === 'append') b.append(elem);
		else if (c === 'prepend') b.prepend(elem);
		else if (c === 'before') b.before(elem);
		else if (c === 'after') b.after(elem);
	}
}

function fillKeys(a, b) {
	// a = параметр для заполнения(чем заполнять)
	// b = параметр который заполняется(что заполнять)
	b.forEach((item, i) => { item.innerHTML = `<p>${a[i]}</p>`; });
}

adminInfo.innerHTML = '<p>Hello, this is a 60% keyboard. I created this keyboard <br> running Windows 11 and optimized it for Android.</p>';

createElem('div', keyboard, 'append', 'row-keys', 5);
const	rowsKeys = document.querySelectorAll('.row-keys');

createElem('div', rowsKeys[0], 'prepend', 'key number', 14);
createElem('div', rowsKeys[1], 'prepend', 'key letter', 14);
createElem('div', rowsKeys[2], 'prepend', 'key letter', 13);
createElem('div', rowsKeys[3], 'prepend', 'key letter', 14);
createElem('div', rowsKeys[4], 'prepend', 'key', 9);
const	keys = document.querySelectorAll('.key');

for (let posKey in positionfunKey) {
	if (keys.length !== 0) {
		let x = posKey - 1;
		keys[x].className = `key ${positionfunKey[posKey]}`;
		if (positionfunKey[posKey] === 'symOr') keys[x].innerHTML = '<p>&#92 &#448 &#47</p>';
		else if (positionfunKey[posKey] === 'space') keys[x].innerHTML = '<p></p>';
		else if (positionfunKey[posKey] === 'arrow-up') keys[x].innerHTML = '<p>&#9650</p>';
		else if (positionfunKey[posKey] === 'arrow-left') keys[x].innerHTML = '<p>&#9668</p>';
		else if (positionfunKey[posKey] === 'arrow-down') keys[x].innerHTML = '<p>&#9660</p>';
		else if (positionfunKey[posKey] === 'arrow-right') keys[x].innerHTML = '<p>&#9658</p>';
		else keys[x].innerHTML = `<p>${positionfunKey[posKey].toUpperCase()}</p>`;
	}
}

const	keysLeter = document.querySelectorAll('.letter');
const	keysNumber = document.querySelectorAll('.number');

let lang = 'en';

if (localStorage.getItem('lang') === null) localStorage.setItem('lang', lang);
else lang = localStorage.getItem('lang');

function	swichLang() {
	if (lang === 'en') {
		fillKeys(lettersEn, keysLeter);
		btnLang.innerHTML = '<p>English</p>';
		btnLang.classList.add('en');
	} else {
		fillKeys(lettersRu, keysLeter);
		btnLang.innerHTML = '<p>Русский</p>';
		btnLang.classList.add('ru');
	}
	localStorage.setItem('lang', lang);
}

swichLang();
fillKeys(numbers, keysNumber);

// btnLang.classList.add('en');
btnLang.addEventListener('click', () => {
	if (lang === 'en') lang = 'ru'; else lang = 'en';
	swichLang();
});
