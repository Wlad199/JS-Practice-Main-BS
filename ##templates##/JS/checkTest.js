/*
Что выведет этот код?

let f = function g() { return 23; };
alert( typeof g() );

ошибка
?=================
Чему равно такое выражение?
 
[] + false - null + true

NaN
?=================
Что выведет код ниже?

let obj = {'1': 0, 1: 1, 0: 2};
alert(obj['1']);

1
?=================
Что выведет этот код?

let obj = {
 "0": 1,
 0: 2
};
alert( obj["0"] + obj[0] );

4
?=================
let name = "Вася";
function sayHi() {
	alert(name);
}

setTimeout(function() {
	let name = "Петя";
	sayHi();
}, 1000);

Вася.
?=================
Какой код корректно найдёт максимальное значение в непустом массиве arr?

arr.reduce(function(prev, item) { return Math.max(prev, item) })
Math.max.apply(null, arr)
?=================
Что получится, если сложить true + false?

1
?=================
Что выведет код ниже?

for(let key in  {1:1, 0:0}) {
 alert(key);
}
0, затем 1.
?=================
Есть ли разница между выражениями?

/  !!(a && b)
/    (a && b)

Да
?=================
После выполнения этого кода – в каких объектах из списка содержится свойство name?

function User() { }
let vasya = new User();
vasya.__proto__.name = "Vasya";

vasya.__proto__
User.prototype
?=================
Что выведет этот код?

alert( "1"[0] )
1
?=================
Объявлена функция:

function F() {}
Верно ли, что F instanceof Function?

Да.
?=================
Что выведет alert?

let arr = [1, 2, 3];
arr.something = 5;

alert(arr.something);
5
?=================
Чему равно значение выражения 4 - "5" + 0xf - "1e1"?

Цифре.
?=================
Объявлена функция:

function F() {}
Чем является F.prototype?

Обычным объектом.
?=================
Какая арифметическая операция приводит к ошибке в javascript?

-Деление на ноль.
-Умножение числа на строку.
-Корень из отрицательного числа.
+++Никакая из вышеперечисленных.
!=================
Чему равно это выражение?

[].push(1,2).unshift(3).join()

В коде ошибка.
?=================
Что выведет этот код?

function User() { }
User.prototype = { admin: false };
let user = new User();
User.prototype = { admin: true };

alert(user.admin);

false
!=================
Чему равен результат вызова в этом примере?

function f() {
	let a = 5;
	return new Function('b', 'return a + b');
}

alert( f()(1) );

Будет ошибка.
?=================
Яблоко стоит 1.15, апельсин стоит 2.30.

Сколько стоят они вместе – чему равна сумма 1.15 + 2.30 с точки зрения JavaScript?
3.4499999999999997
?=================
Что выведет alert?

let str = "Hello";
str.something = 5;
alert(str.something);

Будет ошибка.
?=================
Верно ли сравнение: "ёжик" > "яблоко"?

Да.
?=================



!  ====================================================================================================//
? =================//

for (var i = 0; i <= 5; i++) {
	setTimeout(function () {
		console.log(i)
	}, i * 600)
}

6 6 6 6 6 6
? =================//

for (let i = 0; i <= 5; i++) {
	setTimeout(function () {
		console.log(i)
	}, i * 600)
}
0 1 2 3 4 5
? =================//

let object = {
	name: 'Alex',
	showName: () => {
		return `Hello ${this.name}`
	}
}

Hello undefinded
? =================//

var myname = "John";
function fn() {
	console.log(myname);
	var myname = "Tom";
	console.log(myname);
}
fn();

undefined
Tom

Объявленная через var переменная myname всплывает.
До того, как выполнение кода дойдёт до неё, значение переменной равно undefined.
В первую очередь интерпретатор ищет переменную внутри области видимости функции,находит её и дальше уже не ищет.
Поэтому первый результат выведет undefined - внутри кода функции переменная уже объявлена, но ещё не инициализирована.
? =================//



! ====================================================================================================//
??????????????????????????????????????????????????????????????????????????????????????????????????????????

get/set =================//

class User {
	constructor(name) {
	}
	set name(name) {
		this._name = name.trim().toLowerCase()
	}
	get name() {
		return this._name
	}
}

const alex = new User()
alex.name = '    AlEx'

console.log(alex.name)

 =================//

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








*/