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
