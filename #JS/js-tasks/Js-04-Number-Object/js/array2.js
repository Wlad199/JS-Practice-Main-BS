/*
? 1 Часть =================//
		
		1. Форматируем данные до нормального вида (Избавиться от пробелов в имени)
		1.1 Цена должна быть только числом (без букв!!!). Два знака после запятой
		1.2 Формируем финальную цену, учитывая скидку(finalPrice: 1000)
		1.3 hashTags должен быть всегда плоским массивом (плоским)
		1.4 Если нет хэштегов - вывести пустой массив

		const discounts = [
				[5, { value: 100, cond: 150 }], 
				[10, 200],
				[15, 300],
				[20, 500],
		];

		const games = [
				{
						id: 1,
						name: ' death stranging   ',
						price: '1000rub',
						description: 'Компьютерная игра в жанре action с открытым миром, разработанная...',
						link: 'https://ru.wikipedia.org/wiki/Death_Stranding',
						discountType: null,
						hashTags: ['Шутер', '', ['Приключения,Доставка еды']],
				},
				{
						id: 2,
						name: 'the last of us   ',
						price: 300,
						description: 'Компьютерная игра в жанре action-adventure с элементами survival horror...',
						link: 'https://ru.wikipedia.org/wiki/The_Last_of_Us',
						discountType: 20,
						hashTags: ['Стелс', 'Экшен', 'Приключения'],
				},
				{
						id: 3,
						name: 'death stranging',
						price: null,
						description: null,
						discountType: null,
						hashTags: [],
				},
				{
						id: 4,
						name: 'SHREK 2: THE GAME',
						price: '321',
						description: 'Игра про зеленого мужика, который всем нравится',
						discountType: 5,
						hashTags: [['Шутер,Приключения'], 'Хоррор', 'Криминал'],
				},
				{
						id: 5,
						name: 'GTA 3',
						price: 20.512830102,
						description: 'Игра про безумного мужика, который всем нравится',
						discountType: 5,
						hashTags: undefined,
				},
		];

 1часть (результат) ===//

 const formattedGames = [
		 {
				 id: 1,
				 name: 'death stranging',
				 finalPrice: 1000,
				 description: 'Компьютерная игра в жанре action с открытым миром, разработанная...',
				 link: 'https://ru.wikipedia.org/wiki/Death_Stranding',
				 hashTags: ['Шутер', 'Приключения', 'Доставка еды'],
		 }, 
		 {
				 id: 4,
				 name: 'SHREK 2: THE GAME',
				 finalPrice: 221, // Тут изменилась цена из-за скидки
				 description: 'Игра про зеленого мужика, который всем нравится',
				 hashTags: ['Шутер', 'Приключения', 'Хоррор', 'Криминал'],
		 },
		 {
				 id: 5,
				 name: 'GTA 3',
				 finalPrice: 20.51, // Цена не изменилась, так как условие скидки не проходит
				 description: 'Игра про безумного мужика, который всем нравится',
				 hashTags: [],
		 },
 ];

? 2 Часть =================//

	2. Формируем массив с проблемными играми
 Выводим в консоль данные, про эти проблемные игры в виде:
 discountType сравниваем с массивом скидок.
 В случае ошибки (стоит меньше 0) сформировать новый массив бракованных товаров (problemGames)
 С указанием причины:
 (reasons: ['Цена уходит в минус'],) ('Игра "the last of us" имеет проблемы с данными: Цена уходит в минус.')
 Туда же добавить повторяющиеся игры и с плохими данными (null) ('Игра "death stranging" имеет проблемы с данными: Дубликат, Отсутствие данных.')
 Выводить только оригинальные данные (без скидок)


 const problemGames = [
		 {
				 id: 2,
				 reasons: ['Цена уходит в минус'],
				 name: 'the last of us   ',
				 price: 300,
				 description: 'Компьютерная игра в жанре action-adventure с элементами survival horror...',
				 link: 'https://ru.wikipedia.org/wiki/The_Last_of_Us',
				 discountType: 20,
				 hashTags: ['Стелс', 'Экшен', 'Приключения'],
		 },
		 {
				 id: 3,
				 reasons: ['Дубликат'],
				 name: 'death stranging',
				 price: null,
				 description: null,
				 discountType: null,
				 hashTags: [],
		 },
 ];

? 3 Часть =================//

 3. Формируем список жанров (Ключ - название жанра. Значение - id игры)
 3.1. Название жанров мы должны вытащить из массива игр. А не формировать руками.
 Создать пустой массив и заполнить его
 Пройтись по массиву отформатированных! игр и вывести каждый хэштег (значение - id игры)
 Сделать проверку: если хэш уже есть в новом массиве - то добавляем еще один ID
 const genres = {
		 'Шутер': [1, 4],
		 'Приключения': [1, 4],
		 'Доставка еды': [1],
		 'Хоррор': [4],
		 'Криминал': [4],
 };
 
	*/


const discounts = [
	[5, { value: 100, cond: 150 }],
	[10, 200],
	[15, 300],
	[20, 500],
];

const games = [
	{
		id: 1,
		name: ' death stranging   ',
		price: '1000rub',
		description: 'Компьютерная игра в жанре action с открытым миром, разработанная...',
		link: 'https://ru.wikipedia.org/wiki/Death_Stranding',
		discountType: null,
		hashTags: ['Шутер', '', ['Приключения,Доставка еды']],
	},
	{
		id: 2,
		name: 'the last of us   ',
		price: 300,
		description: 'Компьютерная игра в жанре action-adventure с элементами survival horror...',
		link: 'https://ru.wikipedia.org/wiki/The_Last_of_Us',
		discountType: 20,
		hashTags: ['Стелс', 'Экшен', 'Приключения'],
	},
	{
		id: 3,
		name: 'death stranging',
		price: null,
		description: null,
		discountType: null,
		hashTags: [],
	},
	{
		id: 4,
		name: 'SHREK 2: THE GAME',
		price: '321',
		description: 'Игра про зеленого мужика, который всем нравится',
		discountType: 5,
		hashTags: [['Шутер,Приключения'], 'Хоррор', 'Криминал'],
	},
	{
		id: 5,
		name: 'GTA 3',
		price: 20.512830102,
		description: 'Игра про безумного мужика, который всем нравится',
		discountType: 5,
		hashTags: undefined,
	},
];


//! Решение ====================================================================================================//


const formattedGames = [];
const problemGames = [];

games.forEach((elem) => {

	const price = !elem.price ? 0 : parseFloat(elem.price)

	// Еали условие верно запишем его значение в константу
	const discountData = discounts.find((discount) => {

		const discountValue = discount[1];

		// Если скидка не число, а массив с ключем cond и он больше цены - то его игнорируем
		if (typeof discountValue !== 'number' && discountValue.cond > price) {
			return false
		}
		if (discount[0] === elem.discountType) {
			return true
		}
	})

	// проверяем на сущаствование
	const discountValue = Array.isArray(discountData)
		? discountData[1]
		: 0

	const numericDiscount = (typeof discountValue === 'number')
		? discountValue
		: discountValue.value

	// Создаем новый объект
	const newGame = {
		id: elem.id,
		name: elem.name.trim(),
		price: Number(price.toFixed(2)),
		fullPrice: Number(price.toFixed(2)) - numericDiscount,
		description: elem.description,
	}
	// Добавляем ссылку только если она есть
	if ('link' in elem) {
		newGame.link = elem.link
	}

	// Если Хэшей нет - то пустой массив
	if (Array.isArray(elem.hashTags)) {
		// Делаем плоским и фильтруем пустые данные
		newGame.hashTags = elem.hashTags.flat(Infinity).filter((tags) => {
			if (tags.length > 0) {
				return true
			}
		})
			// Лечим склеенные Хэши
			.reduce((acc, tags) => {
				const split = tags.split(',');
				split.forEach((value) => {
					acc.push(value);
				})
				return acc
			}, [])
	}
	else {
		newGame.hashTags = [];
	}

	// Если стоимость отрицательная - отправляем в problemGames без изменений
	if (newGame.fullPrice < 0) {
		const reasons = ['Цена уходит в минус'];
		const gameWithReasons = {
			reasons,
			...elem,
		}
		problemGames.push(gameWithReasons)
		return
	}

	// Проверка на дубликаты
	const isDublicat = formattedGames.some((formattedGames) => {
		if (newGame.name === formattedGames.name) {
			return true
		}
	})
	if (isDublicat) {
		const reasons = ['Дубликат']
		const gameWithReasons = {
			reasons,
			...elem,
		}
		problemGames.push(gameWithReasons)
	} else {
		formattedGames.push(newGame);
	}
})

// Выводим отчет почему игра попала в список проблемных
problemGames.forEach((elem) => {
	const problem = elem.reasons.join(', ');
	console.warn(`Игра ${elem.name.trim()} имеет проблемы с данными: ${problem}`)
})

// Выводим массив с жанрами и id
const genres = formattedGames.reduce((acc, game) => {
	game.hashTags.forEach((tag) => {
		if (tag in acc) {
			acc[tag].push(game.id)
		} else {
			acc[tag] = [game.id]
		}
	})
	return acc
}, {})


console.log(formattedGames)
console.log(problemGames)
console.log(genres)