/*
! ====================================================================================================//
! Javascript ==========================================================================================//
! ====================================================================================================//
## Мутация массива через forEach =================//
const numbers = [1, 2, 3, 4, 5]

Не мутирует 
	numbers.forEach(e => e * 2)
Мутирует 
	numbers.forEach((e, i, arr) => arr[i] = e * 2)


## Ф-я сортировки массива объектов со значениями строк и чисел ========//
function sortCourses(courses, key) {
	const sortedCourses = [...courses]
	sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1))
	return sortedCourses
}

## Random function =================//
(Math.random() * (max - min + 1) + min);

## delete
Оператор delete возвращает логическое значение: true при успешном удалении, иначе - false.
Однако, переменные, объявленные с помощью ключевых слов, не могут быть удалены с помощью delete.

## Округление в низ
Math.floor(n)
(~~n)

## Запуск ф-ии по условию
if(a === 5){
	f01()
} else{
	f02()
}
или
(a===5 ? f01 : f02)()

## Сортировка массива по дате (reverse)
[
	{id: '2', date: '2024-10-11T10:47:13.384Z'}
	{id: '1', date: '2024-10-11T10:42:13.384Z'}
]

posts.slice().sort((a, b) => b.date.localeCompare(a.date))
slice создает неглубокую копию массива


? Callbach Hell ======================================================//
function fetchUserInfo(callback) {
	setTimeout(() => {
		const data = { id: 1, name: 'Alex' }
		callback(data)
	}, 1000)
}

function fetchUserGames(id, callback) {
	setTimeout(() => {
		const data = ['game1', 'game2']
		callback(data)
	}, 1000)
}

function run() {
	fetchUserInfo((userInfo) => {
		console.log(userInfo)
		fetchUserGames(userInfo.id, (userGames) => {
			console.log(userGames)
		})
	})
}

run()

## На промисах
function fetchUserData() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const data = { id: 1, name: 'Alex' }
			resolve(data)
		}, 1000)
	})
}

function fetchUserGames(id) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const data = ['game1', 'game2', 'game3']
			resolve(data)
		}, 1000)
	})
}

function run() {
	fetchUserData()
		.then((userData) => {
			console.log(userData)
			return fetchUserGames(userData.id)
		})
		.then((userGames) => {
			console.log(userGames)
		})
}

run()

## Promise example
function fetchPosts() {
	return new Promise((res, rej) => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(data => res(data.json()))
	})
}

function fetchTodos() {
	return new Promise((res, rej) => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then(data => res(data.json()))
	})
}

Promise.all([fetchPosts(), fetchTodos()])
	.then(data => {
		console.log(data[0])
		console.log(data[1])
	})
	.catch(message => console.log('Error', message))

? ====================================================================================================//
Реализуйте функцию getParams(), которая принимает на вход строку запроса (query string) 
	и возвращает параметры в виде объекта
	getParams('per=10&page=5');
	{ per: '10', page: '5' }
	getParams('name=hexlet&count=3&order=asc');
	{ name: 'hexlet', count: '3', order: 'asc' }

const getParams = (query: string) => {
	let a = query.split('&')
	const res: any = {}

	const result = a.reduce((acc, part) => {
		const [key, value] = part.split('=')
		acc[key] = value
		return acc
	}, res)

	return result
}

? =================//


! ====================================================================================================//
! React ==========================================================================================//
! ====================================================================================================//

? Показать / Скрыть блок (06-forms)
export default function App(props) {
	const [visibleBlock, setVisibleBlock] = React.useState(true)

	const buttonHandler = () => {
		setVisibleBlock(visible => !visible)
	}

	return (
		<>
			<button onClick={buttonHandler}>Show/Close</button>
			{visibleBlock && <TextBlock />}
		</>
	)
}

? Изменение свойств массива объектов при клике =================//
	Ф-я проходит по всем объектам массива и проверяет совпадение id
	и если он совпадает, то перезаписывает одно из свойств объекта

	const toggleTodoHandler = (id) => {
		setTodos(todos.map(todo => {
			return todo.id === id
				'?' { ...todo, isCompleted: !todo.isCompleted }
				: { ...todo }
		}))
	}
Вызывается в компоненте:
	<FaCheck onClick={() => toggleTodo(todo.id)} />

? Добавить свойство color в объект
	const [lists, setLists] = useState(BD.lists.map(item => {
		item.color = BD.colors.filter(
			color => color.id === item.colorId
		)[0].name
		return item
	}))

? Добавление класса active при клике на li
В useState получаем индекс елемента, на котором был клик (onClick={() => onClickItem(index)})
Сравниваем его с индексом элемента (className={cn(item, { active: activeItem === index })}). 
Если совпал - добавляется класс

import cn from 'classnames'
const [activeItem, setActiveitem] = useState(null)

	<ul>
		{myObject.map((item, index) => (
			<li
				onClick={() => onClickItem(index)}
				key={index}
				className={cn(item, { active: activeItem === index })}
			>
				{item}
			</li>
		))}
	</ul>

? Передача объекта в ф-ю колбэк
onClick={() => dispatch(reactionAdded({ posId: post.id, reaction: name }))}



! Others ====================================================================================================//

## Form
defaultChecked={true} 				для назначения по-умолчанию для чекбоксов
checked={this.state.checkbox} для управления через стейты
<input defaultValue='someText' /> назначить input значение по умолчанию
e.target.checked Для чекбоксов вернет true/false

## Когда ветвь else не нужна, можно также использовать более короткий логический синтаксис &&:
	<div>{isLoggedIn && <AdminPanel />}</div>
{condition && action} если условие правдиво - выполнится действие

<button onClick={() => f1('myArg')}>Click me!</button> Передать ф-ю с параметрами

## Вызов ф-ии только если она существует
onclick={clickHandler ? ()=>clickHandler() : null}

## Не стрелочные ф-ии нужно забиндить в конструктор
	constructor(props) {
		this.handler = this.handler.bind(this)
	}

## Прокрутить к блоку
	myRef.current.scrollIntoView()

## Naming
Ф-ю назвать deleteTodoHandler, а в пропсах deleteTodo
Это хорошая практика

## Перезагрузить страницу
onClick={() => window.location.reload(false)}

## Изменение стейта через колбэк ф-ю 
const [count, setCount] = useState(10)
const onClickHandler = () => {
	setInterval(() => {
		setCount(prev => prev + 1)
	}, 1000)
}
## window.confirm('Удалить задачу?')  Работает через window

## import/export Из отдельного файла (todo-multy)
./Components/index.js
export { default as List } from './List/List'
export { default as Tasks } from './Tasks/Tasks'

 app.jsx
import { List, Tasks } from './Components/index.js'

## Cделать кнопку неактивной
<button disabled={true}</button>

## UseRef
const inputRef = useRef('') 					- Инициализация
<input type="text" ref={inputRef} /> 	- Присвоение
inputRef.current.value 								- Вывод

## В Components файл с импортами
	export { default as About } from '../pages/About'
	export { default as Home } from '../pages/Home'

	import { About, Home } from './components/index'

## Изменить свойства объекта
	const changeStatus = (id: string): void => {
		setTodos(todos.map(todo => {
			if (todo.id !== id) {
				return todo
			}
			return {
				...todo,
				complete: !todo.complete
			}
		}
		))
	}





*/