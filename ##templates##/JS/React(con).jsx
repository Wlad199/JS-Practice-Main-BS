/*
React (https://unpkg.com/react@18/umd/react.development.js)
React DOM (https://unpkg.com/react-dom@18/umd/react-dom.development.js)
Babel (https://unpkg.com/babel-standalone@6/babel.min.js)

Тестовые массивы (https://jsonplaceholder.typicode.com/)
Массив пользователей (https://reqres.in/api/users)
Массив коктелей (https://www.thecocktaildb.com/api.php)

npm commands
	npm init 															создать package.json
	npm i (npm install)										установить зависимости
	npm i hello-world-npm@1.1.1						с выбором версии 
	npm i hello-world-npm@1.1.1 -Е				с точным выбором версии (без ^) 
	npm i hello-world-npm -D (--save-dev)	с установить в devDependencies 
	-g (лучше через npx)									Установить глобально
	npm un ... (uninstall)								Удалить

1 .Install NODE
2. Install CRA (Create React APP)
	(npx create-react-app my-app)
3. Запустить CRA.
	npm run start (build)
4. Создать, если надо package.json
	npm init
5. Установить зависимости (node modules)
	npm i (npm install)
6. Устанавливать библиотеки:
	Например: npm i hello-world-npm
	Или вручную добавить в package.json и npm i
	С выбором версии npm i hello-world-npm@1.1.1
	С точным выбором версии (без ^) npm i hello-world-npm@1.1.1 -Е
	С установить в devDependencies npm i hello-world-npm -D (или: --save-dev)
	Установить глобально: -g (лучше через npx)
 Удалить: npm un ... or uni (uninstall)


Внутри jsx можно использ. только map или reduce (filter только с последующей конвертацией в react)
	т.к. они возвращают результат. За пределами jsx можно испозьз. что угодно.

Вместо class используется className
Подключение стилей: import './style.css';

Если внутри jsx использ Map() то елементам массива нужен уникальный ключ key={}
В случае, если исходный массив точно не будет меняться - то можно использ второй аргумент ф-ции Map - index: Map((user, index)=>...)
В случае если ключи в массиве уникальны - можно использ их
В остальных случаях лучше генерировать ключи самостоятельно на основе данных

?  =================//
Для bable нужно указать type="text/babel" в подключаемом скрипте с компонентом

Импорты из внешних пакетов следует размещать в начале файла, а затем свои импорты.

Для рендеринга React-элемента, сперва передайте DOM-элемент в ReactDOM.createRoot(),
	далее передайте React-элемент в root.render():

	const root = ReactDOM.createRoot(
		document.getElementById('root')
	);
	const element = <h1>Hello, world</h1>;
	root.render(element);

Изменение состояния компонента происходит асинхронно
	
? Events =================//
onSubmit				отправка формы
onClick					обработчик кликов
onChange				обработчик инпутов
onMouseEnter		мышь наведена
onMouseLeave		мышь ушла
onMouseDown			мышь нажата
onMouseUp				мышь отжата

? style =================//
<div style={{ backgroundColor: 'green', display: 'inline-block' }}>text</div>
React автоматически добавит суффикс «px» к свойствам стилей с числовым значением.
Если вы хотите использовать единицы измерения, отличные от «px»,
	укажите значение в виде строки с желаемой единицей измерения. 

import styles from './Test.module.scss'
<div className={styles.active}><div/>

Менять класс при условии:
	<li className={`${styles.todo} ${todo.isCompleted ? styles.active : ''}`}>

? LiveCycle Methods  =================//
При загрузке приложения первым запускается конструктор
Конструктор запускается только один раз при загрузке
Пропсы передаются через конструктор.
Если пропсы изненятся со веременем - мы об этом не узнаем.

Для этого есть метод getDerivedStateFromProps()
Он запускается каждый раз при перерисовке перед запуском рендером

Метод componentDidMount() запускается после раборы рендера
Т.е когда компонент выведен и отрисовка закончена
Запускается только один раз
Применяется когда нужно что-то поменять после первой отрисовки страницы

componentDidUpdate(prevProps, prevState, this.props, this.state) запускается при каждом обновлении (работе стейтов)
	prevProps, prevState			Старые значения
	this.props, this.state		Текущие значения
	Не вызывается при первом рендере. Метод позволяет работать с DOM при обновлении компонента.
	Также он подходит для выполнения таких сетевых запросов,
		которые выполняются на основании результата сравнения текущих пропсов с предыдущими.

componentWillUnmount() React вызовет его перед тем, как ваш компонент будет удален (размонтирован) с экрана.
Это обычное место для отмены получения данных или удаления подписок

? getDerivedStateFromProps() Поместить пропс в стэйт =================//
static getDerivedStateFromProps(props, state)		
getDerivedStateFromProps вызывается непосредственно перед вызовом метода render,
	как при начальном монтировании,так и при последующих обновлениях.
Он должен вернуть объект для обновления состояния или null, чтобы ничего не обновлять.
Этот метод существует для редких случаев, когда состояние зависит от изменений в пропсах

	static getDerivedStateFromProps(props, state) {
		return {
			s1: props.a1,
			s2: props.a2
		}
	}

? componentDidMount() изменение после монтирования элемента =================//
React будет вызывать componentDidMount, когда ваш компонент будет добавлен (смонтирован) на экран.
Это обычное место для начала получения данных, установки подписок или манипулирования узлами DOM.
Если вы реализуете componentDidMount, вам обычно необходимо реализовать другие методы жизненного цикла, чтобы избежать ошибок.
Например, если componentDidMount считывает некоторые состояния или пропсы,
	вам также необходимо реализовать componentDidUpdate для обработки их изменений
	и componentWillUnmount для очистки того, что делал componentDidMount.

	componentDidMount() {
		this.setState({
			s3: this.state.s1 * this.state.s2
		})
	}

? Хуки =================//
Хуки — это функции, с помощью которых вы можете «подцепиться» к состоянию и методам жизненного цикла React из функциональных компонентов.
Хуки не работают внутри классов — они дают вам возможность использовать React без классов.
Хуки — это функции JavaScript, которые налагают два дополнительных правила:
	1. Хуки следует вызывать только на верхнем уровне.
		Не вызывайте хуки внутри циклов, условий или вложенных функций.
	2. Хуки следует вызывать только из функциональных компонентов React.
		Не вызывайте хуки из обычных JavaScript-функций.
		Есть только одно исключение, откуда можно вызывать хуки — это ваши пользовательские хуки.

	useEffect будет срабатывать, когда компонент монтируется или идет перерендер React.useEffect(() => {})
	Аналог Component componentDidMount (анонимная ф-я и пустой массив) React.useEffect(() => {}, [])
	Можно передать в массив стейт, тогда useEffect будет срабатывать только при изненении этого стейта React.useEffect(() => {}, [count])

 ============
	componentDidUpdate() следить за любыми обновлениями
		React.useEffect(() => {
			console.log('component was update')
		})

	============
	componentDidUpdate() следить только за указанными стейтами
		React.useEffect(() => {
			console.log('component was showed')
		}, [count, numbers])

	============
	componentDidMount() + componentWillUnmount()
	componentDidMount() сработает только 1 раз
	Вложенная калл-бэк ф-я работает как componentWillUnmount()
		React.useEffect(() => {
			console.log('component was showed')
			return () => {
				console.log('Компонент удалён')
			}
		}, [])


? Navigation =================//
(https://www.youtube.com/playlist?list=PLiZoB8JBsdznY1XwBcBhHL9L7S_shPGVE)

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

	<BrowserRouter>
		<nav>
			<Link to='/'>Главная</Link>
			<Link to='/cat'>Категории</Link>
			<Link to='/about'>О сайте</Link>
		</nav>

		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/about' element={<About />} />
			<Route path='/cat' element={<Category />} />
			<Route path='*' element={<Notfound />} />
		</Routes>
	</BrowserRouter>

В v6 exact по умолчанию

NavLink добавляет активной вкладке класс active
Добавить собственный класс (можно записать в константу)
	className={({ isActive }) => isActive ? '_active' : ''}
Добавить ситли:
	style={({ isActive }) => isActive ? { color: 'red' } : {}}

Если вместо slug исрользовать id, то нужно привести его к строке:
	<Link to={course.slug (course.id.toString()) } />

Перейти по ссылке на один уровень вверх
	to='..' relative='path' - на один уровень вверх относительно текущего пути
	<Link to='..' relative='path'>Turn Back</Link>

## Navigation-st =================//
App:
	При вложенном роутинге дочерние маршруты относительны родительского
	Т.е. все ссылки из <Menu /> онтосительны <MainLayout />
	index для пути по-умолчанию, остальные пути относительны path='/'
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path='about' element={<About />} />
					<Route path='contacts' element={<Contacts />} />
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>

MainLayout:
	Меню с навигацией и Outlet с активным дочерним компонентом
		<>
			<Menu />
			<Outlet />
		</>

Menu:
	'/' отвечает за абсолютные ссылки, без него - ссылки относительны
	относительные ссылки не сломаются при изменении ссылки их родителя
	'.' означает, что путь как у родителя
		<nav>
			<Link to='.'>Home</Link>
			<Link to='about'>About</Link>
			<Link to='contacts'>Contacts</Link>
		</nav>

? Прередача данных =================// 
https://it-dev-journal.ru/articles/kak-peredavat-dannye-mezhdu-komponentami-v-react-js
Данные можно передавать:
	через пропсы
	используя callback-функцию;
	пробросом пропсов от уровня к уровню (prop drilling)
	при помощи контекста (React Context AP)
	через хранилище (store)

Прередача данных:
	От родительского компонента к дочернему - через пропсы
	От дочернего компонента к родительскому - используются функции обратного вызова (callback-функции)
	Между соседними компонентами - через общий предок.
		Днные от одного Реакт компонента передаются вверх, в компонент-предок, через callback-функцию,
		а компонент-предок передает их в другой компонент через проп.
	Через несколько уровней вверх/вниз - prop drilling или Context API или state management библиотеки, такие как Redux, MobX, Recoil и т.д.

? UseEffect 
ф-я, которую передают в UseEffect должена возвращать либо undefinded
	либо другую ф-ю, которая будет выполнена при unmount
Асинхронная ф-я (async) всегда возвращает проимис
Поэтому асинхронную ф-ю нужно обернуть в ф-ю коллбэк:
	useEffect(() => {
		async function fetchData() {
			const res = await fetch(URL)
			const post = await res.json()
			setPosts(post)
		}
		fetchData()
	}, [])

	ИЛИ

Immediatelly invoke function expression IIFI (самовызывающаяся ф-я)
	useEffect(() => {
		(async function () {
			const res = await fetch(URL)
			const post = await res.json()
			setPosts(post)
		})()
	}, [])

? Other =================//
defaultChecked={true} 				для назначения по-умолчанию для чекбоксов
checked={this.state.checkbox} для управления через стейты
<input defaultValue='someText' /> назначить input значение по умолчанию

##Когда ветвь else не нужна, можно также использовать более короткий логический синтаксис &&:
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

## Добавление класса active при клике на li
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

## Cделать кнопку неактивной
<button disabled={true}</button>


? questions  =================//
OOP
Замыкания
props & state
Жизненый цикл компонентов
Expression & jsx
Forms
Git(Залить, скачать, обновиться, перезаписать, свести)

! Errorr ===================================================

! import classNames from 'classnames' Плагин


! NPM package ===================================================

## Фэйковая загрузка (заглушка, скелетон)
react-content-loader

## Icons =================//
Подключить пакет: https://www.npmjs.com/package/react-icons 
	(npm i react-icons)
Выбрать иконку: https://react-icons.github.io/react-icons/

## Generator Keys =================//
https://www.npmjs.com/package/uuid (npm i uuid)
	import { v4 as uuidv4 } from 'uuid'

## query-string =================//
Преобразует URL в объект
	(npm i query-string) 
	
## json-server (https://my-js.org/docs/cheatsheet/json-server/)
npm install json-server
json-server ./src/assets/db.json --port 3001
"fake-json": "json-server ./src/assets/db.json --port 3001" (package.json)
(?age=15) фильтровать
(?_sort=name) сортировать
(?_limit=2) Установить лимит

## npm i -D concurrently
Позволяет запускать несколько команд одновременно

## classnames
npm install classnames

! Tasks ===================================================

? 1.0 
const USERS = [
	{ name: 'Alex', age: 18, id: 562 },
	{ name: 'John', age: 58, id: 552 },
	{ name: 'Bob', age: 15, id: 592 },
	{ name: 'Bob', age: 11, id: 762 },
]
1. Для массива вывести имена пользователей в документ
	Создать уникальные ключи:
	через имена
	через Map(), используя index
	Написать функцию, генерирующую уникальные ключи (Alex_18_562)

	
2. Создать кнопку и инпут через компоненты
	Повесить обработчики событий
	Вывести в консоль события event & value
	Завернуть все в форму и навесить на нее сабмит

? 1.1 Вывод ассоциативного массива.
	Создайте компонент Nav, в него передайте props.nav 
		куда добавьте ассоциативный массив в формате пункт меню - ссылка. 
		Все ссылки поставить как якоря (#). Данные в Nav должны передаваться из файла index.js. 
		Вывести указанный массив на страницу.
			let nav = {
				'main': '/index',
				'about': '/about',
				'price': '/price'
			}
	Добавьте компонент footer.
		Компонент должен принимать props - контакты (массив телефонов) и адрес:
		массив из трех строк: город, улица, дом - офис.
		Все данные должны передаваться через index.js.
		Также передавайте в footer заголовок для вывода. 
	
? 1.2 Создать массив с помощью https://mockaroo.com/  (16-map-array-cards)
	Сгенерировать карточки пользователей ()  (id firstТame, lastТame, email, img )
		Создать компонент Persons, который пройдет методом map и вернет массив карточек,
		в котором будет компонент Person.Person будет наполнять карточки данными

? 2. Добавьте параграф.
		При клике по кнопке - выводите текст button work в параграф.
	Добавьте кнопку с текстом Count.
		Создайте state.count = 0 и выведите его на страницу в параграф.
		Добавьте на кнопку Count событие, которое будет вызывать метод увеличивающий state.count на единицу при каждом нажатии.
		Добавьте кнопку ResetCount обновляющую count.

? 2.1 Создать 2 кнопки через состояния, увелич. counter независимо
	Создать 2 кнопки через состояния, увелич. один counter 

? 2.2. Создать 4 кнопки, увеличивающие счетчик (15-state-via-props)
	Кнопки и Счетчик в отдельных компонентах

? 3. Input, select
	Добавьте input и параграф.
		При вводе текста в input - выводите в параграфе вводимый текст.
		Если длина вводимого текста меньше 6 символов - то выводите на страницу предупреждение о том, что длина меньше 6.
	Добавьте checkbox
		При изменении его состояния выводите checkbox checked или checkbox unchecked.
	Добавьте выпадающий список.
		При изменении состояния - выводите value выбранного на страницу.
	Добавьте div и кнопку.
		При нажатии кнопки - увеличивайте ширину div на 3 px.
		Добавьте кнопку Reset позволяющую сбрасывать состояние до начальной ширины.
	Добавьте полнузок.
		При изменении ползунка выводите его value на страницу.
	Добавьте кнопку и изображение.
		При клике на кнопку скрывайте изображение, при повторном клике - показывайте.

? 4. Формы.
		Вывести value из input в блок
		Рендерить блок только когда в value что-то есть
		Создайте форму. Форма должна содержать:
			input[text]
			input[number]
			input[range]
			textarea
			select
			input[submit]
		Написать одну ф-ю, которая будет обрабатывать все inputs
			и выводить в формате: Имя - значение

? 5. getDerivedStateFromProps() & componentDidMount()
	Передайте из index.js props a1 = 5 и a2 =10 в компонент App.js.
		Выведите их на страницу как пропсы.
	Используя getDerivedStateFromProps() присвойте пропсы a1 и a2 в state s1 и s2 соответственно.
		Выведите на страницу под state.
	В конструкторе объявите state s3 который будет равен s1 умноженному на s2.
		Выведите его на страницу.
	Создайте компонент App2.js и подключите его в App.js.
		Передайте s3 в качестве пропса z1 внутрь App2.
		Выведите его на страницу в App2 как props.
	В App2 присвойте z1 в state y1. Выведите y1*10 на страницу.

? 6. Route-Navigation
	6.1 Создайте компоненты Header.js, Home.js, About.js, Category.js, Footer.js.
	6.2 Компонент Header содержит тег nav, в котором создана следующая верстка:
		<ul>	<li><a href="/">Главная</a></li>	<li><a href="/about">О сайте</a></li>	<li><a href="/cat">Категории</a></li>	</ul>
	6.3 Допишите в App.js Router, который позволяет перейти по данным ссылкам
		и попасть на указнные страницы-компоненты. Пишем MPA.
	6.4 Создайте компонент CategoryDescription.
		Он должен выводить заголовок первого уровня со словом Category: и потом имя категории ( имя коррелирует с url адресом).
	6.5 Допишите в Category.js следующую верстку:
		<a href="/cat">Назад</a>
		<ul>	<li><a href="/cat/notebook">Ноутбуки</a></li>	<li><a href="/cat/monitor">Мониторы</a></li>	<li><a href="/cat/cellphone">Мобильные телефоны</a></li>	</ul>
	6.6 Добавьте в App.js Router который позволит переходить на соответствующие страницы категорий.
	6.7 Создайте страницу Error404 и роутинг к ней.
			Заюзать Navlink
	6.8 Создайте новое приложение unit_03_spa где повторите указанные действия в SPA стиле
	6.9 Создайте в App.js две константы, которые содержат данные главной навигации и навигации в категориях.
		Передайте эти данные как props в нужные компоненты. Распечатайте ul-li-a на основе данных массивов.

? 7. Отрисовка постов (17-json-posts)
	Получить данные с ('https://jsonplaceholder.typicode.com/posts')
	Создать компоненты Posts и Post
	Вывести посты в документ
	Сделать проверку на ошибку при получении данных и вывести ее
	Добавить надпись Loading... при загрузке

? 8. Получение данных с API и вывод
	Получить данные с ('https://thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink')
	Вывести надпись LOADING...
	В случае ошибки вывести её

? Приложение с 2 компонентами: (axios-test)
	1. Показать список пользователей через json-server
	2. Добалять пользователей через форму (отправка на сервер и отрисовка)














*/
/*
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













*/