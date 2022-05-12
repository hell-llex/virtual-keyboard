const	lettersRu = ['ё', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.'];
const	lettersEn = ['`', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'];
const	keysCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE',
	'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL',
	'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ArrowUp', 'Delete', 'ControlLeft',
	'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

const	numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='];
const	numbersru = ['!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+'];
const	numbersen = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];
const	symbols = ['~', '', '', '', '', '', '', '', '', '', '', '{', '}', '', '', '', '', '', '', '', '', '', ':', '"', '', '', '', '', '', '', '', '<', '>', '?'];

const	positionfunKey = {
	14: 'backspace', 15: 'tab', 28: 'symOr', 29: 'capslock', 41: 'enter', 42: 'shift', 53: 'shift', 54: 'arrow-up', 55: 'del', 56: 'ctrl', 57: 'win', 58: 'alt', 59: 'space', 60: 'alt', 61: 'ctrl', 62: 'arrow-left', 63: 'arrow-down', 64: 'arrow-right',
};
const	body = document.querySelector('body');

body.insertAdjacentHTML('afterbegin', '<div class="container"><div class="admin-keyboard"><div class="info-keyboard"></div><div class="swich-lang"></div></div><textarea class="input-area" rows="3" autofocus></textarea><div class="keyboard"></div></div>');

const	keyboard = document.querySelector('.keyboard');
const	input = document.querySelector('.input-area');
const	adminInfo = document.querySelector('.info-keyboard');
const	btnLang = document.querySelector('.swich-lang');

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

adminInfo.innerHTML = '<p>I created this keyboard Windows 11. <br> Swich lang Shift + Alt. </p>';

createElem('div', keyboard, 'append', 'row-keys', 5);
const	rowsKeys = document.querySelectorAll('.row-keys');

createElem('div', rowsKeys[0], 'prepend', 'key number', 13);
createElem('div', rowsKeys[0], 'prepend', 'key letter', 1);
createElem('div', rowsKeys[1], 'prepend', 'key letter', 14);
createElem('div', rowsKeys[2], 'prepend', 'key letter', 13);
createElem('div', rowsKeys[3], 'prepend', 'key letter', 14);
createElem('div', rowsKeys[4], 'prepend', 'key', 9);

const	keys = document.querySelectorAll('.key');

for (const posKey in positionfunKey) {
	if (keys.length !== 0) {
		const x = posKey - 1;
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

keys.forEach((item, i) => {
	const elem = item;
	elem.dataset.keycode = keysCode[i];
});

const	keysLeter = document.querySelectorAll('.letter');
const	keysNumber = document.querySelectorAll('.number');

let lang = 'en';
if (localStorage.getItem('lang') === null) localStorage.setItem('lang', lang);
else lang = localStorage.getItem('lang');

function fillKeys(a, b, c) {
	// a = параметр для заполнения(чем заполнять)
	// b = параметр который заполняется(что заполнять)
	// c = заглавные и строчные "up, low"
	if (c === 'up') {
		if (b === keysNumber) {
			b.forEach((item, i) => {
				const elem = item;
				elem.innerHTML = `<p>${a[i]}</p>`;
			});
		} else if (document.querySelector('.shift').classList.contains('active-up')) {
			b.forEach((item, i) => {
				const elem = item;
				if ((i === 0 || i === 11 || i === 12 || i === 22
					|| i === 23 || i === 31 || i === 32 || i === 33) && lang === 'en') {
					elem.innerHTML = `<p>${symbols[i]}</p>`;
				} else {
					elem.innerHTML = `<p>${a[i].toUpperCase()}</p>`;
					if (i === 33) elem.innerHTML = '<p>,</p>';
				}
			});
		} else {
			b.forEach((item, i) => {
				const elem = item;
				elem.innerHTML = `<p>${a[i].toUpperCase()}</p>`;
			});
		}
	} else {
		b.forEach((item, i) => {
			const elem = item;
			elem.innerHTML = `<p>${a[i]}</p>`;
		});
	}
}

function	swichLang(a) {
	// a = или up или low
	if (lang === 'en') {
		fillKeys(lettersEn, keysLeter, a);
		if (a === 'up' && document.querySelector('.shift').classList.contains('active-up')) fillKeys(numbersen, keysNumber, a);
		else fillKeys(numbers, keysNumber, a);
		btnLang.innerHTML = '<p>English</p>';
		btnLang.classList.add('en');
	} else {
		fillKeys(lettersRu, keysLeter, a);
		if (a === 'up' && document.querySelector('.shift').classList.contains('active-up')) fillKeys(numbersru, keysNumber, a);
		else fillKeys(numbers, keysNumber, a);
		btnLang.innerHTML = '<p>Русский</p>';
		btnLang.classList.add('ru');
	}
	localStorage.setItem('lang', lang);
}

swichLang('low');

btnLang.addEventListener('click', () => {
	if (lang === 'en') lang = 'ru'; else lang = 'en';
	if (document.querySelector('.capslock').classList.contains('active-up') || document.querySelector('.shift').classList.contains('active-up')) {
		swichLang('up');
	} else swichLang('low');
});

let startSel = 0;
let endSel = 0;
input.addEventListener('click', () => {
	startSel = input.selectionStart;
	endSel = input.selectionEnd;
});

keyboard.addEventListener('click', (event) => {
	input.focus();
	startSel = input.selectionStart;
	endSel = input.selectionEnd;
	if (event.target.closest('.key.number') || event.target.closest('.key.letter')) {
		if (event.target.closest('.key[data-keycode = Digit7]') && document.querySelector('.shift').classList.contains('active-up') && lang === 'en') {
			input.value = `${input.value.substring(0, startSel)}&${input.value.substring(endSel)}`;
		} else if (event.target.closest('.key[data-keycode = Comma]') && document.querySelector('.shift').classList.contains('active-up') && lang === 'en') {
			input.value = `${input.value.substring(0, startSel)}<${input.value.substring(endSel)}`;
		} else if (event.target.closest('.key[data-keycode = Period]') && document.querySelector('.shift').classList.contains('active-up') && lang === 'en') {
			input.value = `${input.value.substring(0, startSel)}>${input.value.substring(endSel)}`;
		} else {
			input.value = input.value.substring(0, startSel) + event.target.closest('.key').firstElementChild.innerHTML + input.value.substring(endSel);
		}
		startSel += 1;
		endSel += 1;
		input.selectionStart = startSel;
		input.selectionEnd = startSel;
		if (document.querySelector('.shift').classList.contains('active-up')) {
			document.querySelector('.shift[data-keycode = ShiftLeft]').classList.remove('active-up');
			document.querySelector('.shift[data-keycode = ShiftRight]').classList.remove('active-up');
			swichLang('low');
		}
	} else if (event.target.closest('.key.backspace') || event.target.closest('.key.del')) {
		if (startSel === endSel && event.target.closest('.key.backspace')) {
			input.value = input.value.substring(0, startSel - 1) + input.value.substring(endSel);
			if (startSel !== 0) {
				startSel -= 1;
				endSel -= 1;
			}
			input.selectionStart = startSel;
			input.selectionEnd = startSel;
		} else if (startSel === endSel && event.target.closest('.key.del')) {
			input.value = input.value.substring(0, startSel) + input.value.substring(endSel + 1);
			if (startSel !== 0) startSel = endSel++;
			input.selectionStart = startSel;
			input.selectionEnd = startSel;
		} else {
			input.value = input.value.slice(0, startSel) + input.value.slice(endSel);
			endSel = startSel;
			input.selectionStart = startSel;
			input.selectionEnd = startSel;
		}
	} else if (event.target.closest('.key.tab')) {
		input.value = `${input.value.substring(0, startSel)}\t${input.value.substring(endSel)}`;
		startSel += 1;
		endSel += 1;
		input.selectionStart = startSel;
		input.selectionEnd = startSel;
	} else if (event.target.closest('.key.enter')) {
		input.value = `${input.value.substring(0, startSel)}\n${input.value.substring(endSel)}`;
		startSel += 1;
		endSel += 1;
		input.selectionStart = startSel;
		input.selectionEnd = startSel;
	} else if (event.target.closest('.key.capslock')) {
		event.target.closest('.key.capslock').classList.toggle('active-up');
		if (event.target.closest('.key.capslock').classList.contains('active-up')) {
			swichLang('up');
		} else swichLang('low');
	} else if (event.target.closest('.key.shift')) {
		document.querySelector('.shift[data-keycode = ShiftLeft]').classList.toggle('active-up');
		document.querySelector('.shift[data-keycode = ShiftRight]').classList.toggle('active-up');
		if (event.target.closest('.key.shift').classList.contains('active-up')) {
			swichLang('up');
		} else swichLang('low');
	} else if (event.target.closest('.key.symOr')) {
		if (document.querySelector('.shift').classList.contains('active-up') && lang === 'en') {
			input.value = `${input.value.substring(0, startSel)}|${input.value.substring(endSel)}`;
		} else if (document.querySelector('.shift').classList.contains('active-up') && lang === 'ru') {
			input.value = `${input.value.substring(0, startSel)}/${input.value.substring(endSel)}`;
		} else input.value = `${input.value.substring(0, startSel)}\\${input.value.substring(endSel)}`;
		startSel += 1;
		endSel += 1;
		input.selectionStart = startSel;
		input.selectionEnd = startSel;
	} else if (event.target.closest('.key.space')) {
		input.value = `${input.value.substring(0, startSel)} ${input.value.substring(endSel)}`;
		startSel += 1;
		endSel += 1;
		input.selectionStart = startSel;
		input.selectionEnd = startSel;
	} else if (event.target.closest('.key.arrow-up') || event.target.closest('.key.arrow-left') || event.target.closest('.key.arrow-down') || event.target.closest('.key.arrow-right')) {
		if (event.target.closest('.key.arrow-up')) {
			input.value = `${input.value.substring(0, startSel)}↑${input.value.substring(endSel)}`;
			startSel += 1;
			endSel += 1;
			input.selectionStart = startSel;
			input.selectionEnd = startSel;
		}
		if (event.target.closest('.key.arrow-down')) {
			input.value = `${input.value.substring(0, startSel)}↓${input.value.substring(endSel)}`;
			startSel += 1;
			endSel += 1;
			input.selectionStart = startSel;
			input.selectionEnd = startSel;
		}
		if (event.target.closest('.key.arrow-left')) {
			input.value = `${input.value.substring(0, startSel)}←${input.value.substring(endSel)}`;
			startSel += 1;
			endSel += 1;
			input.selectionStart = startSel;
			input.selectionEnd = startSel;
		}
		if (event.target.closest('.key.arrow-right')) {
			input.value = `${input.value.substring(0, startSel)}→${input.value.substring(endSel)}`;
			startSel += 1;
			endSel += 1;
			input.selectionStart = startSel;
			input.selectionEnd = startSel;
		}
	}
	if (event.target.closest('.key.alt') && document.querySelector('.shift').classList.contains('active-up')) {
		if (lang === 'en') lang = 'ru'; else lang = 'en';
		if (document.querySelector('.capslock').classList.contains('active-up') || document.querySelector('.shift').classList.contains('active-up')) {
			swichLang('up');
		} else swichLang('low');
		document.querySelector('.shift[data-keycode = ShiftLeft]').classList.remove('active-up');
		document.querySelector('.shift[data-keycode = ShiftRight]').classList.remove('active-up');
		swichLang('low');
	}
	if (event.target.closest('.key') && document.querySelector('.shift').classList.contains('active-up') && !event.target.closest('.key.shift')) {
		document.querySelector('.shift[data-keycode = ShiftLeft]').classList.remove('active-up');
		document.querySelector('.shift[data-keycode = ShiftRight]').classList.remove('active-up');
		swichLang('low');
	}
});

window.addEventListener('keydown', (event) => {
	startSel = input.selectionStart;
	endSel = input.selectionEnd;
	input.focus();
	if (event.code === 'Tab' || event.code === 'AltLeft' || event.code === 'AltRight' || event.code === 'ArrowUp' || event.code === 'ArrowDown' || event.code === 'ArrowLeft' || event.code === 'ArrowRight') {
		event.preventDefault();
	}
	if (event.code === 'Tab') {
		input.value = `${input.value.substring(0, startSel)}\t${input.value.substring(endSel)}`;
		startSel += 1;
		endSel += 1;
		input.selectionStart = startSel;
		input.selectionEnd = startSel;
	}
	if (event.code === 'ArrowUp') {
		input.value = `${input.value.substring(0, startSel)}↑${input.value.substring(endSel)}`;
		startSel += 1;
		endSel += 1;
		input.selectionStart = startSel;
		input.selectionEnd = startSel;
	}
	if (event.code === 'ArrowDown') {
		input.value = `${input.value.substring(0, startSel)}↓${input.value.substring(endSel)}`;
		startSel += 1;
		endSel += 1;
		input.selectionStart = startSel;
		input.selectionEnd = startSel;
	}
	if (event.code === 'ArrowLeft') {
		input.value = `${input.value.substring(0, startSel)}←${input.value.substring(endSel)}`;
		startSel += 1;
		endSel += 1;
		input.selectionStart = startSel;
		input.selectionEnd = startSel;
	}
	if (event.code === 'ArrowRight') {
		input.value = `${input.value.substring(0, startSel)}→${input.value.substring(endSel)}`;
		startSel += 1;
		endSel += 1;
		input.selectionStart = startSel;
		input.selectionEnd = startSel;
	}
	if (event.code === 'CapsLock') {
		document.querySelector('.capslock').classList.toggle('active-up');
		if (document.querySelector('.capslock').classList.contains('active-up')) {
			swichLang('up');
		} else {
			swichLang('low');
		}
	} else if (event.code === 'AltLeft' && event.shiftKey) {
		if (lang === 'en') lang = 'ru'; else lang = 'en';
		if (document.querySelector('.shift[data-keycode = ShiftLeft]').classList.add('active-up')) {
			swichLang('up');
		} else swichLang('low');
		document.querySelector(`.key[data-keycode = ${event.code}]`).classList.add('active');
	} else if ((event.code === 'ShiftLeft' || event.code === 'ShiftRight') && event.code !== 'AltLeft') {
		document.querySelector('.shift[data-keycode = ShiftLeft]').classList.add('active-up');
		document.querySelector('.shift[data-keycode = ShiftRight]').classList.add('active-up');
		if (document.querySelector('.key[data-keycode = KeyZ] > p').outerHTML === '<p>я</p>' || document.querySelector('.key[data-keycode = KeyZ] > p').outerHTML === '<p>z</p>') {
			swichLang('up');
		}
		document.querySelector(`.key[data-keycode = ${event.code}]`).classList.add('active');
	} else {
		document.querySelector(`.key[data-keycode = ${event.code}]`).classList.add('active');
	}
});
document.addEventListener('keyup', (ev) => {
	if (ev.code === 'ShiftLeft' || ev.code === 'ShiftRight') {
		document.querySelector('.shift[data-keycode = ShiftLeft]').classList.remove('active-up', 'active');
		document.querySelector('.shift[data-keycode = ShiftRight]').classList.remove('active-up', 'active');
		swichLang('low');
	} else document.querySelector(`.key[data-keycode = ${ev.code}]`).classList.remove('active');
});
