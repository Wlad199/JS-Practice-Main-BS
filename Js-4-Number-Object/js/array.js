/*
 Array
 flat, forEach, concat, map, some, unshift, length, indexOf, toString, push, pop,
 includes, reduce, find, Array.isArray, filter, shift, reverse, join

 Массивы

	Создать массив
	Добавить/удалить жлементы в начало/конец (строки, булевые, числа, объекты)
	Проверить на тип массива
	Сложить массивы (concat)
	Проверить начичие элемента внутри
	Разбить строку на масив и обратно
	Создать массив с вложенными массивами и преобразовать в однородный (2 вложенность)
	Развернуть массив
	Отсортировать массив
	Обрезать (splice), (slice)
	Пройтись forEach
	Преобразовать массив с помощью map (Добавить префикс), (массив длин) Переписать под цикл

	/  =================//

	Из исходного массива получить массив имён
	Отфильтровать массив по возрасту больше 18 лет. Переписать под тернарный оператор
	Отфильтровать массив по имени Nick (find)
		const myArray = [{
			name: 'Alex',
			age: '26',
		}, {
			name: 'Nick',
			age: '17',
		}, {
			name: 'Rick',
			age: '19',
		},]

/  =================//

	Отфильтровать массив по элементам, начинающимся с 'J'
	const languages = ["Java", "TypeScript", "C#", "JavaScript", "Julia"]

/  =================//

	Вывести только объект в новый массив (find).
	Сделать проверку на наличие объекта в массиве (some) (includes)
	const myArray = [1, 2, '5', true, { name: 'Alex' }]

/  =================//

	Посчитать сумму с помощью for, forEach, reduce
	Получить ['1', '2', '3', '4', '5', '6', '7']

		const myArray = [1, 2, 3, 4, 5, 6, 7]

/  =================//

	Получить строку из масива (reduce)
	Получить: {Orange: 'Orange', Apple: 'Apple', Banana: 'Banana'}
						{name-Orange: 'Orange', name-Apple: 'Apple', name-Banana: 'Banana'}

	const test = ['Orange', 'Apple', 'Banana']

/  =================//

	Сделать однородный массив (через reduce, forEach) (как flat)
	Склеить в 1 строку
	const test = [['Orange'], ['Apple'], ['Banana']]

/  =================//

 Задача №1 (подсказка в файле help.txt)
		const fromYou = 'lesson,lessons,Для новичков,Для начинающих,Создать сайт,css,css3,Курсы по css';
		Решение в файле dz.js
		'#lesson #lessons #для_новичков #для_начинающих #создать_сайт #css #css3 #курсы_по_css';

/  =================//

 Вывести только новости с больше 100 лайков (Использовать ?)
 Найти людей, которые ее написали.
 Вывести в виде объекта { id: 2, title: 'Важная новость'}
	const data = [{
		id: 1,
		title: 'Новость дня',
		author: 'Alex',
		likes: 50
	}, {
		id: 2,
		title: 'Важная новость',
		author: 'Anna',
		likes: 150
	}, {
		id: 3,
		title: 'Важная новость #2',
		author: 'John',
		likes: 140
	},]

/  =================//

 2. [1,2,3,4,5] => 15 (forEach, reduce)

 3. ['my', 'name', 'is', 'Alex'] => 'my name is Alex'

 4. (includes/find/some/filter)
			const badAge = 20;
		[15, 10, 20, 30] - тут есть badAge? true/false

 5.
	Вывести пользователей (только имена) > 18 лет. (forEach/filter+map)

	[{
			name: 'Alex',
			age: 20,
	}, {
			name: 'Anna',
			age: 30,
	}, {
			name: 'John',
			age: 10
	}]
	
	/  =================//

	получить информацию про страны
			["В стране Гана +19 градусов. В составе такие города: Аккра, Тамале, Кумаси",
		 "В стране Гренландия -20 градусов. В составе такие города: Нуук, Какорток",
		 "В стране Мали +25 градусов. В составе такие города: Мопти, Бамако, Джене",
		 "В стране Дания -5 градусов. В составе такие города: Копенгаген",]

	найти самую жаркую и холодную страну
			Вывод: "Самая холодная страна - Гренландия"
			Вывод: "Самая жаркая страна - Мали"

	посчитать количество городов

			const countries = [{
				country: "Гана",
				weather: 10,
				warm: true,
				cities: ["Аккра", "Тамале", "Кумаси"],
		}, {
				country: "Гренландия",
				weather: 20,
				warm: false,
				cities: ["Нуук", "Какорток"],
		}, {
				country: "Мали",
				weather: 25,
				warm: true,
				cities: ["Мопти", "Бамако", "Джене"],
		}, {
				country: "Дания",
				weather: 5,
				warm: false,
				cities: ["Копенгаген"],
		}];
*/