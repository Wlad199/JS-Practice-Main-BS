const out = document.createElement('p')
out.style.cssText = `
font-size: 32px`
document.body.prepend(out)

document.body.style.maxWi

const button = document.createElement('button')
button.innerText = 'BUTTON'
button.style.cssText = `
background: gray;
padding: 10px 15px;
margin: 40px;
border: 1px solid black`
out.insertAdjacentElement("beforebegin", button)

const input1 = document.createElement('input')
input1.setAttribute('type', 'number')
input1.style.cssText = `
padding-left: 10px;
margin-left: 30px;
margin-bottom: 10px;
margin-top: 30px;
border: 1px solid #000;
display: block`
button.before(input1)

const input2 = document.createElement('input')
input2.setAttribute('type', 'number')
input2.style.cssText = `
padding-left: 10px;
margin-left: 30px;
margin-bottom: 10px;
border: 1px solid #000;
display: block`
button.before(input2)

//  =================//



function f1(a, b) {
	let str = ''
	while (a <= b) {
		str += `${a} `
		if (a % 2 === 0) {
			a++
		} else {
			continue
		}
	}
	return str
}

console.log(f1(0, 20))