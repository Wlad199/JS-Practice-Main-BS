/*
? 6c8f17d Типы в функциях =================//
Написать ф-ю getFullName, которая складывает только строки
	Применить TS
	Переписать на стрелочную
	Добавить any, unknown, сделать проверки if
	Сделать вывод ошибки throw new Error()

? 76d1649 Объекты =================//
Написать ф-ю getFullNameAndProfession, которая складывает только строки
	ф-я принимает объект и возвращает строку: Имя Фамилия, профессия разработчик(если dev:true)
	В параметрах ф-ции объект, который типизирован
Даннные взять из массива:
	const user = {
		firstname: 'Антон',
		surname: 'Ларичев',
		city: 'Moscow',
		age: 33,
		skills: {
			dev: true,
			devops: true
		}
	}

? Narrowing =================//
Написать ф-ю logId, которая принимает id, который может быть number, string, boolean
Сделать сужение по типу данных
Применить собственные методы типов

? Literal =================//
Написать ф-ю getData, которая принимает url и method
method может быть только get или post 
ограничить method через enum или union
Переписать под type

? Преобразование типов
interface User {name: string,	email: string,login: string}
interface Admin {name: string,	role: number}
Написать  ф-ю userToAdmin, которая принимает пользователя с нитерфейсом User
и возвращает пользователя с нитерфейсом Admin

? Type Guard
Написать ф-ю logId, принимающую id (string, number)
В зависимости от типа id выводит разные сообщения
Сделать проверку Type Guard













todo Answers ====================================================================================================//
? 6c8f17d Типы в функциях =================//
const getFullName = (name: string, surname: string): string => {
	if (typeof name !== 'string' || typeof surname !== 'string') {
		let error = new Error("Ого, ошибка!")
		return error.message
	} else {
		return `${name} ${surname}`
	}
}
console.log(getFullName('Alex', 'Smith'))

? 76d1649 Объекты =================//
const user = {
	firstname: 'Антон',
	surname: 'Ларичев',
	city: 'Moscow',
	age: 33,
	skills: {
		dev: false,
		devops: true
	}
}
function getFullNameAndProfession(data: { firstname: string, surname: string, age: number, skills: { dev: boolean } }): string {
	if (data.skills.dev) {
		return `${data.firstname} ${data.surname} ${data.age}, profession: programmer`
	}
	return `${data.firstname} ${data.surname} ${data.age}`
}
console.log(getFullNameAndProfession(user))

? Narrowing =================//
function logId(id: number | string | boolean) {
	if (typeof id === 'number') {
		return id.toFixed(5)
	} else if (typeof id === 'string') {
		return id.length
	} else {
		return id
	}
}
console.log(logId(false))

? Literal =================//
enum RequestType{
	GET = 'get',
	POST = 'post'
}
function getData(url: string, method: 'get' | 'post'){}
getData('url', 'get')

? Преобразование типов ===========//
interface User {
	name: string,
	email: string,
	login: string
}
interface Admin {
	name: string,
	role: number
}
const user: User = {
	name: 'Alex',
	email: 'hh@.ru',
	login: 'Allx'
}

function userToAdmin(user: User): Admin {
	return {
		name: user.name,
		role: 1
	}
}
const newAdmin = userToAdmin(user)
console.log(newAdmin)

? Type Guard =================//
function logId(id: string | number) {
	if (isString(id)) {
		console.log(id)
	} else {
		console.log(id)
	}
}
function isString(x: string | number): x is string {
	return typeof x === 'string'
}





*/