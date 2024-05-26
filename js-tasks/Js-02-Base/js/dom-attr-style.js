// Dom ====================================================================================================//

/*

/ Тэги =================//

1. Вывести в консоль все ли через  for & foreEach
2. Вывести родителя, потомков и соседние елементы
3. Заменить контент с тегами и без тегов
4. Сделать проверку по тегу (tagName) и заменить контент
5. Создать и добавть новый тег в начало, конец, итд
6. Создать ul c li и вставить его
7. Сделать тоже самое (6) через insertAdjacentHTML

/ Attributes =================//
1. Получить атрибут элемента (getAttribute('href'))
2. Изменить атрибут атрибут элемента (setAttribute)
3. Проверить наличие атрибута (hasAttribute)
4. Удалить атрибут (removeAttribute)
5. Добавить свой атрибут
6. Получить атрибут элемента через dataset

/ Style =================//
1. Поменять цвет элементу
2. Добавить бэкграунд
3. Записать через cssText
4. Добавить класс через className (перезаписать/+=добавить)

/ FULL =================//
1. Создать div, a, button, list, input
2. Вставить их в html разными способами в разные места
3. Добавить/убрать/изменить классы
4. Добавить/убрать/изменить аттрибуты, получить значения в константы
5. Добавить стили разными методами
6. Добавить псевдоэлементы

	<div class="block">
		<ul class="list">
			<li class="item">1</li>
			<li class="item">2</li>
			<li class="item">3</li>
		</ul>
		<button class="button">CLICK!!!</button>
		<input type="checkbox" name="my-checkbox">
		<a href="">link</a>
	</div>
*/

const items = document.querySelectorAll('.item')
const list = document.querySelector('.list')
const button = document.querySelector('button')
const link = document.querySelector('a')


//items.forEach(function (i) {
//	console.log(i)
//})

//for (i = 0; i < items.length; i++) {
//	console.log(items[i])
//}


const secondItemList = list.children[1]

const newDiv = document.createElement('div')
const newLink = document.createElement('a')
const newButton = button.cloneNode(true);


newDiv.textContent = 'lorem lorem lorem lorem '
link.after(newDiv)

newLink.innerHTML = 'This is link'
newDiv.after(newLink)

newLink.setAttribute('href', 'http://www.com')
//console.log(newLink.getAttribute('href'))
newLink.style.cssText = `
display: inline-block;
margin-top: 20px;
color: red;
`;

button.style.cssText = `
padding: 10px 25px;
margin-bottom: 20px;
background-color: green;
border: none;
`
newLink.after(newButton)

newButton.style.cssText = `
padding: 10px 25px;
margin-bottom: 20px;
background-color: green;
border: none;
display: block;
margin-top: 20px;
`;
newButton.setAttribute('data-button', 'green-button')

button.insertAdjacentHTML('afterend', '<input class = "input" type = "text" data-input = "some-text" placeholder = "text text"> ')

const newInput = document.querySelector('.input')
console.log(newInput)



newInput.style.cssText = `
display: block;
color: red;
`

if (newInput.dataset.input = 'some-test') {
	newInput.removeAttribute('data-input')
	list.insertAdjacentHTML('beforeend', '<li>4</li>')
}

if (newInput.dataset.input = 'some-test') {
	newInput.removeAttribute('data-input')
	list.insertAdjacentHTML('beforeend', '<li>4</li>')
}