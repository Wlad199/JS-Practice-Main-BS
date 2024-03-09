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

let fullPrice = 0

//let userName = 'Alex'
//let userName = 'John'

let user

//user = {
//	name: 'Alex',
//	debt: 150
//}

//user = {
//	name: 'John',
//	debt: 650
//}


// if else =================//

//if (!user) {
//	console.log('Нет такого клиента')
//} else if (!user.name) {
//	console.log('Введите имя клиента')
//} else if (user.name === 'Alex') {
//	console.log(user.name)
//	calculateCost()
//} else if (user.name === 'John') {
//	console.log(user.name)
//	calculateCost()
//} else {
//	console.log(0.00)
//}


// switch case =================//

if (user) {
	switch (user.name) {
		case "Alex":
			console.log(user.name)
			calculateCost()
			break;
		case "John":
			console.log(user.name)
			calculateCost()
			break;

		default:
			console.log('Неизвестный пользователь')
			calculateCost()
			break;
	}
} else {
	console.log('Неизвестный пользователь')
	calculateCost()
}


function calculateCost() {

	for (i = 0; i < cart.length; i++) {
		console.log('Стоимость ' + cart[i].name + ' ' + cart[i].price * cart[i].count)
		const costProduct = cart[i].price * cart[i].count
		fullPrice += costProduct
	}
	if (user && user.debt) {
		console.log('Стоимость товаров: ' + fullPrice)
		fullPrice += user.debt
		console.log('Долг: ' + user.debt)
		console.log('Итоговая сумма: ' + fullPrice)
	} else {
		console.log('Итоговая сумма: ' + fullPrice)
	}
}
*/