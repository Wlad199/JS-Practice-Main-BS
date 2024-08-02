/*

! slice splice
! Регулярные выражения и экранирование
! функции-генераторы (q35)
! Symbol
! Получить данные с сайта разными способами и обработать
! bind apply
! get set
! Map Set
! every / some
! Промисификация
! try - catch ? async await
! eval()
! switch case

! Рекурсия
! Замыкагия

! Тесты
! Bootstrap/TaiwindCSS
! Debugger
! Основы Node.js (Создание сервера, встроенные модули)


факториал
числа Фибоначчи
уникальность элементов массива
проверка на сбалансированность скобок внутри текста
сортировки (mergeSort, insertionSort, bubbleSort, quickSort)
деревья (обход в глубину / обход в ширину / нахождение кратчайшего пути между узлами)

* ====================================================================================================//
* ====================================================================================================//

* Classes
* Promise
* Fetch
* try/catch/Error
* JSON
* Копирование объекта
* Date
* Деструктуризация


* ====================================================================================================//
! ====================================================================================================//
* Class=====================//
1. Создать класс, добавить конструктор (name, pass)
2. Добавить метод checkPass
3. Расширить класс и добавить методов
4. Добавить статические методы и свойства
5. Проверить принадлежит ли объект классу
6. Проверить является ли свойство собственным или унаследованным
7. Проверить цепочку прототипов

* Promise =================//
1. Создать 2 промиса успешный и неуспешный
2. Добавить методы then & catch для вывода результата
	Сделать это через then(func1, func2) и через catch
3. Добавить метод finally с сообщением о завершении промиса

* fetch (https://jsonplaceholder.typicode.com/) ======//
1. Сделать fetch запрос на https://jsonplaceholder.typicode.com/todos
2. вывести в консоль статус и url
3. Преобразоапть данные из json
	Добавить методы then & catch для вывода результата

4. Переписать на async await
5. Отловить ошибки с помощью try catch
	Вывести в консоль ошибку и текст ошибки через err.message

todo ====================================================================================================//

? Promise =================//
/// Создаем промис
let promiseOne = new Promise((resolve, reject) => {
	resolve('SUCCSESS!!!')
	reject('ERROR!!!')
})

/// Обрабатываем через then
promiseOne.then(
	value => console.log(value),
	error => console.log(error)
)
/// ИЛИ Обрабатываем через catch
promiseOne.catch(
	err => console.log(err)
)
///Обрабатываем finally
promiseOne.finally(() => console.log('finish'))

? fetch =================//
/// Через then catch
fetch('https://jsonplaceholder.typicode.com/todos')
	.then(response => response.json())
	.then(json => console.log(json))
	.catch(err => console.log(err))

/// Через async await
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

* try/catch/Error  ==============//

Написать try catch
	В блоке try пробросить ошибку, 
	В catch обработать ее (вывести сообщение ошибки, ее имя и строку с ошибкой)
	В блоке finally вывести любое сообщение

todo answer try/catch/Error  =================//

try {
	throw new Error('errrroooorrr!!!!')
} catch (err) {
	console.warn(err.message)
	console.warn(err.name)
	console.warn(err.stack);
} finally {
	console.log('this is finally')
}

* JSON =================//

Распарсить let json = '{ "age": 30 }'
	Проверить наличие свойства name
	В случае отсутствия пробросить синтаксическую ошибку
	В catch отловить только SyntaxError и вывести сообщение из ошибки
	Остальные ошибки пробросить дальше


todo answer  =================//

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

* Копирование объекта ====================================================================================================//

1. Создать объект и скопировать его по ссылке
Создать объект с вложенным объектом и скопировать его

2. Создать функцию, принимающую в качестве параметров объект user
и увеличивающую возраст на 1год
Не мутировать исходный объект!!!
Вернуть новый объект

todo ================================

Изменения внутри объекта будут видны всем у кого есть ссылка на этот объект.
	Прямое изменение данных объекта называется мутирование.
	Лучше стараться избегать мутации объекта, т.к это может приводить к неочевидным ошибкам
Чтобы безопасно менять ссылочный тип данных его необходимо предварительно скопировать.
	Таким образом будет создана другая ссылка и любые изменения не затронут старый объект
	1. const person2 = Object.assign({}, person) - Вложенные объекты не копируются
	2. const person2 = {... person} - Вложенные объекты не копируются
	3. const person2 = JSON.parse(JSON.stringify(person))
	4. const person2 = structuredClone(person)

!  ============================================================================================//
* Date ========================================================================================//
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


todo answers  ================================================================================//
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


* Деструктурирующее присваивание =================//
1. Деструктуризировать и сделать зациту от undefined (во вложенном тоже)
	Проигноривать одно из значений
	Задать значения поумолчанию
		const numbers = [1, 2, [3, 4], 5, 6, 7]

2. Деструктуризировать и сделать зациту от undefined (Значения поумолчанию) 
	Переименовать. Задать значения поумолчанию
	Достать двойку из вложенного массива
	Достать a и b из вложенного объекта
		const obj = {a: 1, b: 2,	c: { a: 10, b: 15 }, d: 4, e: 5, n: [1, 2, 3]}

todo Деструктурирующее присваивание =================//
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















*/
