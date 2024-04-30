/*
HTML & CSS
Браузер и сеть
Git

? JS =================//

Базовый JS
	операторы
	типы данных
	переменные
	циклы
	функции
	JSON
	obj / arr
	Время / Дата

ООП
	Прототипы
	Классы
	Get / Set
	Контекст (call, apply)

Асинхронность
	Promise (asinc / await)
	Сетевые запросы
	Клиент-сервер
	Fetch / XMLHttpRequest

DOM
	События
	Формы
	async / defer

Other
	Замыкания
	Модули
	Деструктуризация
	setTimeout и setInterval
	Try-Catch
	Map, Set, Symbol
	Регулярные выражения
	Рекурсия
	ф-ии генераторы
	Event loop
	Работа с формами
	Работа с данными (arr, obj)

? =================//

React JS
TypeScript

WebPack / Parcel
node.js
Redux / toolkit / pinia
Redux-Thunk / Saga
Styled-components / Emotions
MUI / Ant Design / Tailwind
rest
api
HTTP
npm / npx
server side / rendering
next / nuxt
lint (ESlint)
jest / Cypress
BDD - tests
dev-tool
axios
Firebase, Netlify, Heroky (деплой проектов)
lighthouse, PageSpeed (оценка производительности)


!  ====================================================================================================//

 Number
 parseInt, Math.ceil, toFixed, Number.isInteger, Math.round, toString, Number, Math.random, Math.floor
 Math.pow, parseFloat, Number.isNaN

 String
 endsWith, padStart, concat, экранирование, length, indexOf, toString, Number, toUpperCase, toLowerCase
 includes, trim, repeat, replaceAll, startsWith, trimStart, конкатенация, charAt, replace, padEnd, trimEnd, split

	Object
 Object.values, Object.entries, for in, toString, JSON.parse, JSON.stringify, Object.keys

	Array
 flat, forEach, concat, map, some, unshift, length, indexOf, toString, push, pop,
 includes, reduce, find, Array.isArray, filter, shift, reverse, join


? Mistakes

Numbers		8 3 2 0 0 0
String		3 2 1 1 1 1
Object		4 3 1 1 1 1
Array			6 0 0 0 1 1
*/



//* Practice ====================================================================================================//
/*
? Numbers
		Округлить вверх
		Округлить вниз
		Округлить до целого
		Производит удаление дробной части без округления: 3.1 становится 3, а -1.1 — -1.
		Рандом
		Ищет максимум / минимум
		Возвести в степень
		возвращает квадратный корень числа
		Компенсировать погрешности
		кол-во знаков после запятой
		Привести к числу
		Привести к строке
		вернет ЦЕЛОЕ число из строки до текста
		вернет число из строки до текста c цифрами после запятой
		проверка на NaN
		строгая проверка на NaN
		проверка на целое число
		проверка на NaN/Infinity/-Infinity

? String
		возвращает длину строки
		возвращает символ под индексом
		возвращает последний символ
		возвращает от start до end
		ищет позицию слова или символы в строке. Необязательный второй аргумент позволяет начать поиск с определённой позиции.
		ищет позицию слова или символы в строке с конца
		меняет строку (не перезаписывая) 'word' - что меняем, 'another word'
		меняет все совпадения
		ищет и возвращает true or false
		принимает разделитель и разбивает строку на масив
		создаёт строку из элементов arr
		приведение к верхнему регистру
		приведение к нижнему регистру
		Повторить символ
		проверяет начинается ли строка определённой строкой
		проверяет заканчивается ли строка определённой строкой
		обрезает пробелы
		приведение к булевому значению
		дополняет начало текущей строки другой строкой (при необходимости несколько раз) до заданной длины.


? Object
		Удалить ключ и свойство
		проверка наличия свойства в объекте
		проверка наличия свойства в объекте или его прототипе
		Преобразовать объект в JSON
		Преобразовать JSON в объект
		Получить ключи в массив (первого уровня вложенности)
		Получить значения в массив (первого уровня вложенности)
		Получить значения и ключи в массив масивов
		Копирование объекта (не глубокое!!!)
		Глубокое копирование объекта


? Array
		добавляет items в конец массива.
		удаляет элемент в конце массива и возвращает его.
		добавляет items в начало массива.
		удаляет элемент в начале массива и возвращает его.
		начиная с индекса pos удаляет deleteCount элементов и вставляет items
		создаёт новый массив, копируя в него элементы с индекса start до end (не включая end)
		возвращает новый массив: копирует все члены текущего массива и добавляет к нему items

		ищет item, начиная с позиции pos, и возвращает его индекс или -1, если ничего не найдено.
		возвращает true, если в массиве имеется элемент value, в противном случае false
		отдаёт первое значение, при прохождении которых через функцию возвращается true.
		отдаёт все значения, при прохождении которых через функцию возвращается true.
		возвращает true, если функция проверки правдива хотя бы для одного элемента массива. Иначе, false.

		сортирует массив «на месте», а потом возвращает его.
		«на месте» меняет порядок следования элементов на противоположный и возвращает изменённый массив.
		преобразует вложенные массивы в один
		проверяет, является ли arr массивом

todo Answers ====================================================================================================//

? Numbers
Math.ceil()					Округлить вверх
Math.floor()				Округлить вниз
Math.round()				Округлить до целого
Math.trunc()				Производит удаление дробной части без округления: 3.1 становится 3, а -1.1 — -1.
Math.random()				Рандом
Math.max() / Math.min()		Ищет максимум / минимум
Math.pow(n, 2)			Возвести в степень
Math.sqrt(9)				возвращает квадратный корень числа
n + Number.EPSILON	Компенсировать погрешности
n.toFixed(3)				кол-во знаков после запятой
Number(str)					Привести к числу
n.toString()				Привести к строке
parseInt(n)					вернет ЦЕЛОЕ число из строки до текста
parseFloat(n)				вернет число из строки до текста c цифрами после запятой
isNaN(n)						проверка на NaN
Number.isNaN(n)			строгая проверка на NaN
Number.isInteger		проверка на целое число
Number.isFinite()		проверка на NaN/Infinity/-Infinity

? String
str.length							возвращает длину строки
str.charAt(3)						возвращает символ под индексом
str.at(-1) / str[str.length - 1]	возвращает последний символ
str.slice(start, end)		возвращает от start до end
str.indexOf('r')				ищет позицию слова или символы в строке. Необязательный второй аргумент позволяет начать поиск с определённой позиции.
str.lastIndexOf('r')		ищет позицию слова или символы в строке с конца
str.replace('r', 'R')		меняет строку (не перезаписывая) 'word' - что меняем, 'another word'
str.replaceAll('r', 'R')	меняет все совпадения
str.includes('r')				ищет и возвращает true or false
str.split(' ')					принимает разделитель и разбивает строку на масив
arr.join(',')						создаёт строку из элементов arr
str.toUpperCase()				приведение к верхнему регистру
str.toLowerCase()				приведение к нижнему регистру
'r'.repeat(5)						Повторить символ
str.startsWith('R')			проверяет начинается ли строка определённой строкой
str.endsWith('.')				проверяет заканчивается ли строка определённой строкой
str.trim()							обрезает пробелы
Boolean(str)						приведение к булевому значению
str.padStart(8, '*')		дополняет начало текущей строки другой строкой (при необходимости несколько раз) до заданной длины.


? Object
delete obj.key					Удалить ключ и свойство
obj.hasOwnProperty('key')		проверка наличия свойства в объекте (не наследуемых!!!)
'key' in obj							проверка наличия свойства в объекте или его прототипе
JSON.stringify(obj)			Преобразовать объект в JSON
JSON.parse(str)					Преобразовать JSON в объект
Object.keys()						Получить ключи в массив (первого уровня вложенности)
Object.values()					Получить значения в массив (первого уровня вложенности)
Object.entries()				Получить значения и ключи в массив масивов
Object.assign ({}, obj)	Копирование объекта (не глубокое!!!)
JSON.parse(JSON.stringify(obj))	Глубокое копирование объекта

? Array
arr.push()							добавляет items в конец массива.
arr.pop()								удаляет элемент в конце массива и возвращает его.
arr.unshift()						добавляет items в начало массива.
arr.shift()							удаляет элемент в начале массива и возвращает его.
arr.splice(pos, del, add)	начиная с индекса pos удаляет deleteCount элементов и вставляет items
arr.slice(start, end)		создаёт новый массив, копируя в него элементы с индекса start до end (не включая end)
arr.concat(arr1, arr2, item)	возвращает новый массив: копирует все члены текущего массива и добавляет к нему items

arr.indexOf('r')				ищет item, начиная с позиции pos, и возвращает его индекс или -1, если ничего не найдено.
arr.includes('r')				возвращает true, если в массиве имеется элемент value, в противном случае false
arr.find()							отдаёт первое значение, при прохождении которых через функцию возвращается true.
arr.filter()						отдаёт все значения, при прохождении которых через функцию возвращается true.
arr.some()							возвращает true, если функция проверки правдива хотя бы для одного элемента массива. Иначе, false.

arr.sort()							сортирует массив «на месте», а потом возвращает его.
arr.reverse()						«на месте» меняет порядок следования элементов на противоположный и возвращает изменённый массив.
arr.flat(2)							преобразует вложенные массивы в один
Array.isArray(arr)			проверяет, является ли arr массивом


! ====================================================================================================//
* Class=====================//

1. Создать класс, добавить конструктор (name, pass)
2. Добавить метод checkPass
3. Расширить класс и добавить методов
4. Добавить статические методы и свойства
5. Проверить принадлежит ли объект классу
6. Проверить является ли свойство собственным или унаследованным


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


! ====================================================================================================//
? Получить элемент
	Родительский узел
	Дочерние узелы
	Первый дочерний
	Последний дочерний
	Предыдущий соседний
	Следующий соседний

	Внутреннее HTML-содержимое узла-элемента в виде строки. Можно изменять.
	Полный HTML узла-элемента. Как innerHTML плюс сам элемент. Не меняет elem
	Текст внутри элемента: HTML за вычетом всех <тегов>.

	проверяет, удовлетворяет ли элемент CSS-селектору.Возвращает true или false
	ищет ближайшего по иерархии предка, соответствующему данному CSS-селектору
	ищет внутри элемента

? Создание и вставка
	создаёт элемент с заданным тегом,
	создаёт текстовый узел (редко используется)
	клонирует элемент, если deep==true, то со всеми дочерними элементами

	вставляет прямо перед node
	вставляет в node в начало
	вставляет в node в конец
	вставляет сразу после node
	заменяет node
	удаляет node

elem.insertAdjacentHTML(where, html) вставляет HTML в зависимости от where:
	вставляет html прямо перед elem
	вставляет html в elem в начало
	вставляет html в elem в конец
	вставляет html сразу после elem

? Классы
	строковое значение, удобно для управления всем набором классов
	(add/remove/toggle/contains) для управления отдельными классами
	изменить стили
	Для чтения окончательных стилей (Только для чтения)
	
? Атрибуты
	Проверить наличие Атрибута
	Получить значение Атрибута
	Установить значение Атрибута
	Удалить Атрибут
	Получить коллекцию всех атрибутов

? Размеры и прокрутка окна
	Ширина видимой части документа (без полосы прокрутки)
	Высота видимой части документа (без полосы прокрутки)
	Ширина документа (с полосой прокрутки)
	Высота документа (с полосой прокрутки)
	получить прокрутку окна сверху (только для чтения)
	получить прокрутку окна слева (только для чтения)
	абсолютные координаты
	прокрутка относительно текущего места
	прокрутить страницу так, чтобы сделать elem видимым (выровнять относительно верхней/нижней части окна).



todo ====================================================================================================//

? Получить элемент
parentNode / parentElement								Родительский узел
childNodes / children											Дочерние узелы
firstChild / firstElementChild						Первый дочерний
lastChild / lastElementChild							Последний дочерний
previousSibling / previousElementSibling	Предыдущий соседний
nextSibling / nextElementSibling					Следующий соседний

innerHTML								Внутреннее HTML-содержимое узла-элемента в виде строки. Можно изменять.
outerHTML								Полный HTML узла-элемента. Как innerHTML плюс сам элемент. Не меняет elem
textContent							Текст внутри элемента: HTML за вычетом всех <тегов>.

elem.matches(css)				проверяет, удовлетворяет ли элемент CSS-селектору.Возвращает true или false
elem.closest(css)				ищет ближайшего по иерархии предка, соответствующему данному CSS-селектору
elemA.contains(elemB)		ищет внутри элемента

? Создание и вставка
document.createElement("tag")			создаёт элемент с заданным тегом,
document.createTextNode(value)		создаёт текстовый узел (редко используется)
elem.cloneNode(deep)							клонирует элемент, если deep==true, то со всеми дочерними элементами

node.before							вставляет прямо перед node
node.prepend						вставляет в node в начало
node.append							вставляет в node в конец
node.after							вставляет сразу после node
node.replaceWith				заменяет node
node.remove()						удаляет node

elem.insertAdjacentHTML(where, html) вставляет HTML в зависимости от where:
"beforebegin"						вставляет html прямо перед elem
"afterbegin"						вставляет html в elem в начало
"beforeend"							вставляет html в elem в конец
"afterend"							вставляет html сразу после elem

? Классы
elem.className					строковое значение, удобно для управления всем набором классов
elem.classList					(add/remove/toggle/contains) для управления отдельными классами
style / style.cssText		изменить стили
getComputedStyle(elem, [pseudo])	Для чтения окончательных стилей (Только для чтения)
	
? Атрибуты
hasAttribute('name')					Проверить наличие Атрибута
getAttribute('name')					Получить значение Атрибута
setAttribute('name', 'value')	Установить значение Атрибута
removeAttribute('name')				Удалить Атрибут
elem.attributes								Получить коллекцию всех атрибутов

? Размеры и прокрутка окна
document.documentElement.clientWidth		Ширина видимой части документа (без полосы прокрутки)
document.documentElement.clientHeight		Высота видимой части документа (без полосы прокрутки)
document.innerWidth											Ширина документа (с полосой прокрутки)
document.innerHeight										Высота документа (с полосой прокрутки)

window.pageYOffset							получить прокрутку окна сверху (только для чтения)
window.pageXOffset							получить прокрутку окна слева (только для чтения)

window.scrollTo(pageX,pageY)		абсолютные координаты
window.scrollBy(x,y)						прокрутка относительно текущего места
elem.scrollIntoView(top)				прокрутить страницу так, чтобы сделать elem видимым
																выровнять относительно верхней/нижней части окна








*/
