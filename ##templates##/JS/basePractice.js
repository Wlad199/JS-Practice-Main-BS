/*

! slice splice
! bind apply call
! axios
! try - catch ? async await

! Рекурсия
! Замыкания

! Получить данные с сайта разными способами и обработать
! функции-генераторы (q35)
! Тесты
! Bootstrap/TaiwindCSS
! Debugger
! Регулярные выражения и экранирование
! Основы Node.js (Создание сервера, встроенные модули)


факториал
числа Фибоначчи
уникальность элементов массива
проверка на сбалансированность скобок внутри текста
сортировки (mergeSort, insertionSort, bubbleSort, quickSort)
деревья (обход в глубину / обход в ширину / нахождение кратчайшего пути между узлами)


* ====================================================================================================//
* ====================================================================================================//

* Classes														.
* Promise														.
* Fetch															.
* async await												.
* try/catch/Error										.
* JSON															.
* Копирование объекта								.
* Date															.
* Деструктуризация									.
* Map Set														.
* localStorage											.
* switch case												.
* get и set													.


* ====================================================================================================//
! ====================================================================================================//
* Class==============================================================//
1. Создать класс, добавить конструктор (name, pass)
2. Добавить метод checkPass
3. Расширить класс и добавить методов
4. Добавить статические методы и свойства
5. Проверить принадлежит ли объект классу
6. Проверить является ли свойство собственным или унаследованным
7. Проверить цепочку прототипов

* Promise ===========================================================//
1. Создать 2 промиса успешный и неуспешный
2. Добавить методы then & catch для вывода результата
	Сделать это через then(func1, func2) и через catch
3. Добавить метод finally с сообщением о завершении промиса
4. Создать два промиса и вывести в консоль через Promise.all (allSettled, race, any)
	('https://jsonplaceholder.typicode.com/posts')
	('https://jsonplaceholder.typicode.com/todos')
	Проделать это также через ф-ии
5. Создать ф-ю, showUser('https://jsonplaceholder.typicode.com/users/')
	Принимает через промпт id от 1 до 10
	Выводит имя пользователя через алерт
	Сделать проверку на 404 вывести 'User is not found! 404'

todo Promise 
Создаем промис
let promiseOne = new Promise((resolve, reject) => {
	resolve('SUCCSESS!!!')
	reject('ERROR!!!')
})

	Обрабатываем через then
promiseOne.then(
	value => console.log(value),
	error => console.log(error)
)
	ИЛИ Обрабатываем через catch
promiseOne.catch(
	err => console.log(err)
)
	Обрабатываем finally
promiseOne.finally(() => console.log('finish'))

## 4 =================//
const a1 = new Promise((resolve, reject) => {
	fetch('https://jsonplaceholder.typicode.com/posts/1')
	.then(data => resolve(data.json()))
	.catch(err => reject(err))
})

const a2 = new Promise((resolve, reject) => {
	fetch('https://jsonplaceholder.typicode.com/posts/2')
	.then(data => resolve(data.json()))
	.catch(err => reject(err))
})

const a3 = Promise.all([a1, a2])
.then((values) => console.log(values))

## 5 =================//
function showUser(url) {
	let userName = prompt('Give us user`s ID from 0 to 10', 1)
	return new Promise((resolve, reject) => {
		fetch(`${url}${userName}`)
			.then(response => {
				if (response.status === 404) {
					throw new Error('User is not found! ' + response.status)
				} else {
					resolve(response.json())
				}
			})
			.catch(error => reject(error))
	})
}
showUser('https://jsonplaceholder.typicode.com/users/')
	.then(data => alert(data.name))
	.catch(error => alert(error))

* fetch (https://jsonplaceholder.typicode.com/) ====================//
1. Сделать fetch запрос на https://jsonplaceholder.typicode.com/todos
2. вывести в консоль статус, ok и url
3. Сделать проверку на статус 200 или ok
4. Преобразовать данные из json
	Добавить методы then & catch для вывода результата
5. Отправить post на 'https://jsonplaceholder.typicode.com/posts'
	с объектом: const newPost = {	userId: 10,	id: 101, title: 'This is my first post', body: 'post text'}

todo fetch
fetch('https://jsonplaceholder.typicode.com/todos')
	.then(response => {
		if (response.status === 200) {
			return response.json()
		} else {
			console.log(error)
		}
	})
	.then(data => console.log(data))
	.catch(err => console.warn(err))

##4
fetch('https://jsonplaceholder.typicode.com/posts', {
	method: 'POST',
	body: JSON.stringify(newPost)
})

* async await===================================================//
1. Переписать fetch на async await
2. Отловить ошибки с помощью try catch
	Вывести в консоль ошибку и текст ошибки через err.message
2. Переписать #5 из promise

todo async await
async function fetchTodos(url) {
	try {
		const response = await fetch(url)
		const json = await response.json()
		console.log(json)
	} catch (err) {
		console.log(err.message)
	}
}

fetchTodos('https://jsonplaceholder.typicode.com/todos')

## 5 =================//
async function showUser(url) {
	let userName = prompt('Give us user`s ID from 0 to 10', 1)
	const response = await fetch(`${url}${userName}`)
	if (response.status === 200) {
		const data = await response.json()
		alert(data.name)
		return data
	}
	throw new Error('User is not found! ' + response.status)
}
showUser('https://jsonplaceholder.typicode.com/users/')
	.catch(err => alert(err))

* try/catch/Error  =============================================//
1. Написать try catch
	В блоке try пробросить ошибку, 
	В catch обработать ее (вывести сообщение ошибки, ее имя и строку с ошибкой)
	В блоке finally вывести любое сообщение

todo try/catch/Error
try {
	throw new Error('errrroooorrr!!!!')
} catch (err) {
	console.warn(err.message)
	console.warn(err.name)
	console.warn(err.stack);
} finally {
	console.log('this is finally')
}

* JSON =====================================================//
Распарсить let json = '{ "age": 30 }'
	Проверить наличие свойства name
	В случае отсутствия пробросить синтаксическую ошибку
	В catch отловить только SyntaxError и вывести сообщение из ошибки
	Остальные ошибки пробросить дальше

todo JSON
let json = '{ "age": 30 }'
try {
	let user = JSON.parse(json)
	if (!user.name) {
		throw new SyntaxError('There is no name!!!')
	}
} catch (err) {
	if (err.name == 'SyntaxError') {
		console.warn(err.message);
	} else {
		throw err
	}
}

* Копирование объекта ==========================================//
1. Создать объект и скопировать его по ссылке
Создать объект с вложенным объектом и скопировать его

2. Создать функцию, принимающую в качестве параметров объект user
и увеличивающую возраст на 1год
Не мутировать исходный объект!!!
Вернуть новый объект

todo Копирование объекта
Изменения внутри объекта будут видны всем у кого есть ссылка на этот объект.
	Прямое изменение данных объекта называется мутирование.
	Лучше стараться избегать мутации объекта, т.к это может приводить к неочевидным ошибкам
Чтобы безопасно менять ссылочный тип данных его необходимо предварительно скопировать.
	Таким образом будет создана другая ссылка и любые изменения не затронут старый объект
	1. const person2 = Object.assign({}, person) - Вложенные объекты не копируются
	2. const person2 = {... person} - Вложенные объекты не копируются
	3. const person2 = JSON.parse(JSON.stringify(person))
	4. const person2 = structuredClone(person)

* Date ===========================================================//
 https://learn.javascript.ru/date#sozdanie

6 Февраля 2002 15.30
4 Ноября 1992 02.15
15 Октября 1966 18.45
29 Июля 1970 12.40

unix1 = 1718021780876
unix2 = 1266516198435

ISO = 2017-01-26T15:30

1.Получить текущее время
		Перевести в Unix - формат
		Перевести в ISO - формат
		Получить завтрашний день
		Получить вчерашний день
2.Записать даты в константы
		Перевести в Unix - формат
		Перевести в ISO - формат
		переконверт. более читаемый формат (строчный)
		переконверт. дату с учетом языка
		переконверт. время с учетом языка
		переконверт. дату и время с учетом языка
		вывести отдельно: год, месяц, день, часы, минуты, секунды, миллисекунды

3.Получить текущее время Unix - формате (таймстамп) 2-я способами
		Переконвертировать в обычный формат
		Переконвертировать в ISO формат

4.Получить текущее время ISO - формате 
		Переконвертировать в обычный формат
		Переконвертировать в Unix формат
5.Записать даты в константы

6. Задачи из учебника: https://learn.javascript.ru/date

todo Date 
? 1 =================//
const currentTime = new Date()
console.log(currentTime)
console.log(currentTime.getTime())
console.log(currentTime.toISOString())

const tomorrow = new Date()
tomorrow.setDate(tomorrow.getDate() + 1)

? 2 =================//
const o = new Date(2002, 1, 6, 15, 30)

console.log(o.getTime())
console.log(o.toISOString())
console.log(o.toDateString())
console.log(o.toLocaleDateString('ru'))
console.log(o.toLocaleTimeString('ru'))
console.log(o.toLocaleString('ru'))

console.log(o.getFullYear())
console.log(o.getMonth())
console.log(o.getDay())
console.log(o.getHours())
console.log(o.getMinutes())
console.log(o.getSeconds())
console.log(o.getMilliseconds())

? 3 Unix =================//
const time = Date.now()
const time = new Date().getTime()

console.log(time)
console.log(new Date(time).toISOString())
console.log(new Date(time))

? 4 ISO =================//
const current = new Date()
const currentIso = new Date().toISOString()

console.log(current)
console.log(currentIso)
console.log(new Date(currentIso).getTime())


* Деструктурирующее присваивание ======================================//
1. Деструктуризировать и сделать зациту от undefined (во вложенном тоже)
	Проигноривать одно из значений
	Задать значения поумолчанию
		const numbers = [1, 2, [3, 4], 5, 6, 7]

2. Деструктуризировать и сделать зациту от undefined (Значения поумолчанию) 
	Переименовать. Задать значения поумолчанию
	Достать двойку из вложенного массива
	Достать a и b из вложенного объекта
		const obj = {a: 1, b: 2,	c: { a: 10, b: 15 }, d: 4, e: 5, n: [1, 2, 3]}

3. Деструктуризировать строку: 'This is some of string'
	Записать в объект user{}

4. Обменять значения
	let guest = "Jane";
	let admin = "Pete";

todo Деструктурирующее присваивание
1.	const [
			first = 0,
			second = 0,
			[deepFirst = 0, deepSecond = 0] = [],
			fourth = 0,
			...tail
		] = numbers || []

2. 	const {
		a = 0,
		b: newB = 0,
		c: { a: secondA = 0 } = {},
		n: [, deepSecond] = [],
		...tail
	} = obj || {}

3.	const [one, two, three, ...tail] = string.split(' ')
		const string = 'This is some of string'
		let user = {};
		[user.name, user.surName, ...tail] = string.split(' ')

4. [guest, admin] = [admin, guest]

* Set/Map  =======================================================//
##Создать Set. Создать Set с елементами внутри. 
Добавить эл. Удалить один эл. Проверить наличие эл.
Получить длину. Очистить Set. Перебрать.
Преобразовать с помощью Set: arr = [1,2,2,1,3,4,4, 'hello', 5, 4]
Преобразовать Set в обычный массив

##Создать Map. Создать Map с елементами внутри. 
Добавить эл-ты с ключами: строки, числа, былевы, объект
Добавить эл-ты через цепочку
Удалить один эл. Проверить наличие эл.
Получить длину. Очистить Map. 
Перебрать через keys, values, entries, for of, forEach.
Преобразовать объект с помощью Map: const obj = { name: 'Alex', age: 30 }
Преобразовать Map в обычный объект

todo Set 
const mySet = new Set()
mySet.add(1)
mySet.delete(2)
console.log(mySet.has(1))
console.log(mySet.size)
mySet.clear()
for (const item of mySet) {
	console.log(item)
}

arr = [1, 2, 2, 1, 3, 4, 4, 'hello', 5, 4]
const mySet2 = new Set(arr)
const myArr = Array.from(mySet2) / const myArr = [...mySet2]

todo Map
const myMap = new Map([[55, 'fff'], [66, 'sss']])
myMap.set("1", "str1")
	.set(1, "str2")
	.set(true, "str3")
console.log(myMap.get(true))
console.log(myMap.size)
myMap.delete(true)

const user = { name: 'Alex' }
myMap.set(user, 55)

console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())
for (const item of myMap) {
	console.log(item[1])
}
myMap.forEach(item => {
	console.log(item)
})

Преобразовать объект с помощью Map
const obj = { name: 'Alex', age: 30 }
const myMap2 = new Map(Object.entries(obj)) 

Преобразовать Map в обычный объект
const myObj = Object.fromEntries(myMap2)

* localStorage =========================================//
Записать в localStorage новые данные
Получить данные по ключу key.
Удалить данные с ключом key.
Удалить всё.
Получить ключ на заданной позиции.
Получить количество элементов в хранилище.
Перебрать localStorage, вывести ключи и значения

todo localStorage
localStorage.setItem('keyOne', 1)
localStorage.getItem('keyOne')
localStorage.removeItem('keyOne')
localStorage.clear()
const a = localStorage.key(0)
console.log(localStorage.length)

let keys = Object.keys(localStorage)
for (let key in keys) {
	console.log(keys[key], key)
}

* switch case =========================================//
Написать switch case 
a = 4. проверить на 3,4,5
Сделать без break

todo switch case
const a = 4
switch (a) {
	case 3:
		console.log('low')
		break
	case 4:
		console.log('exact')
	case 5:
		console.log('too much')
}

* get и set =========================================//
1. В объект const user = {name: 'Alex', surName: 'Smith'}
		добавить через get и set свойство fullName
2. Создать объект user с приватным свойством _name
	Доступ только через get и set.
	Сделать проверку на длину имени

todo get и set
1.	const user = {
			name: 'Alex',
			surName: 'Smith',
			get fullName() {
				return this.fullName = this.name + ' ' + this.surName
			},
			set fullName(value) {
				return [this.name, this.surName] = value.split(' ')
			}
		}

2.	const user = {
			get name() {
				return this._name
			},

			set name(value) {
				value.length > 4 ? this._name = value : alert(`It's too short name`)
			}
		}



! ====================================================================================================//
! SOLUTIONS ====================================================================================================//
! ====================================================================================================//

## Мутация массива через forEach =================//
const numbers = [1, 2, 3, 4, 5]

/Не мутирует 
numbers.forEach(e => e * 2)
/Мутирует 
numbers.forEach((e, i, arr) => arr[i] = e * 2)


## Ф-я сортировки массива объектов со значениями строк и чисел ========//
function sortCourses(courses, key) {
	const sortedCourses = [...courses]
	sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1))
	return sortedCourses
}

## Random function =================//
(Math.random() * (max - min + 1) + min);

## delete
Оператор delete возвращает логическое значение: true при успешном удалении, иначе - false.
Однако, переменные, объявленные с помощью ключевых слов, не могут быть удалены с помощью delete.

## Округление в низ
Math.floor(n)
(~~n)

## Запуск ф-ии по условию
if(a === 5){
	f01()
} else{
	f02()
}
или
(a===5 ? f01 : f02)()

? Callbach Hell ======================================================//
function fetchUserInfo(callback) {
	setTimeout(() => {
		const data = { id: 1, name: 'Alex' }
		callback(data)
	}, 1000)
}

function fetchUserGames(id, callback) {
	setTimeout(() => {
		const data = ['game1', 'game2']
		callback(data)
	}, 1000)
}

function run() {
	fetchUserInfo((userInfo) => {
		console.log(userInfo)
		fetchUserGames(userInfo.id, (userGames) => {
			console.log(userGames)
		})
	})
}

run()

## На промисах
function fetchUserData() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const data = { id: 1, name: 'Alex' }
			resolve(data)
		}, 1000)
	})
}

function fetchUserGames(id) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const data = ['game1', 'game2', 'game3']
			resolve(data)
		}, 1000)
	})
}

function run() {
	fetchUserData()
		.then((userData) => {
			console.log(userData)
			return fetchUserGames(userData.id)
		})
		.then((userGames) => {
			console.log(userGames)
		})
}

run()

## Promise example
function fetchPosts() {
	return new Promise((res, rej) => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(data => res(data.json()))
	})
}

function fetchTodos() {
	return new Promise((res, rej) => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then(data => res(data.json()))
	})
}

Promise.all([fetchPosts(), fetchTodos()])
	.then(data => {
		console.log(data[0])
		console.log(data[1])
	})
	.catch(message => console.log('Error', message))

? ====================================================================================================//





*/
