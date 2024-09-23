/*
! Браузер и сеть
! Интернет
! Доменное имя, DNS, хостинг
! Протокол, http, https, ssl/tls


! Import / Export / require()
! Symbol 
! Мемоизация в JS
! каррирование (currying)
! Proxy
! Object.freeze()
! [Symbol.iterator] yield*
! cookies
! fromEntries
! REST API

! Промисификация
! DOM async / defer
! Асинхронность: Сетевые запросы, Клиент-сервер
! Заголовки запросов

! Операторы короткого замыкания
! цепочка прототипов, прототипное наследование

! solid
! Тестирование и отладка Jest дебаггинг
! RESTful API
!	ф-ии генераторы

! ESLint
! WebPack
! Git

! ====================================================================================================//
Вопросы по JS: ( 170 )
	6	11	14	20	37	45	48	55	56	65	70	79	92	98	104	114	129	130	132	143
	164	182	
	https://my-js.org/docs/other/js-questions
	https://www.frontendinterviewhandbook.com/ru/javascript-questions/
	https://roadmap.sh/questions/javascript

Вопросы по React:
	https://my-js.org/docs/other/react-questions
	https://roadmap.sh/questions/react

todo Q&A =================//

Метод push возвращает длину нового массива.
Ключи объекта конвертируются (преобразуются) в строки
Оператор delete удаляет только значение массива по указанному индексу, 
	сам индекс остается, его значением становится undefined.
	При этом, количество элементов в массиве и его длина сохраняются.
В нестрогом режиме дублирующиеся параметры в обычных функциях разрешены.
	В отличие от обычных, в стрелочных функциях дублирующиеся параметры запрещены, независимо от режима выполнения кода.
Стрелочные функции не имеют прототипа, arguments, this, super и new.target.
REST (Representational State Transfer) — стиль общения компонентов,
	при котором все необходимые данные указываются в параметрах запроса.
Оператор + не предназначен для сложения массивов. Поэтому массивы преобразуются в строки и объединяются.
NaN не равен никакому другому значению, включая NaN. NaN является числом
	В отличии от операторов равенства (== и ===), для Set все NaN являются одинаковыми
Асинхронная функция всегда возвращает промис
new Number - это встроенная функция-конструктор. 
	И хотя она выглядит как число, это не настоящее число: у него имеется ряд дополнительных возможностей.
	При использовании === должны совпадать не только значения, но и типы данных. new Number() - это не число, а объект.
Нельзя добавлять свойства к конструктору как к обычному объекту.
	Если необходимо добавить свойство или метод всем экземплярам, то следует использовать прототипы.
При создании объекта без помощи ключевого слова new создается глобальный объект.
Импортируемый модуль доступен только для чтения: мы не можем его изменять.
Оператор delete возвращает логическое значение: true при успешном удалении, иначе - false
	Однако, переменные, объявленные с помощью ключевых слов, не могут быть удалены с помощью delete
Классы являются синтаксическим сахаром для функций-конструкторов.
Генераторы не могут использоваться в качестве конструкторов, т.е. с ключевым словом new
Объявления классов не поднимаются в начало области видимости. 
	Поэтому использовать класс можно только после его объявления
undefined, функции и символы не являются валидными JSON-значениями. 
	Такие значения не включаются в объект и конвертируются (преобразуются) в null.
new.target ссылается на конструктор (указывает на класс), который вызывается с помощью ключевого слова new



Выражение typeof ClassName возвращает function
	Boolean([]) === true; 
	Number([]) === 0; 
	Number({}) - NaN 
	NaN === NaN -	 false
	Boolean(new Boolean(false)) - true (если мы уберем ключевое слово new, то получим false)

	typeof(null) - 'object'
	typeof(NaN) - 'number'
	typeof('') - 'string'
	typeof function () {} === "function"
	typeof class C {} === "function"
Все функции-конструкторы, созданные с помощью 'new', будут иметь тип 'object'
	typeof new Date() === "object"
	typeof new Boolean(true) === "object"
	typeof new Number(1) === "object"
	typeof new String("abc") === "object"
Но существует исключение для конструктора Function:
	var func = new Function(); typeof func; // Вернёт 'function'



todo =================//
* ====================================================================================================//
* API																				https://habr.com/ru/articles/464261/#api 
* Rest API Soap GraphQL Websockets RPC			https://www.youtube.com/watch?v=XaTwnKLQi4A
*	Особенности ES6														https://frontend-stuff.com/blog/es6/ | https://artzolin.ru/javascript-theory/javascript-es6-features/
* Императивный и Декларативный стили				https://doka.guide/tools/programming-paradigms/
* Функции первого класса / высшего порядка	https://habr.com/ru/companies/ruvds/articles/428570/
* Чистые функции														https://habr.com/ru/articles/437512/
* Операции, выражения и инструкции					https://jsflow.org/docs/operators-expressions-statements/
*	Временная мертвая зона										https://russianblogs.com/article/34231534838/
* Var области видения, всплытие							https://learn.javascript.ru/var / https://doka.guide/js/closures/
* Области видимости let и const							https://jsflow.org/docs/block-scope/ / https://learn.javascript.ru/closure
*	Замыкания																	https://learn.javascript.ru/closures																									
* Лексическое окружение											https://jsflow.org/docs/lex-env/
* Рекурсия																	https://doka.guide/js/recursion/
* EventLoop																	https://doka.guide/js/async-in-js/ // https://www.youtube.com/watch?v=zDlg64fsQow // http://latentflip.com/loupe/
* axios																			https://my-js.org/docs/cheatsheet/axios

*/