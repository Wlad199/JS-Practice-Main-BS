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
	Создание, вставка
	Атрибуты, классы
	Размеры и прокрутка окна
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

? =================//
Табы, Акардеон, модальные окна
Drop Down
слайдер цены
Форматирование цен, дат, номеров телефонов, календари
Списки с кастомным UI, скрытые чекбоксы
Валидность email, адресов и т.д
Отправка форм через php

Вывод данных из массивов в карточки через:
шаблонные строки, плейсхолдеры, создание DOM

Описать данные в массиве и вывести их на страницу
Добавить фильтры, табы, сортировку на странице

Получать данные с API
localStorage, JSON
Promise, async, callback, fetch
localSrever JSON server

Модель MVC

Сборка проекта webpack, parcel

? =================//



!  ====================================================================================================//

Number
	parseInt, Math.ceil, toFixed, Number.isInteger, Math.round, toString,
	Math.random, Math.floor, Math.pow, parseFloat, Number.isNaN

String
	endsWith, padStart, concat, экранирование, length, indexOf, toString,
	toUpperCase, toLowerCase, includes, trim, repeat, replaceAll, startsWith,
	trimStart, конкатенация, charAt, replace, padEnd, trimEnd, split

Object
	Object.values, Object.entries, for in, toString, JSON.parse, JSON.stringify, Object.keys

Array
	flat, forEach, concat, map, some, unshift, length, indexOf, toString, push, pop,
	includes, reduce, find, Array.isArray, filter, shift, reverse, join


? Mistakes

Numbers		8 3 2 0 0 0 0
String		3 2 1 1 1 1 0
Object		4 3 1 1 1 1 0
Array			6 0 0 0 1 1 0
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
Array.from(document.body.childNodes) // сделали массив


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
	создаёт элемент с заданным тегом
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
	Получить атрибут data-about

? Размеры и прокрутка окна
	Ширина / Высота видимой части документа (без полосы прокрутки)
	Ширина / Высота документа (с полосой прокрутки)
	получить прокрутку окна сверху (только для чтения)
	получить прокрутку окна слева (только для чтения)
	прокрутить к абсолютным координатам
	прокрутка относительно текущего места
	прокрутить страницу так, чтобы сделать elem видимым (выровнять относительно верхней/нижней части окна).

? События
Опции addEventListener
	обработчик будет автоматически удалён после выполнения
	'cфаза, на которой должен сработать обработчик
	'запретить вызов preventDefault()

	событие, которое срабатывает когда завершена загрузка и построение DOM документа
	Отмена действия браузера по умолчанию
	Координаты события относительно окна
	Координаты события относительно документа
	получить символ (он может различаться (регистр, язык))
	получить физический код клавиши (всегда будет тот же)
	препятствует всплытию, но сам сработает
	препятствует всплытию, сам не сработает
	самый глубокий элемент, на котором произошло событие
	элемент, на котором в данный момент сработал обработчик

? Формы
	Свойства для навигации по формам
	доступ к форме
	доступ к элементам формы (или использовать form[name/index])
	получить форму в которой расположен элемент
	получить значения элементов формы (не использовать: textarea.innerHTML)
	для чекбоксов и переключателей (true / false)
	позволяет инициировать отправку формы из JavaScript


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
document.createElement("tag")			создаёт элемент с заданным тегом
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
elem.dataset.about						Получить атрибут data-about

? Размеры и прокрутка окна
document.documentElement.clientWidth / clientHeight		Ширина / Высота видимой части документа (без полосы прокрутки)
window.innerWidth / innerHeight					Ширина / Высота документа (с полосой прокрутки)
window.pageYOffset											получить прокрутку окна сверху (только для чтения)
window.pageXOffset											получить прокрутку окна слева (только для чтения)
window.scrollTo(pageX,pageY)						прокрутить к абсолютным координатам
window.scrollBy(x,y)										прокрутка относительно текущего места
elem.scrollIntoView(top)								прокрутить страницу так, чтобы сделать elem видимым (выровнять относительно верхней/нижней части окна)

? События
Опции addEventListener
'once'							обработчик будет автоматически удалён после выполнения
'capture'						фаза, на которой должен сработать обработчик
'passive'						запретить вызов preventDefault()

DOMContentLoaded									событие, которое срабатывает когда завершена загрузка и построение DOM документа
event.preventDefault()						Отмена действия браузера по умолчанию
event.clientX / clientY						Координаты события относительно окна
event.pageX / pageY								Координаты события относительно документа
event.key													получить символ (он может различаться (регистр, язык))
event.code												получить физический код клавиши (всегда будет тот же)
event.stopPropagation()						препятствует всплытию, но сам сработает
event.stopImmediatePropagation()	препятствует всплытию, сам не сработает
event.target											самый глубокий элемент, на котором произошло событие.
event.currentTarget (=this)				элемент, на котором в данный момент сработал обработчик

? Формы
document.forms										Свойства для навигации по формам
document.forms[name/index]				доступ к форме
form.elements[name/index]					доступ к элементам формы (или использовать form[name/index])
element.form											получить форму в которой расположен элемент
(input, textarea, select).value		получить значения элементов формы (не использовать: textarea.innerHTML)
input.checked											для чекбоксов и переключателей (true / false)
form.submit()											позволяет инициировать отправку формы из JavaScript


!  ====================================================================================================//

! try - catch
! Промисификация
! работа стека и event loop
! Регулярные выражения и экранирование

!??? ====================================================================================================//
??????????????????????????????????????????????????????????????????????????????????????????????????????????
function filter_list(l) {
return l.filter(Number.isInteger);
}

function isIsogram(str) {
return new Set(str.toUpperCase()).size == str.length;
}

function isIsogram(str) {
return !/(\w).*\1/i.test(str)
}

function highAndLow(numbers) {
numbers = numbers.split(' ').map(Number);
return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

function XO(str) {
let x = str.match(/x/gi);
let o = str.match(/o/gi);
return (x && x.length) === (o && o.length);
}

var replaceDots = function (str) {
return str.replace(/\./g, '-');
}

let cubeOdd = a => {
var isNumeric = a.every(x => !isNaN(x))
return isNumeric ? a.filter(n => n % 2).reduce((s, n) => s + (n * n * n), 0) : undefined
}

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);



function minMax(arr) {
return [Math.min(...arr), Math.max(...arr)];
}

function distinct(a) {
return [...new Set(a)];
}

function distinct(a) {
return Array.from(new Set(a));
}

const reverseSeq = n => {
return Array(n).fill(0).map((e, i) => n - i);
};

const reverseSeq = length => Array.from({ length }, () => length--)

const feast = (...args) => /^(.).*(.),\1.*\2$/.test(args);

! Tasks ====================================================================================================//

1. Создать объект и скопировать его по ссылке,
используя Object.assign, оператор спред и JSON
Создать объект с вложенным объектом и скопировать его

2. Создать функцию, принимающую в качестве параметров объект user
и увеличивающую возраст на 1год
Не мутировать исходный объект!!!
Вернуть новый объект

3. Написать ф - ю, которая принимает в качастве параметра объект
и добавляет ему дату(урок 12.3)

4. Написать ф - ю, sumPositiveNumbers которая принимает 2 параметра a и b(урок 17.4)
и проверяет являются ли они часлами и являются ли они положительными
в случае успеха выводит сумму.В противном случае - собщение с ошибкой.
Перепимать под switch case и ?

5. Написать ф - ю, которая принимает любое число и возвращает только положительное число
Перепимать под switch case и ? (урок 18.1)

	6. Выведите в консоль "Привет, мир!" с задержкой 5 секунд
Используйте стрелочную функцию

	7. Создайте переменную и присвойте ей строку "Good Morning"
Замените "Morning" на "Evening" и присвойте результат новой переменной
Выведите значение второй переменной в консоль

	8. Написать ф - ю showMessage, принимающую 2 параметра: Сообщение и задержку и выводящую сообщ

	9. Написать ф - ю, выводящую 5 раз сообщение через setInterval

	10. Вывести в консоль кол - во элементов(через цикл и через массив ключей)
Переберите все собственные свойства объекта. (через цикл и через массив ключей)
Если имя свойства(ключ) равно "key1" или "key3", выведите значение свойства в консоль.
	const myObject = {
		key1: true,
		key5: 10,
		key3: 'abc',
		key4: null,
		key10: NaN,
	}

	11.(36st).Cгенерируйте новое 4 - значное случайное число.Диапазон для случайного числа 1000 - 9999.
	Убедитесь, что это новое случайное число не совпадает ни с одним из чисел в массиве myNumbers.
Если совпадает, вам нужно сгенерировать новое 4 - значное число.
Если совпадений нет(новый номер уникален), добавьте его в массив myNumbers.
		ВАЖНО: В решении задачи используйте функции:
	для генерации случайного числа в заданном диапазоне
	для добавления случайного числа в массив с возвратом измененного массива
	const MIN = 1000
	const MAX = 9999
	const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351]

	12.(37, 42, 43).Разобраться!!!

	13. Перепишите инструкцию "if .. else" без использования "else"
Перепишите содержимое функции, используя тернарный оператор
Замените обычную функцию на стрелочную функцию
	function isArrayEmpty(inputArray) {
		if (inputArray.length > 0) {
			return 'Массив не пустой'
		} else {
			return 'Массив пустой'
		}
	}
	console.log(isArrayEmpty([1, 3]))
	console.log(isArrayEmpty([]))

	14.(39st) Создайте функцию "cityInfo" с двумя параметрами,
		которая возвращает строку "London is at the index 0 in the myCities array"
Переберите все элементы массива "myCities",
		для каждого элемента вызовите функцию "cityInfo"
и выведите в консоль результат вызова функции
	const myCities = ['London', 'New York', 'Singapore']

	15.(40st) Конвертируйте массив JSON объектов в массив объектов JavaScript
Выведите в консоль результирующий массив
Выведите в консоль "postId" второго объекта
Выведите в консоль "commentsQuantity" последнего объекта
	const postsJSON = [
		'{"postId":1355,"commentsQuantity":5}',
		'{"postId":5131,"commentsQuantity":13}',
		'{"postId":6134,"commentsQuantity":2}',
		'{"postId":2351,"commentsQuantity":8}',
	]

	16.(41st) Создайте функцию "findPostById" с двумя параметрами: ID поста и массив постов
Функция должна вернуть пост с определенным ID
Если поста с определенным ID в массиве постов нет, функция должна вернуть "undefined"
	const posts = [
		{ postId: 1355, commentsQuantity: 5 },
		{ postId: 5131, commentsQuantity: 13 },
		{ postId: 6134, commentsQuantity: 2 },
	]

	17(45st).Создайте функцию isElementInArray с двумя параметрами "searchElement" и "inputArray"
Если "searchElement" - не объект, просто используйте метод "includes"
Если "searchElement" - это объект или массив,
		вам необходимо сначала преобразовать каждый элемент "inputArray" в строку,
			а затем применить метод "includes" с аргументом, который также будет преобразован в строку
	const tags = [
		['javascript', 'es6'],
		['css', 'flexbox'],
		['html', 'web-browser'],
	]
	const fruits = [
		{ title: 'Orange', quantity: 10 },
		{ title: 'Banana', quantity: 5 },
		{ title: 'Apple', quantity: 25 },
	]

	18.(47st) Создайте функцию "popularPostsIds" с двумя параметрами "posts" и "minimalComentsQty"
Эта функция "popularPostsIds" должна возвращать массив идентификаторов постов сообщений,
		у которых количество комментариев не меньше "minimalComentsQty"
	const inputPosts = [
		{
			title: 'Как быстро выучить JavaScript?',
			postId: 3421,
			comments: 25,
		},
		{
			title: 'Где используется JavaScript?',
			postId: 5216,
			comments: 3,
		},
		{
			title: 'Какая разница между React и Angular?',
			postId: 8135,
			comments: 12,
		},
	]

	19.(48st) Использование метода "reduce" для создания объекта
Создайте функцию "quantitiesByCategories" с одним параметром "products"
Эта функция должна возвращать объект с ключами,
		равными категориям, и значениями, равными сумме всех количеств в каждой категории
	const inputProducts = [
		{
			title: 'Phone case',
			price: 23,
			quantity: 2,
			category: 'Accessories',
		},
		{
			title: 'Android phone',
			price: 150,
			quantity: 1,
			category: 'Phones',
		},
		{
			title: 'Headphones',
			price: 78,
			quantity: 1,
			category: 'Accessories',
		},
		{
			title: 'Sport Watch',
			price: 55,
			quantity: 2,
			category: 'Watches',
		},
	]

	20.(49st) Создайте функцию "sortProductsByPrice" с одним параметром "products"
Эта функция должна отсортировать входной массив товаров(Из предидущей задачи)
по цене каждого товара в порядке возрастания и вернуть отсортированный массив
Оригинальный массив должен остаться без изменений

	21.(50st) Создайте функцию "templateLiteral" с одним параметром "num"
Функция должна возвращать многострочную строку.
Ниже приведены примеры вызовов функции:
	const myNumber = 9
	console.log(templateLiteral(myNumber))
	Результат:
	Число 9.
	Это число меньше 10.
	Квадратный корень этого числа - 3.

*/
