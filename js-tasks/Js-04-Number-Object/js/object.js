/*
 Object
 Object.values, Object.entries, for in, toString, JSON.parse, JSON.stringify, Object.keys

Объекты
	const user = {name: 'alex',age: 18,}
	Найти name в user с помощью in. Сделать условие и вывести в консоль
	Переписать на hasOwnProperty
	Преобразовать в строку
	Преобразовать в объект
	Вывести ключи и свойства (for..in)
	Получить ключи в массив (Object.keys)
	Получить значения в массив (Object.values)
	Получить значения и ключи в массив
	Вывести все ключи и значения циклом
	Создать строку и положить ее в объект

	const user = {
	name: 'alex',
	age: 18,
	state: 0,
	family: {
		dad: {
			name: 'oldMan'
		},
		mom: {
			name: 'oldWoman'
		}
	}
}

/  =================//
	Создать функцию, в которую можно передать название объекта и получить
 У {user.name + user.surname} {family.length} член(-а/-ов) семьи.
 Отец - {dad.name + dad.surname} (возраст не известен).
 Мать - {mom.name + mom.surname} (возраст не известен).
 Брат - {brother.name + brother.surname} ({brother.age} лет).
 Если каких то членов семьи нет, то не выводить

const userInformation = {
	name: 'Иван',
	surname: 'Иванов',
	age: 15,
	family: {
			dad: {
					name: 'Александр',
					surname: 'Иванов',
					age: undefined,
			},
				mom: {
					name: 'Наталья',
					surname: 'Иванова',
			},
				brother: {
					name: 'Константин',
					surname: 'Иванов',
					age: '10',
			},
			sister: {
					name: 'Константин',
					surname: 'Иванов',
					age: '10',
			},
	}
}
*/
/*
const DATA = {
	dad: 'Отец',
	mom: 'Мать',
	brother: 'Брат',
	sister: 'Сестра',
}

const userInformation = {
	name: 'Иван',
	surname: 'Иванов',
	age: 15,
	family: {
		dad: {
			name: 'Александр',
			surname: 'Иванов',
			age: undefined,
		},
		mom: {
			name: 'Наталья',
			surname: 'Иванова',
		},
		brother: {
			name: 'Константин',
			surname: 'Иванов',
			age: '10',
		},
		sister: {
			name: 'Елена',
			surname: 'Иванова',
			age: '18',
		},
	}
}

function getInfo(user) {

	let str = `У ${user.name} ${user.surname}`;
	let familyMembers = ``;

	const familyKeys = Object.keys(user)
	str += ` ${familyKeys.length} членов семьи.`

	for (let familyMember in user.family) {
		const data = user.family[familyMember]

		familyMembers += `${DATA[familyMember]} - ${data.name} ${data.surname} `

		if (typeof data.age === 'number' || typeof data.age === 'string') {
			familyMembers += `(${data.age} лет) `
		} else {
			familyMembers += `(возраст не известен) `
		}
	}

	str += ` ${familyMembers}`

	return str;
}

console.log(getInfo(userInformation))
*/
