/*
class User { // Создаем класс
	constructor(name, password) { // добавляем свойства с помощью конструктора
		this.name = name;
		this.password = password.toString();
	}

	checkPass() { // добавляем метод
		return this.password.length > 5 ? true : false
	}
}

const person = new User("Jhon", 523556) // создаем новый объект


class Student extends User { // класс Student расширяет User
	constructor(name, password, nickName) { // новый конструктор
		super(name, password); // передать аргументы в родительский класс User
		this.nickName = nickName; // добавить собственные свойства
	}
}

const firstStudent = new Student('ASlex', 7858222, 'AAlexiss') // создаем новый объект
console.log(firstStudent)
*/


/*
1. Создать класс, добавить конструктор (name, pass)
2. Добавить метод checkPass
3. Расширить класс и добавить методов
4. Добавить статические методы и свойства

*/




class User {
	constructor(name, pass) {
		this.name = name
		this.pass = pass
	}
	checkPass() {
		return this.pass.length > 6 ? true : false
	}
}

class NewUser extends User {
	constructor(name, pass, id) {
		super(name, pass)
		this.id = id
	}
	hasId() {
		return this.id > 50 ? 'Yes' : 'No'
	}
}



const obj = {}
console.log(obj.toString())