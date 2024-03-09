// Получить свойсва объекта и масива
/*
const TYPE = {
	CR: 'critical',
	NE: 'not-exactly',
	ST: 'standart'
}

const news = [
	{
		title: 'I ate the meat',
		subtitle: 'at 8 a.m',
		date: 'tomorrow',
		type: 'critical',
		images: ['./kjsadbf', './dfvdfcas'],
		link: ['skajbdv', 'kjsadvb'],

		partners: [{
			title: 'first title',
			cite: 'hhtp//sdlfv.vj',
			keyword: ['ppppp', 'jjj', 'ggg']
		}, {
			title: 'first title',
			cite: 'hhtp//sdlfsv.vj',
			keyword: ['ppppps', 'jjjs', 'gggs']
		}]
	},
	{
		title: 'othert',
		subtitle: 'at 18 a.m',
		type: 'critical',
		date: 'today',
		images: ['./kjsadbf', './dfvdfcas'],
		link: ['skajbdv', 'kjsadvb'],
		partners: [{
			title: 'first title',
			cite: 'our cite',
			keyword: ['tt', 'rr', 'dd']
		}, {
			title: 'first title',
			cite: 'our cite',
			keyword: ['tte', 'rre', 'dde']
		}
		]
	}
]

if (!news || news.length === 0) {
	console.log('There is nothing!!!')
}
else {
	const firstNews = news[0];
	const secondNews = news[1];

	? if/else =================//
	if ('date' in firstNews) {
		console.log('Published ' + firstNews.date + ' - ' + firstNews.title)
	}
	if ('date' in secondNews) {
		console.log('Published ' + secondNews.date + ' - ' + secondNews.title)
	}
	if (!('date' in secondNews)) {
		console.log('Nope!!!')
	}
	if ('title' in firstNews && 'subtitle' in firstNews) {
		console.log(firstNews.title + 'at ' + firstNews.subtitle)
	}
	if (firstNews.images.length !== 0) {
		console.log(firstNews.images[0])
	}
	console.log(news[0].title)
	console.log(news[1].title)

	? switch/case =================//
	let type = !firstNews.type ? TYPE.NE : firstNews.type

	switch (type) {
		case TYPE.ST:
			console.log('Standart')
			break
		case TYPE.CR:
			console.log('Critia')
			break
		case TYPE.NE:
			console.log('NE')
			break
		default:
			console.log('Nothing')
	}

	//? for =================//
	let hasCritical = false;

	for (i = 0; i < news.length; i++) {
		const newsItem = news[i]
		//if (newsItem.partners.length === 0) {
		//	continue
		//}
		console.log(newsItem)

		if (newsItem.type === TYPE.CR) {
			hasCritical = true
			break
		}


		//for (j = 0; j < newsItem.partners.length; j++) {
		//	const partner = newsItem.partners[j]
		//console.log(partner.title)
		//for (n = 0; n < partner.keyword.length; n++) {
		//	const keyword = partner.keyword[n]
		//	console.log(keyword)
		//}
		//}
	}
	if (hasCritical) {
		console.log('Crit!!!!!')
	}
}
*/


// Cart Costs ====================================================================================================//
/*
Посчитать стоимость каждого товара и сумму всех товаров
Написать функцию для рассчета
Добавить проверку по имени пользователя (if else) и проверку на долги пользователя
Объявить переменную внутри функции (const - return), присвоить переменной вне функции результат функции
*/
/*
const cart = [{
	name: 'Arbuz',
	price: 100,
	count: 1,
}, {
	name: 'Hleb',
	price: 30,
	count: 2,
}, {
	name: 'Moloko',
	price: 50,
	count: 3,
}, {
	name: 'Orange',
	price: 250,
	count: 2,
}]


const userName = 'Alex';
let final = 0;


if (userName === 'John') {
	const debt = 150
	final = calculateFinalPrice()
	final += debt

} else if (userName === 'Alex') {
	const debt = 250
	final = calculateFinalPrice()
	final += debt

} else {
	final = calculateFinalPrice()
}

console.log(final)

function calculateFinalPrice() {
	let finalPrice = 0
	for (i = 0; i < cart.length; i++) {
		const currentPrice = cart[i]
		finalPrice += (currentPrice.price * currentPrice.count);
	}
	return finalPrice
}
*/

//  ====================================================================================================//

/*
1. Вывести в консоль все ли через  for & foreEach
2. Вывести родителя, потомков и соседние елементы
3. Заменить контент с тегами и без тегов
4. Сделать проверку по тегу (tagName) и заменить контент
5. Создать и добавть новый тег в начало, конец, итд
6. Создать ul c li и вставить его
7. Сделать тоже самое (6) через insertAdjacentHTML

<div class="block">
	<ul class="list">
		<li class="item">1</li>
		<li class="item">2</li>
		<li class="item">3</li>
	</ul>
	<button class="button">CLICK!!!</button>
</div>
*/

/*
const element = document.querySelectorAll('ul')
const button = document.querySelector('.button')

for (i = 0; i < element.length; i++) {
	console.log(element[i])
}
const itemList = element[1]
itemList.textContent = 'New Text'
if (button.tagName === 'BUTTON') {
	itemList.nextElementSibling.innerHTML = '<button>YEP!!!</button>'
}
console.log(itemList.nextElementSibling)

console.log(element)

button.insertAdjacentHTML('afterend', `
<li>4</li>
<li>5</li>
`)
*/


// Css Attr ====================================================================================================//
/*

/ Attributes =================//

1. Получить атрибут элемента (getAttribute('href'))
2. Изменить атрибут атрибут элемента (setAttribute)
3. Проверить наличие атрибута (hasAttribute)
4. Удалить атрибут (removeAttribute)
5. Добавить свой атрибут
6. Получить атрибут элемента через dataset

/ Style =================//

1. Поменять цвет элементу
2. Добавить бэкграунд
3. Записать через cssText
4. Добавить класс через className (перезаписать/+=добавить)

/ FULL =================//
1. Создать div, a, button, list, input
2. Вставить их в html разными способами в разные места
3. Добавить/убрать/изменить классы
4. Добавить/убрать/изменить аттрибуты, получить значения в константы
5. Добавить стили разными методами
6. Добавить псевдоэлементы
*/


// События ====================================================================================================//

/*
1. Менять цвет кнопки при каждом клике
2. Снять обработчик после 5 кликов
3. Для input добавить слежение за вводом
4. Получть вводимый текст (e.target.value)
5. Запретить ввод '(' ')'
6. Переписать код на e.key и preventDefault()

*/
/*
const input = document.querySelector('input');
let prevValue = input.value;

input.addEventListener('input', (e) => {
	const userData = e.target.value;
	if (userData.includes('(') || userData.includes(')')) {
		input.value = prevValue
		return
	}

	input.value = userData
	prevValue = userData
})
*/

/*

/ Запретить ввод ')' и '(' =================//

const input = document.querySelector('input');
input.addEventListener('keydown', (e) => {
	if (e.key === ')' || e.key === '(') {
		e.preventDefault()
	}
})
*/
