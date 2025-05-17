//class Box {
//	width: number;
//	height: number;
//	//height: 500; можно определить без конструктора
//	volume: number | undefined
//	_content: string | undefined

//	constructor(width: number, volume?: number, content?: string) {
//		this.width = width
//		this.height = 500
//		this.volume = volume
//		this._content = content
//	}

//	calculateVolume(): void {
//		if (!this.volume) {
//			this.volume = this.height * this.width
//			console.log(`Объем равен: ${this.volume}`)
//		} else {
//			console.log(`Объем равен: ${this.volume}`)
//		}
//	}

//	get content() {
//		return this._content
//	}
//	// Без сеттера свойство станет readonly
//	set content(value) {
//		this._content = value
//	}
//}

//const myBox = new Box(250)
//myBox.content = 'This is content'
//console.log(myBox.content)

//class PrentBox extends Box {
//	wrap: string;
//	height: number = 600;

//	// Конструктор можно переопределить
//	constructor(wrap: string, width: number) {
//		super(width)
//		this.wrap = wrap
//	}
//}

//const myBox2 = new PrentBox('red', 500)

//console.log(myBox2)

class User {
	public name: string
	#login: string

	constructor(name: string, login: string) {
		this.name = name
		this.#login = login
	}

	logIn = () => {
		return `Player ${this.#login} is online`
	}

}

const userOne = new User('Alex', 'myLogin')

const test = userOne.logIn
console.log(test())