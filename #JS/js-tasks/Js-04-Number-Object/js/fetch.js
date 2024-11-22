/*
const newPost = {
	"userId": 10,
	"id": 777,
	"title": "Hello!",
	"body": "some text",
}

const test = JSON.stringify(newPost)
//console.log(test)


fetch('https://jsonplaceholder.typicode.com/posts', {
	method: 'GET',
	//body: test,
})
	.then((data) => {
		console.log(data)
		return data.json()
	}).then((info) => {
		console.log(info)
		for (let i = 0; i < info.length; i++) {
			console.log(info[i].body)
		}
	})
*/

//? get weather =================//
/* ( jsonplaceholder.typicode.com)
1. Сделать запрос на сайт погоды (open-meteo.com/en/docs)
	Получить данные и вывести их в документ
	(В Ярославле: -0.4 градусов Скорость ветра: 8 м/с Сейчас: День Атмосферное давление: 1010.1 Pa)
*/
/*
const url = `https://api.open-meteo.com/v1/forecast?
	latitude=57.61&
	longitude=39.83&
	current=temperature_2m,is_day,surface_pressure,wind_speed_10m&hourly=
`;

fetch(url, {
	method: 'GET',
}).then((data) => {
	return data.json()
}).then((info) => {
	console.log(info)
	const current = info.current;
	renderWeather(current.temperature_2m, current.wind_speed_10m, current.is_day, current.surface_pressure)
})

function renderWeather(temp, speed, isDay, pressure) {
	const div = document.createElement('div');
	div.textContent = `В Ярославле: ${temp} градусов`;
	document.body.append(div);

	const div2 = document.createElement('div');
	div2.textContent = `Скорость ветра: ${speed} м/с`;
	document.body.append(div2);

	let day;
	if (isDay) {
		day = 'День'
	} else {
		day = 'Ночь'
	}
	const div3 = document.createElement('div');
	div3.textContent = `Сейчас: ${day}`;
	document.body.append(div3);

	const div4 = document.createElement('div')
	div4.textContent = `Атмосферное давление: ${pressure} Pa`
	document.body.append(div4)
}
*/