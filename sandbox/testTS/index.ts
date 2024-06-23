const contentWrapper = document.createElement('div')
contentWrapper.style.height = '35px'
contentWrapper.style.marginTop = '50px'
contentWrapper.style.marginLeft = '50px'
contentWrapper.style.width = '300px'
contentWrapper.className = 'content-wrapper'
document.body.prepend(contentWrapper)

// input =================//

const inputName = document.createElement('input')
inputName.style.cssText = `
	height: 100%;
	border: 1px solid black;
	padding-left: 15px;
	margin-bottom:5px;
	display: block;
	width: 100%`
inputName.setAttribute('type', 'text')
inputName.setAttribute('placeholder', 'Name')
contentWrapper.prepend(inputName)

inputName.addEventListener('focusin', () => {
	inputName.removeAttribute('placeholder')
})
inputName.addEventListener('focusout', () => {
	inputName.setAttribute('placeholder', 'Name')
})


const inputSurName = document.createElement('input')
inputSurName.style.cssText = `
	height: 100%;
	border: 1px solid black;
	margin-bottom:5px;
	padding-left: 15px;
	width: 100%`
inputSurName.setAttribute('type', 'text')
inputSurName.setAttribute('placeholder', 'Surname')
inputName.after(inputSurName)

inputSurName.addEventListener('focusin', () => {
	inputSurName.removeAttribute('placeholder')
})
inputSurName.addEventListener('focusout', () => {
	inputSurName.setAttribute('placeholder', 'Surname')
})

// button =================//

const button = document.createElement('button')
button.innerHTML = 'GO'
button.innerHTML
button.style.cssText += `
background: gray;
height: 100%;
width: 40px;
border: 1px solid black;
width: 100%`
button.addEventListener('mouseover', () => {
	button.style.background = 'green'
})
button.addEventListener('mouseout', () => {
	button.style.background = 'gray'
})
inputSurName.insertAdjacentElement("afterend", button)

// showValue =================//

const showValue = document.createElement('div')
showValue.style.cssText = `
	font-size: 24px;
	margin-top: 30px
`
button.insertAdjacentElement("afterend", showValue)


// out =================//
const out = document.createElement('div')
//out.innerText = 'This is out'
out.style.cssText = `
	margin-top: 15px;
	font-size: 32px
`
button.insertAdjacentElement('afterend', out)



// ? =================//


button.addEventListener('click', function f1() {
	let value1 = inputName.value
	let value2 = inputSurName.value
	const new Date()
	if (+value1 > +value2) {
		out.innerText = value1
	}
	else {
		out.innerText = value2
	}
	inputName.value = ''
	inputSurName.value = ''
})
