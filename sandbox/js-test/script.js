const newDiv = document.createElement('DIV')
newDiv.innerText = 'This is first tag'
newDiv.style.fontSize = '35px'
newDiv.setAttribute('id', 'two')
document.body.prepend(newDiv)

const element = document.getElementById('two')
element.textContent = 12 * 12

const elementOne = document.createElement('div')
elementOne.innerText = 'Hello world'
element.after(elementOne)

const elementThree = document.createElement('h2')
elementThree.innerHTML = 'hello <span>everyone!!!</span>'
elementThree.style.fontSize = '45px'
elementThree.style.textAlign = 'center'
elementThree.style.textTransform = 'uppercase'
document.body.prepend(elementThree)

const span = elementThree.querySelector('span')
span.style.color = 'red'

const elementFour = document.createElement('div')
elementFour.innerHTML = '<h4>SubTitle</h4>'
elementFour.className = 'sub-title'
elementFour.innerHTML += '<p>lorem	lorem</p>'
elementOne.append(elementFour)

const link = document.createElement('a')
link.innerText = 'this is link'
link.setAttribute('href', 'https://learn.javascript.ru/try-catch')
link.classList.add('link')
elementFour.append(link)

const elementFive = document.createElement('div')
elementFive.innerText = element.innerText
link.append(elementFive)

document.body.innerHTML = ''