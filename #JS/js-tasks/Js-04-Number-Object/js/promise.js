/*
Promise
Промис (Promise) — специальный объект JavaScript, который используется для написания и обработки асинхронного кода.

Интерфейс Promise (промис) представляет собой обёртку для значения, неизвестного на момент создания промиса.
Он позволяет обрабатывать результаты асинхронных операций так, как если бы они были синхронными:
вместо конечного результата асинхронного метода возвращается своего рода обещание (дословный перевод слова "промис") получить результат в некоторый момент в будущем.

Асинхронные функции возвращают объект Promise в качестве значения.
Внутри промиса хранится результат вычисления, которое может быть уже выполнено или выполнится в будущем.

Промис может находиться в одном из трёх состояний:
	pending   — стартовое состояние, операция стартовала;
	fulfilled — получен результат;
	rejected  — ошибка.

Методы, которые позволяют работать с результатом выполнения вычисления внутри промиса:
	then()								выполнить код после успешного выполнения асинхронной операции.
	catch()								выполнить код в случае ошибки при выполнении асинхронной операции.
	finally()							выполнить код вне зависимости от успеха выполнения.

Методы Промисов:
	Promise.all						ждем все промисы, если хоть один с ошибок - catch, иначе then
	Promise.allSettled		просто ждем выполнения всех промисов (всегда then)
	Promise.race					получаем первый выполнившийся промис (если он был с ошибкой - catch, иначе then)
	Promise.any						получаем первый УСПЕШНО выполнившийся промис



	let numbers = new Promise((resolve, reject) => {
	setTimeout(() => {
		const data = ['one', 'two', 'three']
		const data = 'sjkdv'
		if (Array.isArray(data)) {
			resolve(data)
		} else {
			reject('error!!!')
		}
	}, 1000)
})
numbers
	.then((data) => {
		console.log(data)
	})
	.catch((message) => {
		console.log(message)
	})



*/


//? Колбеки/Промисы =======================================//

// Запрос на коллбеках =================//

//function fetchUserInfo(callback) {
//	setTimeout(() => {
//		const data = { id: 1, name: 'Alex' }
//		callback(data);
//	}, 1000);
//}

//function fetchUserGames(id, callback) {
//	setTimeout(() => {
//		const data = ['game1', 'game2']
//		callback(data)
//	}, 1000);
//}

//function run() {
//	fetchUserInfo((userInfo) => {
//		console.log(userInfo)

//		fetchUserGames(userInfo.id, (userGames) => {
//			console.log(userGames)
//		})
//	})
//}

//run()

// На промисах =================//

//function fetchUserData() {
//	return new Promise((resolve, reject) => {
//		setTimeout(() => {
//			const data = { id: 1, name: 'Alex' }
//			resolve(data);
//		}, 1000);
//	});
//}

//function fetchUserGames(id) {
//	return new Promise((resolve, reject) => {
//		setTimeout(() => {
//			const data = ['game1', 'game2']
//			resolve(data);
//		}, 1000);
//	})
//}

//function run() {
//	fetchUserData()
//		.then((userData) => {
//			return fetchUserGames(userData.id)
//		})
//		.then((userGames) => {
//			console.log(userGames)
//		})
//}

//run()



//? Синхронный/Асинхронный =================================================//

// Синхронный =================//
/*
const gamesFromServer = [{
	id: 1,
	name: 'Spider Man'
}, {
	id: 2,
	name: 'Mario'
}]


const body = document.querySelector('body')

gamesFromServer.forEach((game) => {
	const gameElement = document.createElement('div');
	gameElement.innerText = `Игра: ${game.name}`;
	gameElement.className = 'game-element';

	body.append(gameElement)
})
*/

// Асинхронный ===============//
/*
function fetchGames() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const gamesFromServer = 'lsakdvlkn';
			//const gamesFromServer = [
			//	{ id: 1, name: 'Spider Man' },
			//	{ id: 2, name: 'Mario' }
			//];
			if (Array.isArray(gamesFromServer)) {
				resolve(gamesFromServer)
			} else {
				reject('error!!!!')
			}
		}, 2000);
	})
}

// Добавляем надпись (Загрузка...) пока загружается контент
function renderLoading() {
	const body = document.querySelector('body');

	const loading = document.createElement('div');
	loading.id = 'loading';
	loading.textContent = 'Загрузка...';
	body.append(loading)
}

// Отрисовывает игры
function renderGames(games) {
	const body = document.querySelector('body')

	const loading = document.querySelector('#loading')
	loading.remove()

	games.forEach((game) => {
		const gameElement = document.createElement('div');
		gameElement.innerText = `Игра: ${game.name}`;
		gameElement.className = 'game-element';

		body.append(gameElement)
	})
}

renderLoading()

fetchGames()
	.then((games) => {
		renderGames(games)
	})
	.catch((message) => {
		console.log(message)
	})
	*/


//? Цепочка промисов  ============================================//

//const test = new Promise((resolve, reject) => {
//	setTimeout(() => {
//		data = 1;
//		resolve(data)
//	}, 1000);
//})

//test.then((result) => {
//	console.log(result)
//	return new Promise((resolve) => {
//		setTimeout(() => {
//			resolve(result * 2)
//		}, 1000)
//	})
//}).then((result) => {
//	console.log(result)
//})


//? Параллельный вызов =======================//

//function fetchVideos() {
//	return new Promise((resolve, reject) => {
//		setTimeout(() => {
//			console.log('first')
//			const data = ['video1', 'video2'];
//			resolve(data);
//		}, 1000);
//	})
//}

//function fetchShorts() {
//	return new Promise((resolve, reject) => {
//		setTimeout(() => {
//			console.log('second')
//			const data = ['short1', 'short2'];
//			resolve(data);
//		}, 2000);
//	})
//}

//function main() {
//	console.log('Загрузкa...')
//	Promise.all([fetchVideos(), fetchShorts()])
//		.then((data) => {
//			console.log(data)
//		})

//}

//main()

//? DZ ==============================//
/*

function test1(callback) {
	setTimeout(() => {
		const videos = [
			{ id: 1, title: 'Топ 10 игр 2023' },
			{ id: 2, title: 'Лучшая битва в Warcraft3' },
			{ id: 3, title: 'Чем кормить кошек' },
		];
		callback(videos)
	}, 1000);
}

function test2(id, callback) {
	setTimeout(() => {
		const description = {
			id: 1,
			title: 'Топ 10 игр 2023',
			hashTags: ['игры', '2023'],
			authorId: 55,
		};
		callback(description)
	}, 1000);
}

function test3(author, callback) {
	setTimeout(() => {
		const author = {
			id: 55,
			name: 'Какие-то уроки',
			videoIds: [1, 2, 3],
			shortIds: [10, 15, 33],
		};
		callback(author)
	}, 1000)
}

function test4(authorId, callback) {
	setTimeout(() => {
		const author = {
			id: 55,
			name: 'Какие-то уроки',
			videoIds: [1, 2, 3],
			shortIds: [10, 15, 33],
		};
		callback(author)
	}, 1000)
}

function run() {
	test1((topVideos) => {
		console.log(topVideos)
		test2(topVideos[0], (description) => {
			console.log(description)
			test3(description.authorId, (getAuthor) => {
				console.log(getAuthor)
				test4(getAuthor.id, (author) => {
					console.log(author.shortIds[1])
				})
			})
		})
	})
}

run()
*/

// DZ NA PROMIS =================//
/*
function test1() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const videos = [
				{ id: 1, title: 'Топ 10 игр 2023' },
				{ id: 2, title: 'Лучшая битва в Warcraft3' },
				{ id: 3, title: 'Чем кормить кошек' },
			];
			resolve(videos)
			//reject(videos)
		}, 1000)
	})
}

function test2() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const description = {
				id: 1,
				title: 'Топ 10 игр 2023',
				hashTags: ['игры', '2023'],
				authorId: 55,
			};
			resolve(description)
		}, 1000)
	})
}

function test3() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const author = {
				id: 55,
				name: 'Какие-то уроки',
				videoIds: [1, 2, 3],
				shortIds: [10, 15, 33],
			};
			resolve(author)
		}, 1000)
	})
}

function test4() {
	return new Promise((resolve) => {
		setTimeout(() => {

			resolve('Video id done!!!')
		}, 1000)
	})
}


test1()
	.then((videos) => {
		console.log(videos[0].id)
		return test2(videos[0].id)
	})
	.then((description) => {
		console.log(description.authorId)
		return test3(description.authorId)
	})
	.then((author) => {
		console.log(author.shortIds[1])
		return test4(author.shortIds)
	})
	.then((text) => {
		console.log(text)
	})
	.catch(() => {
		console.warn('ERROR!!!')
	})
	.finally(() => {
		console.log('+++')
	})
	*/