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