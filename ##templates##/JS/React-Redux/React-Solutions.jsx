/*
! ====================================================================================================//
! Solutions ==========================================================================================//
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