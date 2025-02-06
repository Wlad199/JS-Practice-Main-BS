/*
https://it-dev-journal.ru/articles/polnoe-rukovodstvo-po-react-router-v6-osnovy-react-router
? Navigation =================//
(https://www.youtube.com/playlist?list=PLiZoB8JBsdznY1XwBcBhHL9L7S_shPGVE)

## index:
	<BrowserRouter>
		<App />
	</BrowserRouter>

## App:
	При вложенном роутинге дочерние маршруты относительны родительского
	Т.е.все ссылки из < Menu /> относительны < MainLayout />
	index для пути по - умолчанию, остальные пути относительны path = '/'
	<Routes>
		<Route path='/' element={<MainLayout />}>
			<Route index element={<Home />} />
			<Route path='about' element={<About />} />
			<Route path='contacts' element={<Contacts />} />
			<Route path='posts/:id' element={<Singlepage />} />
			<Route path='*' element={<NotFound />} />
		</Route>
	</Routes>

## MainLayout:
	Меню с навигацией и Outlet с активным дочерним компонентом
	<>
		<Menu />
		<Outlet />
	</>

## Menu:
	'/' отвечает за абсолютные ссылки, без него - ссылки относительны.
		относительные ссылки не сломаются при изменении ссылки их родителя
	'.' означает, что путь как у родителя
	<nav >
			<Link to='.'>Home</Link>
			<Link to='about'>About</Link>
			<Link to='contacts'>Contacts</Link>
	</nav >

## Singlepage:
	const { id } = useParams()
		return (
			<div>
				{id}
			</div>
		)



! Others ====================================================================================================//
? Добавить собственный класс (можно записать в константу)
	className={({ isActive }) => isActive ? '_active' : ''}
	или
	const addClass = ({ isActive }) => isActive ? '_active' : ''
	<NavLink className={addClass} to='/'>Home</NavLink>

## Добавить стили:
	style={({ isActive }) => isActive ? { color: 'red' } : {}}

Если вместо slug использовать id, то нужно привести его к строке:
	<Link to={course.slug (course.id.toString()) } />

Перейти по ссылке на один уровень вверх
	to='..' relative='path' - на один уровень вверх относительно текущего пути
	<Link to='..' relative='path'>Turn Back</Link>

? useParams возвращает объект из to (<Link to={`/posts/${post.id}`}/>)
const { id } = useParams()

? useNavigate Позволяет перемещаться по истории вперед и назад
Вернуться назад на 1 стр:
	const navigate = useNavigate()
	const goBack = () => navigate(-1)
Перейти на другую страницу (плохая практика, лучше через link)
	const goHome = () => navigate('/', { replace: true, state: 'some state' })
		replace по умолчанию false.
		{ replace: true } - чтобы не записывать данное движение в историю
		{state: 'some state'} - передать пропсы, которые потом можно прочитать через useLoaction
Перенаправить на другую страницу через некоторое время:
	useEffect(() => {
		setTimeout(() => {
			navigate('/')
		}, 1000);
	}, [])

? Redirect Позволяет перенаправить на другой адрес
	import { Navigate } from 'react-router-dom'

	<Route path='about' element={<About />} />
	<Route path='about-us' element={<Navigate to='/about' replace />} />

	about-us перенаправлен на about
	replace нужен чтобы не сохранилась история посещения about-us

? useLoaction Возвращает объект 
		hash: ""
		key: "p8kov4y6"
		pathname: "/posts" - путь
		search: "" - (гет патаметры)
		state: null - стейты, которые были переданы через 
			const goHome = () => navigate('/', {state: 'some state' })

? useSearchParams содержит параметры поиска
export default function App() {
	const [searchParams, setSearchParams] = useSearchParams()
	const showActiveUsers = searchParams.get('filter') === 'active'

	console.log(useSearchParams())
	return (
		<button onClick={() => setSearchParams({ filter: 'active' })}>Active Users</button>
		<button onClick={() => setSearchParams({})}>Reset Users</button>
		{showActiveUsers ? <p>Only Active Users</p> : <p>All Users</p>}
	)
}

? Lazy Load	 
Комнонент About должен быть экспортирован по умолчанию
Вызвать динамический импорт
	const LazyAbout = React.lazy(() => import('./pages/About.jsx'))

	export default function App() {
		return (
			<Routes>

Обернуть <LazyAbout /> в <React.Suspense>
fallback={'...Loading'} Заглушка до отрисовки LazyAbout
				<Route path='/about' element={
					<React.Suspense fallback={'...Loading'}>
						<LazyAbout />
					</React.Suspense>
				} />

			</Routes >
		)
	}


! Tasks ====================================================================================================//

? 1. Route-Navigation
	1.1 Создайте компоненты Header.js, Home.js, About.js, Category.js, Footer.js.
	1.2 Компонент Header содержит тег nav, в котором создана следующая верстка:
		<ul>	<li><a href="/">Главная</a></li>	<li><a href="/about">О сайте</a></li>	<li><a href="/cat">Категории</a></li>	</ul>
	1.3 Допишите в App.js Router, который позволяет перейти по данным ссылкам
		и попасть на указнные страницы-компоненты. Пишем MPA.
	1.4 Создайте компонент CategoryDescription.
		Он должен выводить заголовок первого уровня со словом Category: и потом имя категории ( имя коррелирует с url адресом).
	1.5 Допишите в Category.js следующую верстку:
		<a href="/cat">Назад</a>
		<ul>	<li><a href="/cat/notebook">Ноутбуки</a></li>	<li><a href="/cat/monitor">Мониторы</a></li>	<li><a href="/cat/cellphone">Мобильные телефоны</a></li>	</ul>
	1.1 Добавьте в App.js Router который позволит переходить на соответствующие страницы категорий.
	1.7 Создайте страницу Error404 и роутинг к ней.
			Заюзать Navlink
	1.8 Создайте новое приложение unit_03_spa где повторите указанные действия в SPA стиле
	1.9 Создайте в App.js две константы, которые содержат данные главной навигации и навигации в категориях.
		Передайте эти данные как props в нужные компоненты. Распечатайте ul-li-a на основе данных массивов.

	? 2. 03-DinamicLinks
	2.1 Создать навигацию Home, About, Posts, NotFound 
	2.2 Посты получить с "https://jsonplaceholder.typicode.com/posts" и отрисовать
	2.3 Отрисовать каждый пост при переходе по ссылке через динам. ссылку
	2.4 Для каждого поста добавить ссылку на страницу с редактированием конкретного поста
	2.5 Добавить к постам кнопку перехода назад и на Home
	2.6 Добавить к ненайденой странице автопереход на главную через 1с
	2.7 Стилизовать NavLink через isActive разными способами



		*/