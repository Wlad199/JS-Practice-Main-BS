/*
//https://www.youtube.com/watch?v=2mr7x0N_dt0&list=PL6NCtzCz-4pSu8N7QJlGyqE9pA8l2sZFg&index=3
1. Вывести массив в консоль
	Получить новости в переменные
	Вывести массив title subtitle в консоль
	Вывести массив keyword images link в консоль
	Вывести массив partners: title cite keyword в консоль
2. Проверка на существование масива (вывод окна: новостей нет)
	Проверка на null и undefined
	Проверка на date у новости (if in) (Вывести: title -  опубликованa ...), Если даты нет - без даты
	Если есть title и subtitle то вывести content (if in)
	Вывести катринку (проверить на ее наличие ubdefinded). Вывести все катринки
	Сделать проверку на наличие price, вывести если больше 1000 и добавить руб

3. Создать переменную (объект) TYPE с 'critical'и 'standart'
	(на if else и switch case и ? :) Вывести сообщение о типе новости для каждой новости
	При отсутсвии type выводить сообщение

4. Цикл for.
	Получить новости в переменные. Вывести массивы в консоль
	Вывести массив title subtitle в консоль
	Вывести массив keyword images link в консоль
	Вывести массив partners всех масивов: title cite keyword в консоль
	Пропустить новость с типом critical (if or continue)
	Если ести новость с типом critical не показывать новости вообще, а вывести сообщение (if or continue)
	Если ести новость с типом critical не показывать новости после данной, а вывести сообщение (if or continue)

*/


const news = [
	{
		title: 'I ate the meat',
		subtitle: 'at 8 a.m',
		date: 'tomorrow',
		type: 'standart',
		images: ['./kjsadbf', './dfvdfcas', 'http//kjsadvb'],
		link: ['http//skajbdv', 'http//kjsadvb'],

		partners: [{
			title: 'first 1 title',
			cite: 'hhtp//sdlfv.vj',
			keyword: ['ppppp', 'jjj', 'ggg']
		}, {
			title: 'first 2 title',
			cite: 'hhtp//sdlfsv.vj',
			keyword: ['ppppps', 'jjjs', 'gggs']
		}]
	},
	{
		title: 'I don\'t the meat',
		subtitle: 'at 9 p.m',
		content: 'This is content',
		price: 500,
		date: 'tomorrow',
		type: 'critical',
		images: ['./kjsadbf02', './dfvdfcas02'],
		link: ['http//skajbdv02', 'http//kjsadvb02'],

		partners: [{
			title: 'second 1 title',
			cite: 'hhtp//sdlfv.vj',
			keyword: ['ppppp02', 'jjj02', 'ggg02']
		}, {
			title: 'second 2 title',
			cite: 'hhtp//sdlfsv.vj',
			keyword: ['ppppps02', 'jjjs02', 'gggs02']
		}, {
			title: 'second 3 title',
			cite: 'hhtp//sddlfsv.vj',
			keyword: ['ppppwps02', 'jjjws02', 'gggws02']
		}]
	}, {
		title: "I'm vegan",
		subtitle: 'at 10 a.m',
		content: 'This is also content',
		price: 2500,
		type: 'important',
		images: ['./kjsadbf03', './dfvdfcas03'],
		link: ['http//skajbdv03', 'http//kjsadvb03'],

		partners: [{
			title: 'third 1 title',
			cite: 'hhtp//sdlfdv.vj',
			keyword: ['pppppq', 'jjqj', 'gqgg']
		}, {
			title: 'third 2 title',
			cite: 'hhtp//sdlfssv.vj',
			keyword: ['ppppfps', 'jjfjs', 'gfggs']
		}]
	}
]

/*
let sumImages
	
for (i = 0; i < news.length; i++) {
	
	for (j = 0; j < news[i].images.length; j++) {
		let images = news[i].images[j]
		sumImages += '; ' + images
	}
}
console.log('Пути всех картинок: ' + sumImages)
	
	
let allLinks = ' '
	
for (i = 0; i < news.length; i++) {
	const itemNews = news[i]
	//console.log(itemNews.link)
	for (j = 0; j < itemNews.link.length; j++) {
		//console.log(itemNews.link[j])
		let link = itemNews.link[j]
		allLinks += link + '; '
	}
}
	
console.log('Все ссылки:' + allLinks)
*/
/*
let allTitles = ' '
let allImages = ' '

const type = {
	ST: 'standart',
	IM: 'important',
	CR: 'critical'
}


if (typeof news == 'undefined' || news == null || typeof news !== 'object') {
	console.log('news does not exsists')
} else {

	for (i = 0; i < news.length; i++) {
		const partners = news[i].partners
		const itemNews = news[i]

		//if (partners) {
		//	partners.forEach(function (i) {
		//		allTitles += i.title + '; '
		//	})
		//}

		//console.log(itemNews)

		//if ('date' in itemNews) {
		//	console.log(itemNews.title + ' Опубликована в ' + itemNews.date)
		//} else {
		//	console.log('нет даты')
		//}

		//if (itemNews.title && itemNews.subtitle) {
		//	if (itemNews.content) {
		//		console.log(itemNews.content)
		//	}
		//}

		//if (itemNews.images) {
		//	for (j = 0; j < itemNews.images.length; j++) {
		//		allImages += itemNews.images[j] + '; '
		//	}
		//}
		//if (itemNews.price && itemNews.price < 1000) {
		//	console.log(itemNews.title + ': ' + itemNews.price + ' rub')
		//}


		//if (itemNews.type === type.ST) {
		//	console.log('Новость ' + (i + 1) + ' имеет тип: ' + itemNews.type)
		//} else if (itemNews.type === type.CR) {
		//	console.error('Новость ' + (i + 1) + ' имеет тип: ' + itemNews.type)
		//} else if (itemNews.type === type.IM) {
		//	console.warn('Новость ' + (i + 1) + ' имеет тип: ' + itemNews.type)
		//} else {
		//	console.log('Нет типа')
		//}

		//switch (itemNews.type) {
		//	case type.ST:
		//		console.log('Новость ' + (i + 1) + ' имеет тип: ' + itemNews.type)
		//		break;
		//	case type.CR:
		//		console.error('Новость ' + (i + 1) + ' имеет тип: ' + itemNews.type)
		//		break;
		//	case type.IM:
		//		console.warn('Новость ' + (i + 1) + ' имеет тип: ' + itemNews.type)
		//		break;

		//	default:
		//		console.log('Нет типа')
		//		break;
		//}

		//if (itemNews.type !== type.CR) {
		//	console.log(itemNews)
		//} else {
		//	console.log('Critical!!!')
		//	break
		//}


		//if (itemNews.type === type.CR) {
		//	console.log(itemNews)
		//	continue
		//}
	}
}
//console.log(allTitles)
//console.log(allImages)
*/