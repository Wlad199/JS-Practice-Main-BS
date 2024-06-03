/*
Документация на руссском		https://scriptdev.ru/guide/000/
Онлайн компилятор						https://www.typescriptlang.org/play/?#code/Q
Таблица совместимостей			https://www.typescriptlang.org/docs/handbook/type-compatibility.html#any-unknown-object-void-undefined-null-and-never-assignability
Задачи по TS								https://github.com/typescript-exercises/typescript-exercises

npm install -g typescript		Установка typescript
npm i ts-node -g						Установка ts-node

tsc -help										Список команд
tsc --init									Инициализировать проект
tsc index.ts (tsc)					Запустить компилятор
clear												Очистить консоль
node index.js								Выполнить код из файла в терминале
ts-node index.ts						Выполнить код


? tsconfig.json =================//
noImplicitAny								Отключить ошибки при типе any
strictNullChecks						Отключить ошибки при значении null и undefined
"target": "es2016"					Версия стандарта JS

*  ==========================================================================================================//

Этап, на котором происходит контроль типов, определяет вид типизации.
Контроль типов, который происходит на этапе компиляции,
	называется статическим контролем типов или статической типизацией.
Контроль типов, который происходит на этапе выполнения программы,
	называется динамическим контролем типов или динамической типизацией.

Тип данных (или просто тип) — это характеристика, определяющая множество значений и операций,
	которые могут быть выполнены над этими данными.
Типы данных делятся на два вида:
	типы значения (value type) - хранят значение (их ещё называют значимыми типами)
	ссылочные типы (reference types) - хранят ссылку на значение
При операции присваивания значения, принадлежащего к значимому типу, данные копируются (дублируются) в памяти.
При операции присваивания значения, принадлежащего к ссылочным типам, копируется лишь ссылка на данные.

Если переменная объявлена, но ей не присвоено значение в ts это any (а не undefined)

Примитивы – это простые типы данных, строки, числа, булевы значения, символы и тд.
Литералы – это конкретные значения этих типов.
Примитивные литеральные типы - это типы на основании конкретных значений примитивов

?  =================//

? undefined & null
undefined 	Что-то еще не инициализированное
null				Что-то недоступное в данный момент (явно нет в данный момент)
null нужно использовать когда хотим осознанно указать что чего-то нет и не будет

? Void
Основное предназначение типа Void — явно указывать на то, что у функции или метода отсутствует возвращаемое значение.
Означает что у ф-ции нет возвращаемого значения или есть, но оно будет проигнорировано
Тип данных Void указывается с помощью ключевого слова void и,
в отличие от таких типов, как null и undefined, не имеет никаких значений.

? Never
Примитивный типа данных Never служит для указания того, что какие-либо операции никогда не будут выполнены.
Never обозначается ключевым словом never и так же, как и void, не имеет явных значений.
Тип never можно указать только той функции, из которой программа действительно никогда не сможет выйти
Такой сценарий может выражаться в виде функции, вызов которой приведет к однозначному исключению 
(часто используется в ф-ях, которые возвращают ошибку) или тело функции будет включать бесконечный цикл.

? тип unknown 
Является типобезопасным аналогом any
Опасность any в том, что это любой тип. В нем нет никакой строгости. Никакие проверки типов в нем не выполняются.
unknow это неизвестный тип. В any может быть что угодно, а в unknown – мы не знаем что может быть.
К чему угодно (any) может применятся что угодно, а к неизвестному (unknown) – ничего
Для работы с этим типом необходимо использовать сужение типов.
Данный тип можно использовать для работы с функциями, которые возвращают что-угодно.
Например, JSON.parse(). Так мы избежим ошибок и правильно будем работать с данными

Работа с union и intersection типами: 
	Если тип unknown составляет тип объединение (union), то он перекроет все типы, за исключением типа any
	Если тип unknown составляет тип пересечение (intersection), то он будет перекрыт всеми типами

? optional operator '?' 
Он позволяет сделать запрос к свойству или методу объекта и если его нет, то просто вернуть undefined.
Это позволяет избегать ошибок
В функциях optional operator устанавливается после названия аргумента

? Объединение '|' (Union)
Это мощный механизм, позволяющий создавать из множества существующих типов логическое условие,
	по которому данные могут принадлежать только к одному из указанных типов.
Объединение указывается с помощью оператора '|', по обе стороны которой располагаются типы данных.
	let message: string | number = 5
Можно использовать только операции, доступные со всеми типами в union типе. Иначе будет ошибка

? Пересечение & (Intersection)
Мощный механизм TypeScript, который позволяет рассматривать множество типов данных как единое целое.
Пересечение указывается с помощью оператора амперсанда &, по обе стороны которого указываются типы данных.
	let v1: T1 & T2 & T3;
Переменной, которой был указан тип пересечение A и B и С, должно быть присвоено значение,
	принадлежащее к типам A и B и C одновременно.
Другими словами, значение должно обладать всеми обязательными признаками каждого типа, определяющего пересечение.

? Non-Null and Non-Undefined - '!'
Для указания того, что сущность точно существует
Даже если TS будет предупреждать вас об ошибке, то этот оператор отключит это поведение.
Использовать его стоит только тогда, когда уверены в наличии сущности. Иначе будут ошибки в рантайме

Оператор позволяет подкорректировать логику TS и сказать, что функция точно будет синхронной.
И другие ситуации, когда TS не уверен в существовании чего-либо на момент использования

	let name: string
	console.log(name!) // (еще не присвоено значение) Чтобы не подсвечивалась ошибка добавляем '!'
	function(){
		name = "Alex"
	}

? readonly
TS позволяет на уровне синтаксиса сказать, что свойства объекта, массивы или кортежи являются неизменяемыми.
Любая операция, направленная на это, будет воспринята как ошибка. 
При использовании readonly на массиве, он и его содержимое становятся неизменяемыми.
Такие методы как pop(), push() и тп работать не будут. В кортежах тоже самое

	interface User{
		readonly login: string
	}

альтернативный синтаксис для объектов:
	const user: Readonly<User>{ // Сделать interface User неизменяемым
		login: 'qwerty',
		password: '***'
	}

альтернативный синтаксис для массивов:
	const basicPort: ReadonlyArray<number> = [3000, 3001, 5555]

? перечисления (Enum)
enum представляет собой набор логически связанных констант,
	в качестве значений которых могут выступать как числа, так и строки.
Идентификаторы-имена для перечислений enum принято задавать во множественном числе.
Часто используется когда есть ограниченное число сущностей 
При компиляции в js становятся ф-ями
В случае, когда идентификаторам констант значение не устанавливается явно,
	они ассоциируются с числовым значениями, в порядке возрастания, начиная с нуля.

	enum Fruits {
		Apple, // 0
		Pear, // 1
		Banana, // 2
	}
	
При обращении к константе перечисления через точечную нотацию, будет возвращено значение.
 let value: number = Fruits.Apple // 0
А при обращении к перечислению с помощью скобочной нотации и указания значения в качестве ключа,
	будет возвращено строковое представление идентификатора константы.
		let identificator: string = Fruits[value]; // “Apple”

Перечисление enum, объявленное с помощью ключевого слова const,
	после компиляции не оставляет в коде привычных конструкций.
Вместо этого компилятор встраивает литералы значений в места,
	в которых происходит обращение к значениям перечисления
Обычный Enum в js это ф-я, константный - константа

* ====================================================================================================//

? Array
Если при объявлении массива указать тип string[], то он сможет хранить только элементы,
	принадлежащие или совместимые с типом string (например, null, undefined, literal type string).
var animalAll: string[] = ['Elephant', 'Rhino', 'Gorilla']
let names: Array<string> = ["Tom", "Bob", "Alice"]

? Тип кортеж (Tuple) 
Описывает строгую последовательность множества типов, каждый из которых ограничивает элемент массива с аналогичным индексом.
Простыми словами, кортеж задает уникальный тип для каждого элемента массива.
Перечисляемые типы обрамляются в квадратные скобки, а их индексация, так же как у массива начинается с нуля - [T1, T2, T3].
Типы элементов массива, выступающего в качестве значения,
должны быть совместимы с типами обусловленных кортежем под аналогичными индексами.
	let v0: [string, number] = ['Dambo', 1]

spread
Определение типа кортежа может включать только одно распространение (spread).
Распространение не может быть указано перед необязательными типами.
	const arr:[number, string, ...boolean[]] = [5, 'str', true, false] Спред оператор

? Псевдонимы Типов (types alias)
Псевдонимы типов можно создавать как для типов объединений, так и для типов пересечений.
	type SomeType = number | string | boolean; // union type
	type OtheType = number & string & boolean; // intersection type

	type User = {
		name: string,
		age: number,
		skills: string[]
	}
	type Role = {
		id: number
	}
Объединить 2 типа
	typeUserWithRole = User & Role
Или тип User или Role
	typeUserWithRole = User | Role


? Interface
Это синтаксическая конструкция, предназначенная для описания открытой (public) части объекта без реализации (api).
В TypeScript интерфейсы не могут содержать реализацию
Объект, реализующий интерфейс, обязан реализовывать его в полной мере.
В интерфейсы можно помещать только объекты, в type допустимы литералы
Интерфейсы можно расширять. Type - нет.

	interface IAnimal {
		name: string;
	}

	interface IFlyable {
		flightHeight: number;
	}

Объединить интерфейсы
	interface IAnimalAndFlyable extends IAnimal, IFlyable {
		test: string			// добавить новые свойства
	}

Index Signatures
	Если не известно сколько свойств будет в объекте, но известно,
	в каком виде они все будут, то можно использовать специальный синтаксис:

	interface Style{
		[key: string]: string
	} // для type тоже работает

? Сужение
typeof - когда хотят установить принадлежность к типам:
	number, string, boolean, object, function, symbol или undefined.
instanceof - когда необходимо установить его принадлежность к типу,
	определяемого классом и находящегося в иерархии наследования.
Array.isArray(arr) - для массивов
key in obj - для проверки наличия ключа в объекте

? запросы типов (Type Queries)
Позволяет получить тип, связанный со значением по его идентификатору и в дальнейшим использовать его как обычный тип.
Чаще всего он необходим, когда мы четко понимаем, какой тип нам нужен в этой ситуации
	и он нигде не будет дальше повторяться
Запрос типа осуществляется оператором typeof, после которого идет идентификатор, ссылающийся на значение.
Запрос типа также может располагаться в местах указания типа.
С помощью данного механизма можно получить тип любой конструкции,
	будь то переменная, параметр функции или метода, а также член объекта и класса.

	const dataFromControl = {
	water: 200,
	el: 350,
	}

	function checkReading(data: typeof dataFromControl): void { // Взяли типы из dataFromControl
		const datafromUser = {
			water: 200,
			el: 350,
		}
		if ( // Сравниваем данные из аргумента с datafromUser
			data.el === datafromUser.el &&
			data.water === datafromUser.water
		) .....
		.....
	}

? утверждение типа (оператор 'as')
Если мы точно знаем, что значение свойства подходит,
	то мы можем утвердить это значение оператором : as

	const fetchData = (url: string, method: 'GET' | 'POST'): void => {
		console.log(method)
	}
	const reqOpions = {
		url: 'https:someurl.com',
		method: 'GET'
	 альтернативный способ #1:
		(method: 'GET' as 'GET') // сразу перевести в литерал
	}

		альтернативный способ #2:
		const reqOpions = {
			url: 'https:someurl.com',
			method: 'GET'
		} as const // превратить весь объект в литерал типа

	fetchData(reqOpions.url, reqOpions.method as 'GET')
	или:
	fetchData(reqOpions.url, <'GET">reqOpions.method) // конфликт по скобкам (например React)

reqOpions.method - строка, а ожидается литерал
TS позволяет вам уточнить строку в её литерал (конкретное значение).
Но при изменении значения свойства в объекте TS вам не укажет на ошибку
Доступно лишь утверждение более специализированных типов:
	строка - её литерал, число - его литерал и тп. 
В обратную сторону операция не имеет смысла

Часто утверждение типов можно встретить при работе с DOM-деревом,
когда мы хотим уточнить, с каким элементом мы работаем:
	const box = document.querySelector('#box') as HTMLElement
	const input = document.querySelector('input') as HTMLInputElement
	const вход = <HTMLInputElement>document.querySelector('input') as HTMLInputElement

Конструкция as сделает переменную константой:
let a = 'value' as const // Тип изменится со 'string' на литерал

? создание литералов через конструктор
TypeScript существует типы, представляющие конструкторы 
	одноименных типов из JavaScript (Number, String, Boolean, Symbol, BigInt)
Также существуют типы, представляющий примитивные значения
	литералов (number, string, boolean, symbol, bigInt)

Тип number неявно преобразуется в тип Number, но не наоборот
Не используйте конструкторы для создания значений.
Это может привести к непонятным ошибкам

? Преобразование типов
Ф-я принимает объект с типом User и на основании его создает объект с типом Admin
function userToAdmin(user: User): Admin {
	return {
		name: user.name,
		role: 1
	}
}

? Защитник типа (type guard)
Правила, которые позволяют выводу типов определить суженый диапазон типов
	для значения называются защитниками типа: type guards

function isNumber(n: unknown): n is number {
	return typeof n === 'number'
}

Функция inNumber вернет true только если аргумент будет числом.
Оператор is позволяет сказать, что будет возвращено логическое значение,
	где проверяется, что n это число.

? перегрузка функций (overload)
Чтобы наглядно прописать все варианты использования функции и задокументировать их, применяется перегрузка
При использовании этого приема подсказки будут более информативны и специфичнее.
Особенно стоит использовать данный прием, если функция сложная и имеет много необязательных аргументов
Необходимо соблюдать несколько правил:
	1. Перегрузка записывается до основного тела функции
	2. Аргументы могут называться другими именами, это допустимо
	3. Все перегрузки должны быть совместимы с главной функцией

--Перегрузка--
function calculateArea(side: number): Square
function calculateArea(a: number, b: number): Rect

function calculateArea(a: number, b?: number): Square | Rect {...}

? работа с dom в TS
Определенные html-элементы на странице. Содержат специфичные для них свойства и методы в дополнение к общим
Все эти интерфейсы нужны для четкого указания с чем мы работаем и правильного доступа к нужным свойствам/методам

	const p = document.querySelector('.some-class') as HTMLParagraphElement
	const a = document.querySelector('a') as HTMLAnchorElement
	const a = document.querySelector('a') // Автоматически поймет по тегу

Если мы указываем селектор, по которому и так понятно, что за элемент будет получен - 
	TS автоматически подставит нужный тип интерфейса. Утверждение в таком случае не нужно
Такая же ситуация и при создании новых элементов через команду createElement()









*/